interface IVideoExtension {
    registerKeyboardShortcuts(videoElement: HTMLVideoElement): void;
}

class VideoKeyboardExtension implements IVideoExtension {
    private videoElement: HTMLVideoElement;

    constructor(videoElement: HTMLVideoElement) {
        if (!videoElement) {
            throw new Error('Invalid video element');
        }
        this.videoElement = videoElement;
    }

    registerKeyboardShortcuts() {
        document.addEventListener('keydown', (event: KeyboardEvent) => {
            switch (event.key) {
                case 'ArrowLeft':
                    this.videoElement.currentTime = Math.max(0, this.videoElement.currentTime - 10);
                    break;
                case 'ArrowRight':
                    this.videoElement.currentTime = Math.min(this.videoElement.duration, this.videoElement.currentTime + 10);
                    break;
                case ' ':
                    if (this.videoElement.paused) {
                        this.videoElement.play();
                    } else {
                        this.videoElement.pause();
                    }
                    event.preventDefault();
                    break;
            }
        });
    }
}

export default VideoKeyboardExtension;