import Head from "next/head";
import Image from 'next/image'

import schedule from "/data/schedule.json";
import { Container } from "@/components/Container";
import DefaultPhoto from "@/components/DefaultPhoto";



export default function Articles() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Mário Rodrigues | Artigos </title>
        <meta
          name="description"
          content="Horário"
        />
      </Head>

      <Container>
      <main className="flex w-full flex-1 flex-col my-auto mt-10 xl:mt-0">
        
      </main>
      </ Container>
    </div>
  );
}