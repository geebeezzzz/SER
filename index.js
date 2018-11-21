lottie.loadAnimation({
  container: document.getElementById('svgContainer'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'scripts/data.json' // the path to the animation json

/////////////////////////////////

});


var myVar = setInterval(myTimer, 1000);

function myTimer() {
    lottie.stop();
    print("delay");
}




// 