import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeaderComponent from '../components/header'
import Bodycomponent from '../components/body'
import neatiologo from '../assets/neatiologo.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>NEATIO BRIDGE</title>
        <meta name="description" content="Neatio Bridge" />
        <link rel="icon" href="/neatiologo.ico" />

      </Head>
      <HeaderComponent />
      <Bodycomponent />
    </>
  )
}
