import Head from 'next/head';
import Header from '../Components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>bitsKraft Technologies | We help grow business faster</title>
        <meta name="description" content="IT service company in Vadodara" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  )
}
