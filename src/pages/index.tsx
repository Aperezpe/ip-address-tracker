import Head from 'next/head';
import { GetServerSideProps } from 'next';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '@/components/SearchResults/SearchResults';
import { IPData } from '../types/ipData';
import { useState, FC, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { IPProps } from '@/types/IPProps';
import { server } from '@/config';

const Home: FC<IPProps> = (props: IPProps) => {
  const [ipData, setIpData] = useState(props.ipData);

  const searchIP = async (ip: string) => {
      const data =  await fetch(`api/ip?ipAddress=${ip}`);
      const ipData: IPData = await data.json();
      setIpData(ipData);
  };

  const Map = useMemo(
    () =>
      dynamic(
        () => import('@/components/Map/Map'), // replace '@components/map' with your component's location
        {
          loading: () => <p>A map is loading</p>,
          ssr: false, // This line is important. It's what prevents server-side render
        }
      ),
    []
  );

  return (
    <>
      <Head>
        <title>Frontend Mentor | IP Address Tracker</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>
      <main className='h-screen flex flex-col'>
        <div className="flex flex-col items-center bg-[url('/pattern-bg.png')] h-[35vh] tablet:h-60 bg-cover relative">
          <h1 className='text-white text-2xl py-6 font-semibold'>
            IP Address Tracker
          </h1>
          <SearchBar onSearch={searchIP}></SearchBar>
          <SearchResults ipData={ipData}></SearchResults>
        </div>

        <Map ipData={ipData}></Map>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<IPProps> = async () => {
  const data = await fetch(`${server}/api/ip`);
  const ipData: IPData = await data.json();
  return { props: { ipData } };
};

export default Home;
