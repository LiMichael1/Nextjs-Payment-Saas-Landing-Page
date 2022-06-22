import useSwr from 'swr';

import FeatureComp from '../components/pages/FeatureComp';

const Features = () => {
  const fetcher = async () => {
    const response = await fetch('/api/firstTaskData');
    const data = await response.json();

    return data.features;
  };

  const { data, error } = useSwr('features', fetcher);

  if (error) return <h1>An Error has occured</h1>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <>
      <FeatureComp features={data} />
    </>
  );
};

export default Features;
