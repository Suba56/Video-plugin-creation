"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoKeyboardExtension = void 0;
// VideoKeyboardExtension class implementation
class VideoKeyboardExtension {
    constructor(videoElement) {
        this.videoElement = videoElement || null;
        if (!this.videoElement) {
            console.error('Invalid video element provided');
        }
    }
    registerKeyboardShortcuts() {
        if (!this.videoElement)
            return;
        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    this.rewind(10);
                    break;
                case 'ArrowRight':
                    this.fastForward(10);
                    break;
                case ' ':
                    this.togglePlayPause();
                    break;
                default:
                    break;
            }
        });
    }
    rewind(seconds) {
        if (this.videoElement) {
            this.videoElement.currentTime = Math.max(this.videoElement.currentTime - seconds, 0);
        }
    }
    fastForward(seconds) {
        if (this.videoElement) {
            this.videoElement.currentTime = Math.min(this.videoElement.currentTime + seconds, this.videoElement.duration);
        }
    }
    togglePlayPause() {
        if (this.videoElement) {
            if (this.videoElement.paused) {
                this.videoElement.play();
            }
            else {
                this.videoElement.pause();
            }
        }
    }
}
exports.VideoKeyboardExtension = VideoKeyboardExtension;
const videoElement = document.getElementById('myVideo');
const videoExtension = new VideoKeyboardExtension(videoElement);
videoExtension.registerKeyboardShortcuts();
