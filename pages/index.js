import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className="title">
        Read <Link href="/profiles/profile">this page!</Link>
      </h1>
    </>
  )
}
