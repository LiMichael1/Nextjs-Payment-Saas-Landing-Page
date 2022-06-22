import AboutComp from '../components/pages/AboutComp';

const About = ({ data: { appData } }) => {
  return (
    <>
      <AboutComp data={appData} />
    </>
  );
};

export default About;

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/firstTaskData');
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
