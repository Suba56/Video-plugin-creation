import VideoKeyboardExtension from './VideoKeyboardExtension';
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
