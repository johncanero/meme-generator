import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Meme Generator</title>
        <meta
          name="description"
          content="Meme Generator Generated by Next App and Typescript"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="meme-generator-page"/>
        <meta property="og:type" content="dynamic website" />
        <meta property="og:description" content="meme.description" />
        <link rel="icon" href="/images/memeIcon3.png" />
      </Head>
 

      <main>
        <Header />
      </main>


      <footer>

      </footer>
    </div>
  )
}

export default Home
