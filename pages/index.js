import HomeComp from '../components/pages/HomeComp';

const Home = ({ data: { appData } }) => {
  return (
    <>
      <HomeComp data={appData} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/firstTaskData');
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
