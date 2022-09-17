import '../styles/globals.css'
import Header from './header'
import Footer from './footer'
//https://tailwindcomponents.com/components

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
  
}

export default MyApp
