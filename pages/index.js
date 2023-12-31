import Head from 'next/head';
import styles from '../styles/Home.module.css';
import newPage from './newPage/newPage';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome!<a href="/"></a>
        </h1>

        <p className={styles.description}>
          This is <strong> Jeyesh Vishnu</strong>
        </p>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h3 className={styles.subtitle}><a >About Me &rarr;</a></h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="/" className={styles.card}>
            <h3 className={styles.subtitle}><a >Learn &rarr;</a></h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="/"
            className={styles.card}
          >
            <h3 className={styles.subtitle}><a >Example &rarr;</a></h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="#two"
            className={styles.card}
          >
            <h3 className={styles.subtitle}><a >Deploy &rarr;</a></h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      {/* <>
        <div className={styles.two}>
          <h3 id='two'>Hello World</h3>
        </div>
      </> */}

      <footer>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >

          {/* <img src="/vercel.svg" alt="Vercel" className={styles.logo} /> */}
        </a>
      </footer>

      <style jsx>{`
      
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
