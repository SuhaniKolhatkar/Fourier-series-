// reference for following formulae :https://en.wikipedia.org/wiki/Fourier_series

let time = 0;
let wave = [];

function setup() {
  createCanvas(displayWidth, displayHeight);
  // slider = creatSlider(1, 100, 1);
}

function draw() {
  background(0);
  translate(displayWidth / 2, displayHeight / 2);
  let x = 0;
  let y = 0;

  for (i = 0; i < 50; i++) {
    let prevx = x;
    let prevy = y;
    let n = i * 2 + 1;


     // radius is used in co-ordiante and it is from fourier series formula which correspondes to y value of co ordinates
      let radius = 150 * (4 / (n * PI));
     // to go ahead that line x and y both are incremented by one each time and those are in trmes of polar co-ordinates
    x += radius * cos(n * time);
    y += radius * sin(n * time);

    //big elleipse generating ellipse
    stroke(255, 100);
    noFill();
    ellipse(prevx, prevy, radius * 2);

    // small ellipse on the circumference
    // fill(255 , 100 );
    // ellipse(x, y, 2);

    //line joining centre of big circle to small circile
    stroke(200);
    line(prevx, prevy, x, y);
  }

  //line joining small circle andd the wave
   translate(200, 0);
   line(x - 200, y, 0, wave[0]);

   //generating wave
   wave.unshift(y);
   noFill();
   stroke(19, 244, 239);
   beginShape();
   for (let i = 0; i < wave.length; i++) {
     vertex(i, wave[i]);
   }
   endShape();
   if (wave.lengsth > 250) {
     wave.pop();
   } 

  time += 0.05;
}
