let cowboy = []

function loadCowboyImages(){
    // array with paths to the different cowboy images
    let cowboyURLs = [
        'images/cowboy_1.png',
        'images/cowboy_2.png',
        'images/cowboy_3.png',
        'images/cowboy_4.png',
        'images/cowboy_5.png',
        'images/cowboy_6.png',
        'images/cowboy_7.png',
        'images/cowboy_8.png',
        'images/cowboy_9.png'
    ]
    // loop as many times as there are paths in the array
    for (let i = 0; i < cowboyURLs.length; i++) {
        // load the next cat image, assign it to the image variable
        let img = loadImage( cowboyURLs[i] )
        // add that img data to the cowboy array
        cowboy.push( img )
    }
}

function cowboyBrush(x,y){
    push() // save current drawing settings
    let ran = random( 0, cowboy.length-1 ) // pick a random index from cowboy array
    ran = floor( ran ) // make sure it is not a float by rounding down
    image( cowboy[ran], x, y, 50, 50 ) // draw a random cowboy
    pop() // restore original drawing settings
}
