import Head from 'next/head'
import Image from 'next/image'
import {useState, useEffect} from 'react'


export default function Home() {


  const data = [
    {
      name : 'Tiny Tim',
      date : '11/18/22',
      message: 'Hey! Sick website, can I use funding to fix my broken leg bro?'

    },
    {
      name : 'Scrooge',
      date : '11/13/22',
      message: 'Bah, Humbug! Why are you making this when you should be making more money!'

    },
  ]




  const [walletAddress, setWalletAddress] = useState(null)

  const connectWallet = async () => {
    const {solana} = window;

    const response = await solana.connect() 
    console.log("Connect to Wallet:", response.publicKey.toString())
    setWalletAddress(response.publicKey.toString())
    
  }

  const checkIfWalletIsConnected = async () => {
    if (window?.solana?.isPhantom) {
      console.log('Connecting to Wallet...');

      const response = await window.solana.connect({ onlyIfTrusted: true });
      console.log(
        'Connected with Public Key:',
        response.publicKey.toString()
      );
    } else {
      alert('Solana object not found! Get a Phantom Wallet 👻');
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [walletAddress])


  return (
    <div className="bg-black flex flex-col flex-nonwrap place-content-center items-center h-screen overflow-auto p-0 relative gap-2">
    <Head>
      <title>Solana Guestbook</title>
    </Head>
    <div className="flex place-content-center items-center flex-none overflow-auto p-12 relative w-auto gap-16">
      <div className="flex flex-col items-center text-white w-full">
        <div className="text-xl mb-10">
          <h1>Welcome to my guestbook!</h1>
        </div>
        {!walletAddress 
          ?
          <div>
            <button className='btn text-sm' onClick={connectWallet}>Connect Wallet</button>
          </div>
          :
          <div>
            {data?.map(index => {
              return(
              <div className="py-2 w-full text-md grid justify-items">
                <p className="">{index.message}</p>
                <p className="text-gray-600 text-sm justify-self-end"> {index.name} <span className="mx-1">/</span> {index.date} </p>
              </div>
              )
            })}
          </div>
        }
      </div>
    </div>
    <button className="flex h-auto w-fit p-2 rounded-3xl text-sm border border-gray-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
      <a
        href="https://rahulrajkumar.me"
        target="_blank"
        rel="noreferrer"
        className=''
      >
        <div className="flex items-center">
          <Image src='/rahulimg.jpg' alt="rahul pfp" width='16' height='16' className='h-4 pr-2 pl-2 text-black w-8' />
          <p className='m-0 pr-2'>Built By Rahul</p>
        </div>
      </a>
    </button>
  </div>
  )
}
