var slider;
var slider2;
var slider3;
var slider4;
//slider labels
//var labels = $('.label-section');
var labels = document.querySelector('.label-section');
// function that will hide sliders in setup & draw function
function hideSliders() {
for (var i = 0; i < slidersArray.length; i++) {
        slidersArray[i].hide();
    }
}
// function that will show sliders in draw function
function showSliders() {
for (var i = 0; i < slidersArray.length; i++) {
        slidersArray[i].show();
    }
}


function noiseBrush(x,y){

    push() // save current drawing settings
        colorMode(HSB);
        let hue = map( x+y, 0, width+height, 0, 360 )
        noFill();
        stroke(hue, 100, slider4.value(), slider3.value()/10);
        strokeWeight(slider2.value());
//what i was originally doing
        // var x1 = mouseX*2 * noise(t + 10000);
        // var x2 = mouseX*2 * noise(t + 20000);
        // var x3 = mouseX*2 * noise(t + 30000);
        // var x4 = mouseX*2 * noise(t + 40000);
        // var y1 =  mouseY*2 * noise(t + 50000);
        // var y2 =  mouseY*2 * noise(t + 60000);
        // var y3 =  mouseY*2 * noise(t + 70000);
        // var y4 =  mouseY*2 * noise(t + 80000);
//but i think this is cooler
        var x1 = windowWidth * noise(t + 10000);
        var x2 = windowWidth * noise(t + 20000);
        var x3 = windowWidth * noise(t + 30000);
        var x4 = windowWidth * noise(t + 40000);
        var y1 =  windowHeight * noise(t + 50000);
        var y2 =  windowHeight * noise(t + 60000);
        var y3 =  windowHeight * noise(t + 70000);
        var y4 =  windowHeight * noise(t + 80000);
        t += slider.value()/1000; // changes noise speed
        bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    pop() // restore original drawing settings
}

function setupNoiseBrush() {
    t=0; // noise variable for noise brush
    //create & position sliders
    slider = createSlider(1,15,3);
    slider2 = createSlider(1,10,2);
    slider3 = createSlider(0,10,5);
    slider4 = createSlider(1,100,100);
    slider.position(90,200);
    slider2.position(90,240);
    slider3.position(90,280);
    slider4.position(90,320);
    //create slider labels
    slidersArray = [slider, slider2, slider3, slider4];
    hideSliders();
    labels.style.display = "none";
}

function toggleNoiseBrushUI(x) {
    if (x=="noiseBrush") {
        showSliders();
        labels.style.display = "block";
    } else {
        hideSliders();
        labels.style.display = "none";
    }
}
