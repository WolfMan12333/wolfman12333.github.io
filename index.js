
function aboutmebtn() {
  document.location.href = '../About Me/about.html';
}

function projectsbtn() {
  document.location.href = '../Projects/projects.html';
}

function contactbtn() {
  document.location.href = '../Contact/contact.html';
}

function tutbtn() {
  document.location.href = '../Tutorials/stargate/dist/index.html';
}

window.onload = function () {
  const introVideo = document.getElementById('overlayVideo');
  const glitchVideo = document.getElementById('myVideo');
  const content = document.querySelector('.content');
  const accessText = document.getElementById('access-text');

  introVideo.onended = function () {
    accessText.style.display = 'block';
    setTimeout(() => {
      accessText.style.display = 'none';
      introVideo.style.display = 'none';
      glitchVideo.style.display = 'block';
      content.style.display = 'flex';
    }, 2000);
  };
};
