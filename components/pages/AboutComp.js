import Image from 'next/image';

import AboutPhone from '../../public/Phone/aboutPhone.png';

const AboutComp = ({ data: { activeUsers, downloaded, reviews, awards } }) => {
  return (
    <div className='aboutContainer'>
      <div className='topAbout'>
        <h1>
          About <span className='orangeText'>.Pay</span>
        </h1>
        <p className='lightText'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
          architecto, omnis doloribus ullam vitae accusantium a ea eius
          praesentium eligendi corporis excepturi sunt ipsum fugit officiis
          mollitia sequi ducimus laboriosam!
        </p>
      </div>
      <div className='bottomAbout flex'>
        <div className='leftBottomAbout w-50'>
          <div className='circle'>
            <h2>{activeUsers / 1000}K</h2>
            <p>Active Users</p>
          </div>
          <div className='circle'>
            <h2>{downloaded / 1000}K</h2>
            <p>Downloads</p>
          </div>
          <div className='circle'>
            <h2>{reviews >= 12000 ? '12K+' : reviews / 1000 + 'K'}</h2>
            <p>Reviews</p>
          </div>
          <div className='circle'>
            <h2>{awards}</h2>
            <p>Awards</p>
          </div>
        </div>
        <div className='rightBottomAbout w-50'>
          <div className='aboutPhone'>
            <Image src={AboutPhone} alt='Phone' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
