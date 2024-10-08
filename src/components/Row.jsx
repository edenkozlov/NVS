// Row.jsx
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';
import img5 from '../assets/images/img5.png';
import img6 from '../assets/images/img6.png';
import img7 from '../assets/images/img7.png';

import PropTypes from 'prop-types';

// Split items into four unique groups for export
export const itemsGroup1 = [
    { text: "Scalable", image: img7 },
    { text: "Robust", image: img2 },
    { text: "Efficient", image: img3 },
    { text: "Innovative", image: img4 },
    { text: "Scalable", image: img7 },
    { text: "Robust", image: img2 },
    { text: "Efficient", image: img3 },
    { text: "Innovative", image: img4 },
];

export const itemsGroup2 = [
    { text: "Agile", image: img5 },
    { text: "Intuitive", image: img6 },
    { text: "Reliable", image: img1 },
    { text: "Adaptive", image: img7 },
    { text: "Agile", image: img5 },
    { text: "Intuitive", image: img6 },
    { text: "Reliable", image: img1 },
    { text: "Adaptive", image: img7 },
];

export const itemsGroup3 = [
    { text: "Seamless", image: img2 },
    { text: "Automated", image: img3 },
    { text: "Flexible", image: img4 },
    { text: "Secure", image: img5 },
    { text: "Seamless", image: img2 },
    { text: "Automated", image: img3 },
    { text: "Flexible", image: img4 },
    { text: "Secure", image: img5 },
];

export const itemsGroup4 = [
    { text: "User-Centric", image: img6 },
    { text: "Responsive", image: img1 },
    { text: "Dynamic", image: img4 },  
    { text: "Adaptive", image: img7 },
    { text: "User-Centric", image: img6 },
    { text: "Responsive", image: img1 },
    { text: "Dynamic", image: img4 },  
    { text: "Adaptive", image: img7 },
];


function Row({ translateClass, direction, items }) {
  return (
    <div 
        className={`${translateClass} ${direction} row w-full flex 
        items-center  
        gap-8 
        whitespace-nowrap mb-2`}
    >
        {items.map((item, index) => (
            <div 
                key={index} 
                className='elem flex items-center gap-8'
            >
                <h1 
                    className='font-[SansitaBold] text-[6vh] sm:text-[8.4vh] 
                    leading-[6vh] sm:leading-[9vh]'
                >
                    {item.text}
                </h1>
                <div className='imgdiv w-[5vh] h-[5vh]'>
                    <img 
                        className=''
                        src={item.image} 
                    />
                </div>
            </div>
        ))}
    </div>
  );
}

Row.propTypes = {
    translateClass: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    })).isRequired,
};

export default Row;
