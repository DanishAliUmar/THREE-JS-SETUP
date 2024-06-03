import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import fragment from "./shaders/fragment.glsl";
import vertex from "./shaders/vertex.glsl";
import * as dat from "dat.gui";
import { TimelineMax } from "gsap";

export default class Sketch {
  constructor(selector) {
    this.scene = new THREE.Scene();

    this.renderer = new THREE.WebGLRenderer();
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0xeeeeee, 1);

    this.container = document.getElementById("container");
    this.container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.001,
      1000
    );

    this.camera.position.set(0, 0, 2);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.time = 0;

    this.paused = false;


    this.setupResize();
    this.resize();
    this.addObjects();
    this.render();
    // this.settings();
  }

  settings(){
    let that = this;
    this.settings ={
        time:0,
        amplitude: 1,
        diffAmplitude : 1,
        period1: 1,
        period2: 1,
        perlinAmplitude: 1,
        timeSpeed: 1,
        oneWave: 1000,
        size: 5,
        fly: function() {
            alert("fly")
        }
    };


    // Create a dat.GUI instance
this.gui = new dat.GUI();

// Add GUI controls for various settings
this.gui.add(this.settings, "time", 0, 100, 0.01);
this.gui.add(this.settings, "amplitude", 0, 10, 0.01);
this.gui.add(this.settings, "diffAmplitude", 0, 10, 0.01);
this.gui.add(this.settings, "period1", 0, 10, 0.01);
this.gui.add(this.settings, "period2", 0, 10, 0.01);
this.gui.add(this.settings, "timeSpeed", 0, 1, 0.001);
this.gui.add(this.settings, "perlinAmplitude", 0, 10, 0.01);
this.gui.add(this.settings, "oneWave", 1000, 100000, 100);
this.gui.add(this.settings, "size", 0.1, 200, 0.1).name("Size");
this.gui.add(this.settings, "fly").name("Test fly");

  }

  // Set up a resize handler
setupResize() {
    window.addEventListener("resize", this.resize.bind(this));
  }
  
  // Handle window resize
  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
  }

  addObjects(){
      this.material = new THREE.ShaderMaterial({
        extensions: {
          derivatives: "#extension GL_OES_standard_derivatives : enable",
        },
        side: THREE.DoubleSide,
        uniforms: {
          time: { type: "f", value: 0 },
          pixels: { type: "v2", value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
          uvRate1: { value: new THREE.Vector2(1, 1) },
        },
        // wireframe: true,
        // transparent: true,
        vertexShader: vertex,
        fragmentShader: fragment,
      });

      // Create a 3D plane geometry
        this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);

        // Create a mesh using the geometry and material
        this.points = new THREE.Mesh(this.geometry, this.material);

        // Add the mesh to the scene
        this.scene.add(this.points);
  }

  stop() {
    this.paused = true;
}

play() {
    this.paused = false;
    this.render();
}

render() {
    if (this.paused) return;
    this.time += 0.05;
    this.material.uniforms.time.value = this.time;
    requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this.scene, this.camera);
}
}
new Sketch("container");