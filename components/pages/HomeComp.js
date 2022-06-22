import Image from 'next/image';

import StoreButton from '../layout/StoreButton';
import Phone from '../../public/Phone/homePhone.png';

const HomeComp = ({ data: { activeUsers, downloaded, reviews } }) => {
  return (
    <div className='homeContainer'>
      <div className='leftHome'>
        <div>
          <h1 className='pageHeading'>
            Transact <br />
            Money Easily{' '}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos sed
            tenetur autem quibusdam nihil eius placeat, dignissimos omnis
            architecto, incidunt optio consequatur totam, quam nobis quos
            voluptatibus perferendis ut laborum!
          </p>
        </div>
        <div>
          <h4>Download On: </h4>
          <div className='homeButtons flex'>
            <StoreButton store={'App'} />
            <StoreButton store={'Play'} />
          </div>
        </div>

        <div>
          <ul className='flex'>
            <li>
              <p>Active Users</p>
              <p>{activeUsers > 5000 ? '5000+' : activeUsers}</p>
            </li>
            <li>
              <p>Download</p>
              <p>{downloaded / 1000}K</p>
            </li>
            <li>
              <p>Review</p>
              <p>{reviews / 1000}K</p>
            </li>
          </ul>
        </div>
      </div>
      <div className='rightHome'>
        <Image src={Phone} alt='PayNow' className='homePhone' />
      </div>
    </div>
  );
};

export default HomeComp;
