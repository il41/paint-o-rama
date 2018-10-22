var cam

function webcamSetup(){

  cam = createCapture(IMAGE)
  cam.size(innerHeight,innerWidth)

}

function webcam(){

    push()
    if(!cam){
      console.log("hi")
      cam = createCapture(VIDEO)
      cam.size(innerHeight,innerWidth)
      cam.hide()
    }

    image(cam,0,0,innerHeight,innerWidth);
    pop()

}
