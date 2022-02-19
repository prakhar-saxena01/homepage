import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The Real Yami</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome!" />
        <p className="description">
         This is my hobby website
        </p>
      </main>
<a herf="manga.realyami.in">manga</a>
<a herf="ani.realyami.in">anime-db</a>
<a herf="stream.realyami.in">anime-watch</a>
<a herf="yt.realyami.in">youtube</a>
<a herf="porn.realyami.in">pornhub</a>

      <Footer />
    </div>
  )
}
