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
<a herf="https://manga.realyami.in">manga</a>
<a herf="https://ani.realyami.in">anime-db</a>
<a herf="https:stream.realyami.in">anime-watch</a>
<a herf="https://yt.realyami.in">youtube</a>
<a herf="https://porn.realyami.in">nothing</a>

      <Footer />
    </div>
  )
}
