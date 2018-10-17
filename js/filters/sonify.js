function sonify()
{
  loadPixels()
  const actx = new (window.AudioContext || window.webkitAudioContext)()


  let buffer = actx.createBuffer(2, actx.sampleRate*2, actx.sampleRate)

  for (let ch=0; ch<buffer.numberOfChannels; ch++) {
    let samples = buffer.getChannelData(ch)
    for (let s=0; s<buffer.length; s++) {
      samples[s] = pixels[s]/255-1
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
