import Head from 'next/head'
import Navbar from '@/components/Navbar'
import MainInfo from '@/components/MainInfo'
import GagarinInfo from '@/components/GagarinInfo'
import Services from '@/components/Services'
import UsersCounter from '@/components/UsersCounter'
import Contacts from '@/components/Contacts'
import Loader from '@/components/Loader'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <a href="https://t.me/taxi_cosmos64">
        <Image src="/telegram.png"
        className='telegram'
          width={45}
          height={45}
          alt="Telegram"
          quality={100}
        />
        </a>
       
        <Navbar />
        {/* <Loader /> */}
        <section id='mainSection'>
          <MainInfo />
          <GagarinInfo />
          <Services />
          <UsersCounter />
          <Contacts />
        </section>
        {/* <div style={{ position: "relative", overflow: "hidden" }}><a href="https://yandex.com/maps/org/saratov_gagarin_airport/141302268769/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}>Saratov Gagarin Airport</a><a href="https://yandex.com/maps/11146/saratov-oblast/category/airport/184108111/?utm_medium=mapframe&utm_source=maps"
          style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>Airport in Saratov Oblast</a><iframe src="https://yandex.com/map-widget/v1/?ll=46.189821%2C51.720738&mode=search&oid=141302268769&ol=biz&z=14" width="560" height="400" frameborder="1" allowfullscreen="true" style={{ position: "relative" }}></iframe></div> */}

      </main >
    </>
  )
}
