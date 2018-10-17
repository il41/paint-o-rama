let screws = []


function loadMp3Sounds() {
  let soundMp3s = [
    'mp3s/faneto.m4a',
    'mp3s/returntoinnocence.m4a',
    'mp3s/tilltheworldends.m4a'
  ]
    //how do i call the mp3 files in an array? also want to add ellipse function
    //...after the array so it draws while cycling through sound files

  for (let i = 0; i < soundMp3s.length; i++) {
      // find sound equivalent to img since img also a function in javascript if not title it whatev?
      let mp3 = loadSound(soundMp3s[i])
      // add sound data to the sounds array
      screws.push( mp3 ) //what is the push function doing here? (copied from your catsBrush)
  }

}
function djScrewBrush(x, y){
  let ran = random(0, screws.length -1);
  ran = floor(ran);
  
  //maybe do ellipse function or image drawing function for soundbrush idk which.
  ellipse(x, y, 55, 55);
  screws[ran].play()
}
