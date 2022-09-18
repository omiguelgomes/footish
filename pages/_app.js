import '../styles/globals.css'
import Header from './header'
import Footer from './footer'
//https://tailwindcomponents.com/components
//https://flowbite.com/

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
