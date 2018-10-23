let acidhouse = []

function loadacidhouseImages(){
    // array with paths to the different cat images
    let acidhouseURLs = [
        'acidhouseimages/dogcoins.png',
        'acidhouseimages/peace.png',
        'acidhouseimages/smiley-clipart-house-3.png'
    ]
    // loop as many times as there are paths in the array
    for (let i = 0; i < acidhouseURLs.length; i++) {
        // load the next cat image, assign it to the image variable
        let img = loadImage( acidhouseURLs[i] )
        // add that img data to the acidhouse array
        acidhouse.push( img )
    }
}

function acidhouseBrush(x,y){
    push() // save current drawing settings
    colorMode(HSB)// sets the color mode to HSB
    // random numbers for hsb values between 0 and 255
    let value1 = random( 255 )
    let value2 = random( 255 )
    let value3 = random( 255 )
    let randomsize = random( 75 )
    // the operation that determines the color of the rectangle
    fill( frameCount % 360, value1,value2 )
    stroke(value1,value2,value3)
    //draws a rectangle behind the image
    rect( x, y, randomsize, 50)

    let ran = random( 0, acidhouse.length-1 ) // pick a random index from the acidhouse array
    ran = floor( ran ) // make sure it is not a float by rounding down
    image( acidhouse[ran], x, y, randomsize, 50) // draw a random image from the
    pop() // restore original drawing settings
}
