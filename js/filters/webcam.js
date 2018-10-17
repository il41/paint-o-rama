var cam

function webcam(){
    cam = createCapture(VIDEO)
    cam.size(innerHeight,innerWidth)

    cam.position(mouseX,0);
    image(capture,0,0,innerHeight,innerWidth);
}
