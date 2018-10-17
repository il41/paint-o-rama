function redblue(){
  push() // save current drawing settings
  loadPixels() // load all pixel data into the "pixels" array
  // loop as many times as there are pixel values in the pixels array
  for( let i=0; i<pixels.length; i+=4){
      let r = pixels[i] // red value
      let g = pixels[i+1] // green value
      let b = pixels[i+2] // blue value
      let a = pixels[i+3] // alpha channel
      let grey = (r+g+b)/3 // create grey value
      pixels[i] = grey // re-assign red value
      pixels[i+1] = grey // re-assign green value
      pixels[i+2] = grey // re-assign blue value
  }
  updatePixels() // update canvas from modified "pixels" array
  pop() // restore original drawing settings
}
