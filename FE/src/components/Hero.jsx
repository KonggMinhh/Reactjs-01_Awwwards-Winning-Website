import { useState } from "react";

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 4;

    const handleMiniVdClicks = () => {
        console.log("MiniVdClicks");
    };

    return (
        <section className="relative h-dvh w-screen overflow-x-hidden">
            <div
                id="video-frame"
                className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
            >
                <div>
                    <div
                        onClick={handleMiniVdClicks}
                        className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg"
                    >
                        <div> MiniVideoPlayer</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
