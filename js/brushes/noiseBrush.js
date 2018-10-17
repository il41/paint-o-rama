function noiseBrush(x,y){
    push() // save current drawing settings
        stroke(0,50);
        strokeWeight(2);
        var x1 = mouseX*2 * noise(t + 15);
        var x2 = mouseX*2 * noise(t + 25);
        var x3 = mouseX*2 * noise(t + 35);
        var x4 = mouseX*2 * noise(t + 45);
        var y1 =  mouseY*2 * noise(t + 55);
        var y2 =  mouseY*2 * noise(t + 65);
        var y3 =  mouseY*2 * noise(t + 75);
        var y4 =  mouseY*2 * noise(t + 85);
        t += 0.003; // changes noise speed
        bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    pop() // restore original drawing settings
}
