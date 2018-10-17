function redblue(){
  push() // save current drawing settings
  loadPixels() // load all pixel data into the "pixels" array
  // loop as many times as there are pixel values in the pixels array
  for( let i=0; i<pixels.length; i+=4){
      let r = pixels[i] // red value
      let g = pixels[i+1] // green value
      let b = pixels[i+2] // blue value
      let a = pixels[i+3] // alpha channel
      let med = (r+g+b)/3 // create median value
  }
  if (med <= 85) {
      pixels[i] = med //re-assign red value
      pixels[i+1] = 0
      pixels[i+2] = 0
  } else if ((med >= 86)&&(med <= 170)) {
      pixels[i] = 0
      pixels[i+1] = med //re-assign green value
      pixels[i+2] = 0
  } else (){
      pixels[i] = 0
      pixels[i+1] = 0
      pixels[i+2] =
  }
  updatePixels() // update canvas from modified "pixels" array
  pop() // restore original drawing settings
}
