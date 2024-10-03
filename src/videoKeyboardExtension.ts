interface IVideoExtension {
    registerKeyboardShortcuts(videoElement: HTMLVideoElement): void;
}

class VideoKeyboardExtension implements IVideoExtension {
    private videoElement: HTMLVideoElement | null;

    constructor(videoElement: HTMLVideoElement | null) {
        this.videoElement = videoElement;
    }

    public registerKeyboardShortcuts(): void {
        if (!this.videoElement) {
            console.error('No valid video element provided.');
            return;
        }

        window.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    this.rewindVideo();
                    break;
                case 'ArrowRight':
                    this.fastForwardVideo();
                    break;
                case ' ':
                case 'Spacebar':
                    this.togglePlayPause();
                    break;
                default:
                    break;
            }
        });
    }

    private rewindVideo(): void {
        if (this.videoElement) {
            this.videoElement.currentTime = Math.max(0, this.videoElement.currentTime - 10);
        }
    }

    private fastForwardVideo(): void {
        if (this.videoElement) {
            this.videoElement.currentTime = Math.min(this.videoElement.duration, this.videoElement.currentTime + 10);
        }
    }

    private togglePlayPause(): void {
        if (this.videoElement) {
            if (this.videoElement.paused) {
                this.videoElement.play();
            } else {
                this.videoElement.pause();
            }
        }
    }
}

// Example usage on the global scope
const videoElement = document.getElementById('myVideo') as HTMLVideoElement;
const videoExtension = new VideoKeyboardExtension(videoElement);
videoExtension.registerKeyboardShortcuts();
