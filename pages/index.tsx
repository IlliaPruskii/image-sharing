import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app 32" />
        {/* <meta property="og:url" content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" /> */}
        <meta property="og:image" content="https://cdn.motor1.com/images/mgl/brOzk/s1/2020-audi-a4.webp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Image sharing
        </h1>
        <ul>
          <li>
            <Link href="/images?id=0">
              <a>image 0</a>
            </Link>
          </li>
          <li>
            <Link href="/images?id=1">
              <a>image 1</a>
            </Link>
          </li>
          <li>
            <Link href="/images?id=2">
              <a>image 2</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default Home
