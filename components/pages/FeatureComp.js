import { useState, useEffect } from 'react';

import Image from 'next/image';
import featurePhone from '../../public/Phone/featurePhone.png';
import featurePhoneBg from '../../public/Phone/featurePhoneBackground.png';

const FeatureComp = ({ features }) => {
  const featureBlock = (feature) => {
    return feature ? (
      <div className='mb-50'>
        <h3>{feature.title}</h3>
        <p className='lightText'>{feature.desc}</p>
      </div>
    ) : (
      <div className='mb-50'>
        <h3>Filler Filler</h3>
        <p className='lightText'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
          doloremque quis dolore cum a totam omnis beatae nesciunt quaerat!
          Illum temporibus rem maiores blanditiis minima in illo fuga itaque
          iure.
        </p>
      </div>
    );
  };

  return (
    <div className='featureContainer'>
      <div className='topFeature '>
        <div className='leftTop w-50 '>
          <h1>
            Premium <br />
            Features of <span className='orangeText'>.Pay</span>
          </h1>
        </div>
        <div className='rightTop w-50 '>
          <p className='lightText'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum natus
            quasi rem, quos quae nesciunt maiores illum sequi porro voluptatibus
            doloremque sapiente atque odio cumque sed, vero fugit obcaecati
            eius!
          </p>
        </div>
      </div>
      <div className='bottomFeature flex'>
        <div className='leftBotFeature w-30 p-50 '>
          {Array.from(features)
            .splice(0, 2)
            .map((feature) => featureBlock(feature))}
        </div>
        <div className='midBotFeature w-40 '>
          <div className='featurePhone'>
            <Image src={featurePhone} alt='Phone' className='featurePhone' />
          </div>

          <div className='featurePhoneCircle'>
            <Image src={featurePhoneBg} alt='Circle' />
          </div>
        </div>
        <div className='rightBotFeature w-30 p-50 '>
          {Array.from(features)
            .splice(2, 4)
            .map((feature) => featureBlock(feature))}
        </div>
      </div>
    </div>
  );
};

export default FeatureComp;
