import Link from 'next/link'

export default async function BlogHeader() {
  const rootURL = process.env.ROOT_URL;
  return (
    <header className="text-white p-4 mb-8">
      <h1 className="text-3xl font-bold rainbow-text">
        <Link href={rootURL}>AbelCastro.Dev</Link>
      </h1>
    </header>
  );
}
