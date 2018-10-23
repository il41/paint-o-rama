var cam

function webcam(){

    push()
    if(!cam){
      cam = createCapture(VIDEO)
      cam.size(innerHeight,innerWidth)
      cam.hide()
    }

    image(cam,0,0,innerHeight,innerWidth);
    pop()

}
