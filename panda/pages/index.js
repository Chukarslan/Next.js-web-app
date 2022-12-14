import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Link from 'next/link'

export default function Home() {
  console.log(styles)
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="keywords" content="nextjs, huntingcoder, next, blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.mainnav}>
        <ul>
          <Link href='/'><li>Home</li></Link>
          <Link href='/about'><li>About</li></Link>
          <Link href='/blog'><li>Blog</li></Link>
          <Link href='/contact'><li>Contact</li></Link>
        </ul>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hunting Coder
        </h1>

        <p className={styles.description}>
          A blog for hunting coders by a hunting coder
        </p>

          <div className='blogs'>
            <h2>Popular Blogs</h2>
            <div className='blogItem'>
              <h3>How to learn JavaScript in 2022?</h3>
              <p>JavaScript is the langage used to design logic for web</p>
            </div>
            <div className='blogItem'>
              <h3>How to learn JavaScript in 2022?</h3>
              <p>JavaScript is the langage used to design logic for web</p>
            </div>
            <div className='blogItem'>
              <h3>How to learn JavaScript in 2022?</h3>
              <p>JavaScript is the langage used to design logic for web</p>
            </div>
          </div>

      </main>

      


    </div>
  )
}
