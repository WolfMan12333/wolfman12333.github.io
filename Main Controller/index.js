$(document).ready(function() {
	$(".power-off").click(function() {
		$("iframe").toggleClass('screen-off');
	});

	var $sashasprava = $('.obazhure');
	$('button').click(function() {
		$sashasprava.addClass('bright');
		setTimeout(function() {
			$sashasprava.removeClass('bright');
		}, 200);
	});

  $('.cnl-namber').click(function() {
    var $this = $(this),
        $video = $('#video'),
        link = 'https://www.youtube.com/embed/'+$this.data('item')+'?enablejsapi=1&html5=1?&showinfo=0&controls=0';
    $('.cnl-namber').removeClass('active-channel');
    $this.addClass('active-channel');
    // $this.data('item');
    $video.attr('src', link);
  });

  $('.dwork').click(function() {
      var $this = $(this);
    	$this.addClass('dwork-cons');
		setTimeout(function() {
			$this.removeClass('dwork-cons');
		}, 1000);
  });

  $(".mobile").click(function() {
		$(".tv-step").toggleClass('mob-size');
    $(".tv-leg").toggleClass('mob-size');
	});

});

// global variable for the player
var player;
// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('video', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}
function onPlayerReady(event) {
  // bind events
  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function() {
    player.playVideo();
  });
  var pauseButton = document.getElementById("pause-button");
  pauseButton.addEventListener("click", function() {
    player.pauseVideo();
  });
  var stopButton = document.getElementById("stop");
  stopButton.addEventListener("click", function() {
    player.stopVideo();
  });
  var offButton = document.getElementById("power-off");
    offButton.addEventListener("click", function() {
    player.stopVideo();
  });
 
   var muteButton = document.getElementById("mute");
   muteButton.addEventListener("click", function() {
       if (player.isMuted()) {
         player.unMute();console.log('unmuted');
       } else {
         player.mute();console.log('muted');
       }   
    });
  
}