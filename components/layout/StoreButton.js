import Image from 'next/image';
import googlePlay from '../../public/google-play-icon.svg';
import apple from '../../public/Apple-Icon.svg';

const StoreButton = ({ store }) => {
  const isPlay = store === 'Play' ? true : false;

  const googlePlayIcon = (
    <Image
      src={isPlay ? googlePlay : apple}
      alt={isPlay ? 'Google Play' : 'Apple'}
      height={20}
      width={20}
      className='icon'
    />
  );

  return (
    <>
      <button className='downloadButton mr-25'>
        <div>{googlePlayIcon}</div>
        <div className='downloadButtonDesc'>
          <p>Available on</p>
          <p className='storeDesc'>{store === 'Play' ? 'Play' : 'App'} Store</p>
        </div>
      </button>
    </>
  );
};

export default StoreButton;
