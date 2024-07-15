import React, { useEffect, useRef } from 'react';
import vision from '../../shared/components/Partials/assets/vision.jpg';
import './VisionMission.css';

const VisionMission = () => {
    const visionRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const visionElement = visionRef.current;
            const imageElement = imageRef.current;

            if (visionElement && imageElement) {
                const visionElementTop = visionElement.getBoundingClientRect().top;
                const imageElementTop = imageElement.getBoundingClientRect().top;
                const isVisionVisible = visionElementTop < window.innerHeight;
                const isImageVisible = imageElementTop < window.innerHeight;

                if (isVisionVisible) {
                    visionElement.classList.add('active');
                }

                if (isImageVisible) {
                    imageElement.classList.add('active');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex flex-col md:flex-row w-full items-center justify-between h-full bg-customLightBlue p-4 md:px-14 lg:px-28">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:ml-11 vision-mission-slide-in" ref={visionRef}>
                <div className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-semibold text-customBlue font-mono">Vision</h1>
                    <p className="text-base md:text-lg text-customGray">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br className="hidden md:block" /> Quas optio
                    </p>
                </div>

                <div className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-semibold text-customBlue">Mission</h1>
                    <p className="text-base md:text-lg text-customGray">
                        Lorem ipsum, dolor sit amet consectetur adipisicing <br className="hidden md:block" /> elit. Quasi porro tenetur
                        asperiores omnis molestias <br className="hidden md:block" /> voluptas officia quia beatae fugit tempore odio dolores, <br className="hidden md:block" />
                        reiciendis
                    </p>
                </div>
                <div>
                    <h1 className="text-2xl md:text-3xl font-semibold text-customBlue">VALUES</h1>
                    <p className="text-base md:text-lg text-customGray">Lorem ipsum, dolor</p>
                </div>
            </div>

            <div className="w-full md:w-1/2 vision-mission-slide-in" ref={imageRef}>
                <img src={vision} alt="Vision" className="w-full h-auto" />
            </div>
        </div>
    );
};

export default VisionMission;
