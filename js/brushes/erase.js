let ctx
function erase(x,y){
    push() // save current drawing settings
    fill(100,100,20)
    ctx.clearRect(x,y,100,100)
    pop() // restore original drawing settings
}

function eraseSetUp(drawingContext){
    ctx=drawingContext
    push()
    fill(255,255,255)
    noStroke()
    rect(0,0,width, height)
    document.body.style.backgroundImage="url(../images/backgroundCode.png)"
    pop()

}
