'use strict';
function initSettingVideoModel() {
  	// Obtain handles to main elements
  	videoContainer = document.getElementById('videoContainer');
   	video = document.getElementById('video_live_model');
   	videoControls = document.getElementById('video-controls');

   	// Hide the default controls
   	video.controls = false;

   	// Display the user defined video controls
   	videoControls.style.display = 'block';

   	// Obtain handles to buttons and other elements
   	fullscreen = document.getElementById('fs');

    // Check if the browser supports the Fullscreen API
    fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);
    // If the browser doesn't support the Fulscreen API then hide the fullscreen button
    if (!fullScreenEnabled) {
      fullscreen.style.display = 'none';
    }

   	// Set the video container's fullscreen state
  	var setFullscreenData = function(state) {
      if (!state) document.getElementById('video_live_model').style.height = '80vh'
      if (state) document.getElementById('video_live_model').style.height = '100vh'
  		videoContainer.setAttribute('data-fullscreen', !!state);
  	}

  	// Checks if the document is currently in fullscreen mode
   	var isFullScreen = function() {
   		return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
   	}

   	// Fullscreen
   	var handleFullscreen = function() {
   		// If fullscreen mode is active...
    		if (isFullScreen()) {
    			// ...exit fullscreen mode
    			// (Note: this can only be called on document)
    			if (document.exitFullscreen) document.exitFullscreen();
    			else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    			else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
    			else if (document.msExitFullscreen) document.msExitFullscreen();
    			setFullscreenData(false);
        }
    		else {
    		  // ...otherwise enter fullscreen mode
    			// (Note: can be called on document, but here the specific element is used as it will also ensure that the element's children, e.g. the custom controls, go fullscreen also)
          if (videoContainer.requestFullscreen) videoContainer.requestFullscreen();
    		  else if (videoContainer.mozRequestFullScreen) videoContainer.mozRequestFullScreen();
    		  else if (videoContainer.webkitRequestFullScreen) {
    				// Safari 5.1 only allows proper fullscreen on the video element. This also works fine on other WebKit browsers as the following CSS (set in styles.css) hides the default controls that appear again, and
            // ensures that our custom controls are visible:
            // figure[data-fullscreen=true] video::-webkit-media-controls { display:none !important; }
            // figure[data-fullscreen=true] .controls { z-index:2147483647; }
    				video.webkitRequestFullScreen();
    			}
    			else if (videoContainer.msRequestFullscreen) videoContainer.msRequestFullscreen();
    			setFullscreenData(true);
    		}
  	}

   	// Only add the events if addEventListener is supported (IE8 and less don't support it, but that will use Flash anyway)
   	if (document.addEventListener) {
   		// Wait for the video's meta data to be loaded, then set the progress bar's max value to the duration of the video

   		fs.addEventListener('click', function(e) {
   			handleFullscreen();
   		});

   		// Listen for fullscreen change events (from other controls, e.g. right clicking on the video itself)
   		document.addEventListener('fullscreenchange', function(e) {
   			setFullscreenData(!!(document.fullScreen || document.fullscreenElement));
   		});
   		document.addEventListener('webkitfullscreenchange', function() {
   			setFullscreenData(!!document.webkitIsFullScreen);
   		});
   		document.addEventListener('mozfullscreenchange', function() {
   			setFullscreenData(!!document.mozFullScreen);
   		});
   		document.addEventListener('msfullscreenchange', function() {
   			setFullscreenData(!!document.msFullscreenElement);
   		});
   	}

}
