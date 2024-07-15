import React, { useRef, useEffect } from 'react';
import mission from '../../shared/components/Partials/assets/mission.jpg';
import './OurTeam.css'; // Assuming you have a CSS file for styling

const OurTeam = () => {
  const missionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const missionElement = missionRef.current;
      const imageElement = imageRef.current;

      if (missionElement && imageElement) {
        const missionElementTop = missionElement.getBoundingClientRect().top;
        const imageElementTop = imageElement.getBoundingClientRect().top;
        const isMissionVisible = missionElementTop < window.innerHeight;
        const isImageVisible = imageElementTop < window.innerHeight;

        if (isMissionVisible) {
          missionElement.classList.add('active');
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
    <div className="bg-customLightBlue flex flex-col md:flex-row w-full justify-between items-center p-4 md:px-32 mb-20 lg:px-40 gap-9">
      <div className="w-full md:w-1/2 mb-4 md:mb-0 our-team-slide-in" ref={imageRef}>
        <img src={mission} alt="Mission" className="w-full h-auto" />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left our-team-slide-in" ref={missionRef}>
        <div className="mb-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-customBlue">OUR TEAM</h1>
        </div>

        <div>
          <p className="text-sm md:text-lg text-customGray leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br className="hidden md:block"/> Totam quae blanditiis magni consequuntur eum amet ipsa, <br className="hidden md:block"/> <br className="hidden md:block"/>
            ipsam animi laudantium quo sequi nobis, at reiciendis? Deleniti <br className="hidden md:block"/>
            fugiat suscipit totam natus quaerat? Lorem ipsum <br className="hidden md:block"/> dolor sit amet consectetur adipisicing 
            elit. Sed enim odio eius quis? <br className="hidden md:block"/> <br className="hidden md:block"/> Blanditiis impedit unde aperiam quaerat, possimus vero <br className="hidden md:block"/> maxime 
            architecto atque dolor repudiandae labore, adipisci inventore <br className="hidden md:block"/> incidunt nulla.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurTeam;
