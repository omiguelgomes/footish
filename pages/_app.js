import '../styles/globals.css'
import Header from './header'
//https://tailwindcomponents.com/components

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  )
  
}

export default MyApp
