function playVideo(videoId) {
    // Hide all videos
    const videos = document.querySelectorAll('iframe');
    videos.forEach(video => {
        video.style.display = 'none';
    });
    
    // Show the selected video
    const selectedVideo = document.getElementById(videoId);
    if (selectedVideo) {
        selectedVideo.style.display = 'block';
    }
}
let currentVideoIndex = 0;
const videos = document.querySelectorAll('.box2 iframe');

function playNextVideo() {
    videos[currentVideoIndex].style.display = 'none'; // Hide current video
    currentVideoIndex = (currentVideoIndex + 1) % videos.length; // Move to next video index
    videos[currentVideoIndex].style.display = 'block'; // Show next video
}

function playPreviousVideo() {
    videos[currentVideoIndex].style.display = 'none'; // Hide current video
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length; // Move to previous video index
    videos[currentVideoIndex].style.display = 'block'; // Show previous video
}
