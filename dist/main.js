import VideoKeyboardExtension from './VideoKeyboardExtension.js';
window.onload = () => {
    const videoElement = document.getElementById('myVideo');
    if (videoElement) {
        const videoExtension = new VideoKeyboardExtension(videoElement);
        videoExtension.registerKeyboardShortcuts();
    }
    else {
        console.error('Video element not found!');
    }
};
