'use client';
import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { styled } from "styled-components";
import dynamic from 'next/dynamic';

const App = dynamic(() => import('@/App'), {
  ssr: false,
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Main = styled.main`
  padding: 0;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>ptvis</title>
        <meta name="description" content="page table visualizer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <App />
      </Main>
    </>
  );
}
