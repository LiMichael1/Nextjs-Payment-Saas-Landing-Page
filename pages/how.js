import { useState, useEffect } from 'react';

import HowComp from './../components/pages/HowComp';

const How = () => {
  const [howData, setHow] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await fetch('http://localhost:3000/api/firstTaskData');
      const data = await res.json();

      setHow(data.how);
    };

    fetchAPI();
  }, []);

  return (
    <>
      <HowComp how={howData} />
    </>
  );
};

export default How;
