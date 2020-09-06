const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Function
// 1 - toggleVideo - Play or Pause video
// If video is playing, then pause
// if video is pause, then play
function toggleVideo() {
    return true;
};

// 2 - updateIcon - toggle between play and pause icon
// If video is playing, then show pause icon
// If video is pause, then show play icon
function updateIcon() {
    return true;
};

// 3 - updateProgress - update the position of the progress bar and timstamp
function updateProgress() {
    return true;
};
 
// 4 - stopVide - Stop video playback and reset time to 0
function stopVideo() {
    return true;
};

// setProgress - update video playback time base on manual change in progress bar
function setProgress() {
    return true;
};

// Event Listener
// 1 - Video Element - click to play or pause video
video.addEventlistner('click', toggleVideo);

// 2 - Video Element - pause to toggle play icon to pause icon
video.addEventlistner('pause', updateIcon);

// 3 - video Elemnet - play to toggle pause icon back to play icon
video.addEventlistner('play',updateIcon);

// 4 - Video Element - update progress bar and timestamp
video.addEventlistner('timeupdate', updateprogress);

// 5 - Play Button - click to play or pause video
play.addEventlistner('click', toggleVideo);

// 6 - Stop Button - click to reset video and pause video
stop.addEventlistner('click', stopVideo);

// 7 - Progress Bar - change position to change time of playback
progress.addEventlistner('change', setProgress);