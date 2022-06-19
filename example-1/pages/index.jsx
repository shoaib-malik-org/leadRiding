import Head from 'next/head'

import { Navbar } from '../components/common/navbar'

export async function getServerSideProps({ req }) {
  const p = await fetch('http://localhost:8000/auth/check',
    {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/",
        cookie: req.headers.cookie
      },
      credentials: "include"
    })
  const res = await p.json();
  return {
    props: {
      res
    }
  }
}

import { createContext } from 'react';
export const isAuthenticated = createContext();

export default function Home({ res }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <isAuthenticated.Provider value={res}>
        <Navbar />
      </isAuthenticated.Provider>
    </>
  )
}
