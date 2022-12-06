import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="bg-black flex flex-col flex-nonwrap place-content-center items-center h-screen overflow-auto p-0 relative gap-2">
    <Head>
      <title>Solana Guestbook</title>
    </Head>
    <div className="flex place-content-center items-center flex-none overflow-auto p-12 relative w-auto gap-16">
      <div className="flex flex-col items-center text-white w-full">
        <div className="text-xl">
          <h1>Welcome to my guestbook!</h1>
        </div>
      </div>
    </div>
    <button className="flex  h-auto w-fit p-2  rounded-3xl text-sm border border-gray-800 hover:shadow-xl">
      <a
        href="https://rahulrajkumar.me"
        target="_blank"
        rel="noreferrer"
        className=''
      >
        <div className="flex items-center">
          <Image src='/rahulimg.jpg' alt="rahul pfp" width='16' height='16' className=' h-4 pr-2 pl-2 text-black w-8' />
          <p className='m-0'>Built By Rahul</p>
        </div>
      </a>
    </button>
  </div>
  )
}
