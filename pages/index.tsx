import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { GetServerSideProps } from 'next';

const Home: NextPage = ({ headers }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          You are in rewrite-edge-poc-a app
        </h1>

        <div className={styles.grid}>
          <Link href="/about" >
              <h2 className={styles.card}>Go to poc-b about page</h2>
            </Link>
        </div>

        <div>
          <code>
            {JSON.stringify(headers, null, 2)}
          </code>
        </div>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ({ req })  => {
  return {
    props: {
      headers: req.headers
    }
  }
}
