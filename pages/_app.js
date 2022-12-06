import '../styles/globals.css'

import {Manrope} from '@next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
})


function MyApp({ Component, pageProps }) {
  return(
      <main className={manrope.className}>
        <Component {...pageProps} />
       </main>
     
     )
}

export default MyApp
