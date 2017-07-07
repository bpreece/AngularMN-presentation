/*
 * Copyright © 2017 Ben Preece
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software
 * is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 *THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 *OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 *IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 *CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 *TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
 *OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var THREE;

function ng3jsBoxesModel() {
    
    // Create lighting for the model

    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.25);
    this.directionalLightA = new THREE.DirectionalLight(0xffffff, 1);
    this.directionalLightA.position.set(10, 11, 12);
    this.directionalLightB = new THREE.DirectionalLight(0x555588);
    this.directionalLightB.position.set(-21, 13, -8);
            
    // Create a library of materials to use to create the boxes

    var materials = [
        new THREE.MeshLambertMaterial({color: 0x816c4f}),
        new THREE.MeshLambertMaterial({color: 0x57322a}),
        new THREE.MeshLambertMaterial({color: 0x2d1f16}),
        new THREE.MeshLambertMaterial({color: 0x82bcf8}),
        new THREE.MeshLambertMaterial({color: 0x006593}),
        new THREE.MeshLambertMaterial({color: 0x253f60})
    ];
            
            
    // Create a set of 250 random boxes

    var BOX_COUNT = 250;
    this.boxes = [ ];
    for (var n = 0; n < BOX_COUNT; n++) {
        var geometry = new THREE.BoxGeometry(Math.random() * 100, Math.random() * 100, Math.random() * 100);
        var material = materials[Math.floor(Math.random() * materials.length)];
        var box = new THREE.Mesh(geometry, material);
        box.position.set((Math.random()  - 0.5) * 1000, (Math.random()  - 0.5) * 1000, (Math.random()  - 0.5) * 1000);
        this.boxes.push(box);
    }
    
    // The build() function.  This will be called by the canvas to add all the model elements to the scene

    this.build = function (canvas) {
        this.canvas = canvas;

        // Set the clear color

        canvas.renderer.setClearColor(0x123456, 1);
        
        // Add the lighting to the scene

        canvas.scene.add(this.ambientLight);
        canvas.scene.add(this.directionalLightA);
        canvas.scene.add(this.directionalLightB);
        
        // Add the boxes to the scene

        for (var n = 0; n < BOX_COUNT; n++) {
            canvas.scene.add(this.boxes[n]);
        }
            
        // Initialize the camera position

        canvas.camera.position.set(0, 0, 750);
        canvas.camera.lookAt(new THREE.Vector3(0, 0, 0));

    };
}
