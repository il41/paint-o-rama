// _.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~
// _.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~ logic for our app menu
// _.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~

let currentBrush = "basicPen" // keep track of the last selected brush
// noise brush slider variables
var slider;
var slider2;
var slider3;
var slider4;
//slider labels
var labels = $('.label-section');
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




// create array of objects for each img element on our index.html page
let imgs = document.querySelectorAll('img')
// loop as many times are there are image elements
for (let i = 0; i < imgs.length; i++) {
    // assign a function to each image's "click" event
    imgs[i].addEventListener('click',(e)=>{
        // set the value of currentBrush to this image's id value
        currentBrush = e.target.id
    })
}

// create array of objects for each span element on our index.html page
let spans = document.querySelectorAll('span')
// loop as many times are there are span elements
for (let i = 0; i < spans.length; i++) {
    // assign a function to each span's "click" event
    spans[i].addEventListener('click',(e)=>{
        // run the applyFilter funciton, passing along the id of the clicked span
        applyFilter( e.target.id )
    })
}


// this funciton will apply a different filter depending on the value we pass it
function applyFilter(filterName){

    if(filterName=="desaturate"){

        desaturate()

    } else if(filterName=="invert"){

        invert()

    }

}

// _.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~
// _.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~ our familiar p5.js structure
// _.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~

function preload() {
    loadStarImage()
    loadCatImages()
}

function setup(){
    createCanvas(innerWidth,innerHeight)
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
    labels.hide();




}

function draw(){

    if(mouseIsPressed){

        if(currentBrush=="basicPen"){

            basicPen( mouseX, mouseY )
            hideSliders();
            labels.hide();

        } else if(currentBrush=="rainbowPen"){

            rainbowPen( mouseX, mouseY )
            hideSliders();
            labels.hide();


        } else if(currentBrush=="starBrush"){

            starBrush( mouseX, mouseY )
            hideSliders();
            labels.hide();


        } else if(currentBrush=="catsBrush"){

            catsBrush( mouseX, mouseY )
            hideSliders();
            labels.hide();


        } else if(currentBrush=="noiseBrush"){

            noiseBrush( mouseX, mouseY )
            showSliders();
            labels.show();


        }

    }
}
