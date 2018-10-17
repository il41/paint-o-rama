function pinkparty(){
    push() // save current drawing settings
    loadPixels() // load all pixel data into the "pixels" array
    // loop as many times as there are pixel values in the pixels array
    for( let i=0; i<pixels.length; i+=4){
        pixels[i] = 255 // keeps red value full
        pixels[i+1] = map(i,0,pixels.length,0,255)// adjusts green to keep pink
        pixels[i+2] = map(i,0,pixels.length, 99,255)// adjusts blue to keep pink
    }
    /*for( let i=0; i<pixels.length; i+=4){
      if( Math.random()<0.3 ) {
        pixels[i] = 255
        pixels[i+1] = 255// adjusts green to keep pink
        pixels[i+2] = 255// adjusts blue to keep pink
      }
    }*/
  updatePixels() // update canvas from modified "pixels" array
    for( let i=0; i<10000; i++ ){
      let x = Math.random()*width
      let y= Math.random()*height
      fill(255)
      noStroke()
      rect(x,y,2,2)
    }
    pop() // restore original drawing settings
}
