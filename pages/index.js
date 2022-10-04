import Home from '/pages/home'

export const server = process.env.DEV === 'true' ? 'http://localhost:3000' : 'https://footish.vercel.app';

console.log("hi");
console.log(server);
console.log(process.env.DEV)
console.log(Boolean(process.env.DEV) === true);
console.log(Boolean(process.env.DEV));

export default function Index() {
  return (
    <>
     <Home/>
    </>
  )
}