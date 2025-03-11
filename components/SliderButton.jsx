"use clisnt";

import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'

const SliderButton = ({containerStyles, buttonStyles, iconStyle}) => {
    const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={buttonStyles} 
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className={iconStyle}/>
      </button>
        <button className={buttonStyles}
          onClick={() => swiper.slideNext()}>
            <PiCaretRightBold className={iconStyle}/>
        </button>
    </div>
  )
}

export default SliderButton
