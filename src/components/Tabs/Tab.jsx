import React, { useEffect, useState } from 'react';
import notes from '../../assets/notes.png';
import assignments from '../../assets/assignments.webp';
import blogs from '../../assets/blogs.png';
import researchwork from '../../assets/researchworks.jpg';
import placements from '../../assets/placements.png';

const Tab = ({ tab }) => {
  const [bg, setBg] = useState(notes);
  const [blurredBackgroundStyle, setBlurredBackgroundStyle] = useState({});

  useEffect(() => {
    switch (tab.bg) {
      case 'notes':
        setBg(notes);
        break;
      case 'assignments':
        setBg(assignments);
        break;
      case 'blogs':
        setBg(blogs);
        break;
      case 'researchworks':
        setBg(researchwork);
        break;
      case 'placements':
        setBg(placements);
        break;
      default:
        setBg(notes); // Default to 'notes' if tab.bg is not recognized
        break;
    }
    setBlurredBackgroundStyle({
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    });
  }, [tab.bg]); // Update background image when tab.bg changes

  return (
    <div
      className={`w-[150px] h-[100px] text-lg hover:text-md flex justify-center rounded-xl items-center`}
      style={{ background: `url(${bg})`, ...blurredBackgroundStyle }} // Merge styles here
    >
      <div
        className="hover:font-semibold hover:text-yellow-200 text-lg cursor-pointer w-full h-full flex justify-center rounded-xl items-center text-white font-bold"
        style={{ background: 'rgba(0, 0, 0, 0.5)',whiteSpace:'pre-wrap',textAlign:'center' }}
      >
        {tab.name}
      </div>
    </div>
  );
};

export default Tab;
