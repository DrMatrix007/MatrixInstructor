import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.MainHolder}>
        <Head>
          <title>Matrix Instructor</title>
        </Head>
        <div className='center'>
          <div className={styles.ButtonDiv}>
            <Link href="/create">Create Room</Link>
            <Link href="/join">Join Room</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
