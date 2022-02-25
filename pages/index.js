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
     
<a href="https://manga.realyami.in/" target="_blank">manga</a>
<a href="https://anime.realyami.in/" target="_blank">anime</a>
<a href="https://stream.realyami.in/" target="_blank">anime-watch</a>
<a href="https://yt.realyami.in/" target="_blank">youtube</a>
</main>
      <Footer />
    </div>
  )
}
