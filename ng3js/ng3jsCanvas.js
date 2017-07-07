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

function ng3jsCanvas(model) {

    // Define the callback for a resize event.  This adjusts the dimensions 
    // of the canvas when its DOM element changes size.

    this.adjustSize = function () {
        this.camera.aspect = this.element.clientWidth / this.element.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.element.clientWidth, this.element.clientHeight);
    };

    // Define addAnimation() to let the model register an animation function

    this.animator = { update: function () { } };
    this.addAnimation = function (animator) {
        this.animator = animator;
    };

    // Define the animation function

    var animate = function (timestamp) {
        requestAnimationFrame(animate);
        this.animator.update(timestamp);
        this.renderer.render(this.scene, this.camera);
    }.bind(this);

    // Define the init() function.  This sets up the canvas, calls the model 
    // to insert its components, and starts the animation

    this.init = function (element) {

        // Create a renderer and link it into the DOM

        this.element = element;
        this.renderer = new THREE.WebGLRenderer({antialias: true});
        element.appendChild(this.renderer.domElement);
        element.focus();

        // Set the clear color 

        this.renderer.setClearColor(0x0, 1);

        // Create the camera and scene

        this.camera = new THREE.PerspectiveCamera(70, element.clientWidth / element.clientHeight, 1, 2500);
        this.scene = new THREE.Scene();

        // Regist the callback function for resize events

        window.addEventListener('resize', function () {
            this.adjustSize();
        }.bind(this), false);
        this.adjustSize();

        // Call the model to insert its components into the scene

        model.build(this);

        // Start the animation

        animate();
    };
}

function ng3jsCanvasDirective() {
    return {
        restrict: 'E',
        scope: {model: "="},
        link: function (scope, element, attrs, controller) {
            new ng3jsCanvas(scope.model).init(element[0]);
        }
    };
}
