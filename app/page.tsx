import Link from 'next/link'

export default function Home() {
  return (
    <body className="main">
      <Link href={"/app"}>Open App</Link>
    </body>
  );
}
