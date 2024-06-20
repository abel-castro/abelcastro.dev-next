export default async function BlogHeader() {
  const rootURL = process.env.ROOT_URL;
  return (
    <header className="text-white p-4 mb-8">
      <h1 className="text-3xl font-bold hover:text-sky-100">
        <a href={rootURL}>AbelCastro.Dev</a>
      </h1>
    </header>
  );
}
