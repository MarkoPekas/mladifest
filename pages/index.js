import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Raspored from '../components/Raspored'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mladifest Međugorje | Međunarodni Festival Mladih</title>
      </Head>
      <Header />
      <div className='min-h-screen'>
        <Hero />
        <section>
          <div className='max-w-5xl mx-auto px-4 md:px-12'>
            {/* <h1 className='text-2xl lg:text-4xl font-semibold text-gray-800'>Plan i program</h1> */}
            {/* <h2>A small headline to switch your visitors into users.</h2> */}
            {/* <p>Right. Say that again. No, no, George, look, it's just an act, right? Okay, so 9:00 you're strolling through the parking lot, you see us struggling in the car, you walk up, you open the door and you say, your line, George. Stop it. We're gonna take a little break but we'll be back in a while so, don't nobody go no where.</p> */}
          </div>
        </section>
        {/* <p className='mx-auto max-w-4xl text-center font-semibold text-xl xl:text-2xl text-gray-600 px-4 pb-8 lg:py-8'>Međunarodni susret mladih u Međugorju je svake godine od 31.7. do 6.8. Više od 50.000 mladih i 500 svečenika s cijelog svijeta. Molitva, svjedočanstva, procesija, pjesme, klanjanje, krunica, sv.misa, koncert, ples... Duhovni odmor za mlade.</p> */}
        <Raspored />
      </div>
      <Footer />
    </div>
  )
}
