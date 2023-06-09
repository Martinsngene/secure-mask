/** @format */
import Head from "next/head";

import Landing from "@/components/landing";
import Transaction from "@/components/transcation";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FCL Quickstart with NextJS</title>
        <meta name='description' content='My first web3 app on Flow!' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <main>
        <Transaction />
        <div className='grid'>
          <Landing />
        </div>
      </main>
    </div>
  );
}