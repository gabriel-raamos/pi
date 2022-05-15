{/* Components */}
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Reserva aí</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Banner />
      <Footer />
    </>
  );
}
