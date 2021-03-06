import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css'

import Banner from '../components/banner';
import Card from '../components/card';

export default function Home() {
  const handleOnBannerButtonClick = () => {
    console.log('Hi, Banner button')
  }
  return (
    <div className={styles.container}><Head>
    <title>Coffee Connoiseur</title>
    <link rel="icon" href="/favicon" />
</Head>

<main className={styles.main}>
    <Banner buttonText = "View Stores nereby"
            handleOnClick={handleOnBannerButtonClick}
    />

    <div className = {styles.heroImage}>
      <Image src="/static/hero-image.png" width={700} height={400} />
    </div>
    <div className = {styles.cardLayout}>
      <Card 
        name= 'Dark Horse Coffee' 
        imgUrl="/static/hero-image.png" 
        href="/coffee-store/darkhorse-coffee" 
        className = {styles.card}
      />
      <Card 
        name= 'Dark Horse Coffee' 
        imgUrl="/static/hero-image.png" 
        href="/coffee-store/darkhorse-coffee" 
        className = {styles.card}
      />
    </div>
</main>
    </div>
  )
}
