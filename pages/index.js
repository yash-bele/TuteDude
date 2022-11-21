import Head from 'next/head';
import Cards from '../components/Cards';
import Navbar from '../components/Header';

const Home = () => {
  return (
    <>
      <Head>
        <title>TuteDude</title>
        <meta name='description' content='Website' />
        <link rel='icon' href='' />
      </Head>
      <main>
        <Navbar />
        <Cards />
        <div>
          <p>Terms & Conditions</p>
        </div>
      </main>
    </>
  );
};

export default Home;
