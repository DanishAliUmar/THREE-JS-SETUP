# Three.js Shader Project

A Three.js project showcasing custom shaders, interactive controls, and smooth animations. This setup serves as a foundation for creating complex 3D scenes and animations using Three.js.

## Overview

This project demonstrates the use of Three.js to render a 3D scene with custom shaders, camera orbit controls, and a GUI for real-time adjustments. It includes basic setup and extensible code for developing more complex 3D graphics applications.

## Features

- Custom vertex and fragment shaders.
- Responsive design with resize handling.
- Camera controls using OrbitControls.
- Real-time parameter adjustment with dat.GUI.
- Animation support via GSAP.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/DanishAliUmar/THREE-JS-SETUP.git
    cd THREE-JS-SETUP
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

## Usage

To run the project in development mode:

```bash
npm run dev

```

## Project Structure

THREE-JS-SETUP/
├── node_modules/
├── shaders/
│   ├── fragment.glsl
│   └── vertex.glsl
├── src/
│   ├── index.js
│   └── app.js
├── .gitignore
├── package.json
├── README.md
└── index.html

shaders/: Contains GLSL shader files.
src/: Contains main JavaScript files.
index.html: Main HTML file.





## Dependencies
This project uses the following libraries:

Three.js: JavaScript 3D library.
dat.GUI: Lightweight GUI controller library.
GSAP: JavaScript animation library.


## Development

## Main Components

Shader Material:  shaders (vertex and fragment) are applied to a plane geometry in the scene.
Orbit Controls: Allows user interaction to rotate the camera around the scene.
dat.GUI: Provides a graphical interface for real-time adjustments of shader parameters.

## Code Overview

index.js: Entry point of the application.
app.js: Contains the Sketch class which initializes the scene, camera, renderer, and controls. Manages the shader materials and the animation loop.

## Setting Up Shaders

Shaders are imported from the shaders directory and used to create a ShaderMaterial, which is then applied to the plane geometry.

## Adding GUI Controls

Interactive GUI controls are added using the dat.GUI library, allowing real-time tweaking of shader parameters.

## Running the Project

Ensure Node.js is installed, then execute:

``` bash
npm install
npm run start

```
### Contributing
Contributions are welcome! Please fork the repository and submit a pull request for review.

## Contact
For any inquiries, please contact:

Danish Ali Umar
danishaliumar4@gmail.com

