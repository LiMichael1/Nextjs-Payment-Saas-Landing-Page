import Image from 'next/image';
import HowPhone from '../../public/Phone/howPhone.png';
import HowCircle from '../../public/Phone/howCircle.png';

const HowComp = ({ how }) => {
  return (
    <div className='howContainer'>
      <div className='topHow mb-25'>
        <h1>How it Works</h1>
        <p className='lightText'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Vel,
          non aperiam porro ratione provident enim autem necessitatibus. <br />{' '}
          Error similique pariatur eos sunt ut atque quisquam veritatis, non
          blanditiis et beatae.
        </p>
      </div>
      <div className='bottomHow flex'>
        <div className='leftHow w-50'>
          <div className='howPhone'>
            <Image src={HowPhone} alt='How Phone' />
          </div>
          <div className='howCircle'>
            <Image src={HowCircle} alt='How Circle Background' />
          </div>
        </div>
        <div className='rightHow w-50'>
          <h2 className='pl-50'>
            Install <span className='orangeText'>.Pay</span>
          </h2>

          {how.map((x, index) => (
            <div key={index} className='flex mb-25'>
              <p className='orangeText mr-10'>0{index + 1}.</p>
              <p className='lightText'>{x}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowComp;
