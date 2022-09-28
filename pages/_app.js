import '../styles/globals.css'
import Header from './header'
import Footer from './footer'
//https://tailwindcomponents.com/components
//https://flowbite.com/

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <div className="flex mx-auto my-10 w-10/12 md:w-2/3 lg:w-3/5 bg-logo-pink-100 rounded-[40px]">
          <Component {...pageProps} />
      </div>
      <Footer/>
    </>
  )
  
}

export default MyApp
