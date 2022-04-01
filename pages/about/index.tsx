import { GetServerSideProps } from 'next';
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function About({ headers }: any) {
    return(
      <div className={styles.container}>
        <h1 className={styles.title}>
          About page of rewrite-edge-poc-a
        </h1>
        <div><p> </p></div>
        <div className={styles.card}>
          <code>
            {JSON.stringify(headers, null, 2)}
          </code>
        </div>
        <Link href='/'>
          <a><h4>Go to poc-a HomePage</h4></a>
        </Link> 
      </div> 
    );
}

export const getServerSideProps: GetServerSideProps = async ({ req })  => {
  return {
    props: {
      headers: req.headers
    }
  }
}