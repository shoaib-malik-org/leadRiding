import '../styles/globals.css'
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="https://kit.fontawesome.com/aafded4f19.js" crossorigin="anonymous" />
    </>
  )
}

export default MyApp
