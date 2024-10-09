// Row.jsx
import img1 from '../assets/images/python.png';
import img2 from '../assets/images/vue.png';
import img3 from '../assets/images/javascript.png';
import img4 from '../assets/images/java.png';
import img5 from '../assets/images/cplusplus.png';
import img6 from '../assets/images/rust.png';
import img7 from '../assets/images/css.png';
import img8 from '../assets/images/html.png';
import img9 from '../assets/images/solidity.png';
import img10 from '../assets/images/typescript.png';
import img11 from '../assets/images/angular.png';
import img12 from '../assets/images/tailwind.png';
import img13 from '../assets/images/firebase.png';
import img14 from '../assets/images/redux.png';
import img15 from '../assets/images/electron.png';

import PropTypes from 'prop-types';

// Split items into four unique groups for export
export const itemsGroup1 = [
    { text: "Scalable", image: img3 }, //Mobile (JS)
    { text: "Robust", image: img2 },
    { text: "Efficient", image: img4 },
    { text: "Innovative", image: img10 },
    { text: "Scalable", image: img5 },
    { text: "Robust", image: img3 },
    { text: "Efficient", image: img4 },
    { text: "Innovative", image: img5 },
];

export const itemsGroup2 = [
    { text: "Agile", image: img6 },
    { text: "Intuitive", image: img11 }, //Mobile (Angluar)
    { text: "Reliable", image: img3 },
    { text: "Adaptive", image: img11 },
    { text: "Agile", image: img2 },
    { text: "Intuitive", image: img15 },
    { text: "Reliable", image: img8 },
    { text: "Adaptive", image: img9 },
];

export const itemsGroup3 = [
    { text: "Seamless", image: img10 },
    { text: "Automated", image: img14 },
    { text: "Flexible", image: img6 },
    { text: "Secure", image: img12 },
    { text: "Seamless", image: img6 }, //Mobile (Rust)
    { text: "Automated", image: img11 },
    { text: "Flexible", image: img12 },
    { text: "Secure", image: img13 },
];

export const itemsGroup4 = [
    { text: "User-Centric", image: img7 }, //Mobile (CSS)
    { text: "Responsive", image: img8 },
    { text: "Dynamic", image: img13 },  
    { text: "Adaptive", image: img9 },
    { text: "User-Centric", image: img14 }, 
    { text: "Responsive", image: img15 },
    { text: "Dynamic", image: img1 },  
    { text: "Adaptive", image: img2 },
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
            style={{ color: 'var(--black)' }}
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
