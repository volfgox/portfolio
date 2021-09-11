backgroundCount = 0;
currentFrame = 1;

function restartTimer() {
  timePrompt = setTimeout(function() {
    changeImage();

  }, 6000);
}

function changeImage() {
  backgroundCount++;
  imageUrl = "url('https://unsplash.it/1200/750/?random&" + backgroundCount + "')";

  if (currentFrame == 1) {
    currentName = "backgroundImage1";
    hideName = "backgroundImage2";
    currentFrame = 2;
  } else {
    currentName = "backgroundImage2";
    hideName = "backgroundImage1";
    currentFrame = 1;
  }
  document.getElementById(currentName).style.backgroundImage = imageUrl;
  document.getElementById(hideName).className = 'hide';
  document.getElementById(currentName).className = 'show';

  restartTimer();
}
restartTimer();