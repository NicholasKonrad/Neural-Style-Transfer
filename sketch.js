
let style;
let media;
let resultImg;
var canvaswidth = window.innerWidth ;
var canvasheight = window.innerHeight ;
var mode = true;

var imgupload;
function upload() {  
  imgupload = document.getElementById("uploadimg").value;
  mode = false;
}

function cam() {
  mode = true;
}

function setup() {
  createCanvas(canvaswidth, canvasheight).parent('canvasContainer');
  
  // if (mode == true) {
    media = createCapture(media);
    media.hide();
  // } else while (document.getElementById("uploadimg").value == "") {  }

  resultImg = createImg('');
  resultImg.hide();
  
  style = ml5.styleTransfer('models/august-macke', media, modelLoaded);
}

function draw() {
  image(resultImg, 0, 0, canvaswidth, canvasheight);
  
  // if (mode == false) {
  //   imgupload = document.getElementById("uploadimg").value;
  //   media = imgupload;
  //   console.log(imgupload);
  // } else media = createCapture(media);

}

function modelLoaded() {
  style.transfer(gotResult);
}

// When we get the results, update the result image src
function gotResult(err, img) {
  resultImg.attribute('src', img.src);
  style.transfer(gotResult);
}
