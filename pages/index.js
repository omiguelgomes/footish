import Home from '/pages/home'

let dev = false

export const server = dev ? 'http://localhost:3000' : 'https://footish.vercel.app';

export default function Index() {
  return (
    <>
     <Home/>
    </>
  )
}
