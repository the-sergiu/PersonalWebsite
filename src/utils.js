const target = new Date("Sep 21, 2020 00:00:00").getTime();
const dayInMilliseconds = 1000 * 60 * 60 * 24;
const hoursInMilliseconds = 1000 * 60 * 60;
const minutesInMilliseconds = 1000 * 60;
let started = false;

let countDown = setInterval(() => {
  let current = new Date().getTime();
  let difference = target - current;

  if (difference < 0) {
    clearInterval(countDown);
    document.getElementById("time").innerHTML = "Stay tuned";
    return;
  }

  let days = Math.floor(difference / dayInMilliseconds);
  let hours = Math.floor((difference % dayInMilliseconds) / hoursInMilliseconds);
  let minutes = Math.floor((difference % hoursInMilliseconds) / minutesInMilliseconds);
  let seconds = Math.floor((difference % minutesInMilliseconds) / 1000);


  document.getElementById("time").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
  document.getElementById("loading-wrapper").remove();
  document.getElementById("content").classList.remove('hidden');
  if(!started){
    started = !started;
    typing();
  }

}, 1000)




var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  // var delta = 200 - Math.random() * 100;
  let delta = 120

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

function typing() {
  setTimeout(null,1000);
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};


function goTo(pageName) {
  let pageNameString = String(pageName);
  document.location.href =  pageNameString.toLowerCase() + '.html';
}