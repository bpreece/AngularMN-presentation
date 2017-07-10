# AngularMN-presentation

https://github.com/bpreece/AngularMN-presentation.git

This project contains the slides and the source code for a presentation to the AngularMN user group
on 12 July, 2017, at Virtuwell in St. Paul, MN.

## Overview

ThreeJS is a free and open-source javascript library for 3D modeling in a web browser.  

This presentation discusses how a ThreeJS application can be structured to fit into the MVC paradigm 
used by AngularJS applications.

## Source Files

> **3js/3jsBoxes.html**
>> This web page displays a minimal monolithic ThreeJS application.  The model comprises a number boxes 
>> generated with random colors, random sizes, and random positions.  It illustrates the basic 
>> components of a ThreeJS model and the ThreeJS components necessary to render a model on the screen.
>> There are no user controls or animation in this web page.

>> This page does not depend on any other project files.

> **3js/3jsBoxesWithAnimation.html**
>> This is a clone of *3jsBoxes.html*, with the addition of an animation which moves the camera among the 
>> boxes.

>> This page does not depend on any other project files.

> **3js/3jsBoxesWithControls.html**
>> This is a clone of *3jsBoxes.html*, with the addition of sliders that allow the user to move the camera in 
>> the x, y, and z directions.

>> This page does not depend on any other project files.

> **ng3js/ng3jsBoxes.html**
>> This web page is functionally the same as *3jsBoxes.html*. The model has been factored out as
>> an AngularJS service, and the rendering functions have been factored out as an AngularJS directive.

>> This page requires *ng3jsBoxesModel.js* and *ng3jsCanvas.js*.

> **ng3js/ng3jsBoxesWithAnimation.html**
>> This is a clone of *ng3jsBoxes.html*, but with the same animation as *3jsBoxesWithAnimation.html*.

>> This page requires *ng3jsBoxesModel.js* and *ng3jsCanvas.js*.

> **ng3js/ng3jsBoxesWithControls.html**
>> This is a clone of *ng3jsBoxes.htmnl*, but with the same user controls as *3jsBoxesWithControls.html*.

>> This page requires *ng3jsBoxesModel.js* and *ng3jsCanvas.js*.

> **ng3js/ng3jsBoxesModel.js**
>> This is the same ThreeJS model used by *3jsBoxes.html*, *3jsBoxesWithAnimation.html* and 
>> *3jsBoxesWithControls.html*, but refactored to be implemented as an AngularJS service.

>> This script is used by *ng3jsBoxes.html*, *ng3jsBoxesWithAnimation.html*, and 
>> *ng3jsBoxesWithControls.html*.

> **ng3js/ng3jsCanvas.js**
>> This is the same ThreeJS used by *3jsBoxes.html*, *3jsBoxesWithAnimation.html*, and 
>> *3jsBoxesWithControls.html*, but refactored to be implemented as an AngularJS directive in an HTML file.

>> This script is used by *ng3jsBoxes.html*, *ng3jsBoxesWithAnimation.html*, and 
>> *ng3jsBoxesWithControls.html*.

## References

* [ThreeJS web page](https://threejs.org)
