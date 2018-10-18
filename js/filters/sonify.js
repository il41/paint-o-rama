let sonifyAlgo = "guitar"

function openSonify(){
  let menu = document.querySelector("#sonifymenu")
  if(menu.style.display=="block"){
    menu.style.display="none"
  }else{
    menu.style.display="block"
  }
}

document.querySelector("#algo1").addEventListener("click",function(){
  sonifyAlgo = "guitar"
})

document.querySelector("#algo2").addEventListener("click",function(){
  sonifyAlgo = "long"
})

document.querySelector("#sonifyplay").addEventListener("click",function(){
  sonify()
})

function sonify()
{
  loadPixels()
  const actx = new (window.AudioContext || window.webkitAudioContext)()
  let buffer = actx.createBuffer(2, pixels.length, actx.sampleRate)
  for (let ch=0; ch<buffer.numberOfChannels; ch++) {
    let samples = buffer.getChannelData(ch)
      if(sonifyAlgo == "guitar"){
        guitar(samples,pixels)
      } else if(sonifyAlgo == "long"){
        long(samples,pixels)
      }
  }
  // so now that we've created a buffer && filled it w/random values, we can play it, just like before we need an audio source node, this time we'll create an AudioBufferSourceNode
  let noise = actx.createBufferSource()
  // then we'll replace it's buffer with the one we made above
  noise.buffer = buffer
  // then just like before we need to connect it to it's destination
  noise.connect(actx.destination)
  // && lastly we start playing the sound (should only last 2 seconds, the length of our buffer)
  noise.start()

}

function guitar(samples,pixels){
  for (let s=0; s<samples.length; s++) {
    //guitarArray[s] = map(pixels[s],0,255,-1,1)
    samples[s] = pixels[s*4]/255-1
    //samples[s] = (pixels[s*8]*pixels[(s+4)*8])/255-1
  }
}

function long(samples,pixels){
  for (let s=0; s<samples.length; s++) {
    samples[s] = map(pixels[s],0,255,-1,1)
    //samples[s] = pixels[s*4]/255-1
    //samples[s] = (pixels[s*8]*pixels[(s+4)*8])/255-1
  }
}
