// import * as THREE from 'three';
// import fragment from './shaders/fragment.glsl';
// import vertex from './shaders/vertex.glsl';

// export default class Sketch {
//     constructor() {
//         this.renderer = new THREE.WebGLRenderer({ antialias: true });
//         this.renderer.setSize(window.innerWidth, window.innerHeight);
//         document.getElementById('container').appendChild(this.renderer.domElement);

//         this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
//         this.camera.position.z = 1;

//         this.scene = new THREE.Scene();

//         this.addMesh();

//         this.time = 0;
//         this.render = this.render.bind(this); // Bind this to render method
//         this.render();
//     }

//     addMesh() {
//         this.geometry = new THREE.PlaneGeometry(1, 1);
        
//         this.material = new THREE.ShaderMaterial({
//             fragmentShader: fragment,
//             vertexShader: vertex,
//             uniforms: {
//                 process: { type: "f", value: 0 }
//             },
//             side: THREE.DoubleSide
//         });

//         this.mesh = new THREE.Mesh(this.geometry, this.material);
//         this.scene.add(this.mesh);
//     }

//     render() {
//         this.time++;
//         this.mesh.rotation.x += 0.01;
//         this.mesh.rotation.y += 0.02;
//         console.log(this.time);
//         this.renderer.render(this.scene, this.camera);
//         window.requestAnimationFrame(this.render);
//     }
// }

// new Sketch();

