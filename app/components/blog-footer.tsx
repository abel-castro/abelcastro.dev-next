export default async function BlogFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-slate-300 p-4 text-center text-sm">
      <p>
        Abel Castro {currentYear} - checkout the source code of this blog on{" "}
        <a
          href="https://github.com/abel-castro/abelcastro.dev-next"
          className="footer-link text-teal-500 hover:text-teal-700"
          target="_blank"
        >
          GitHub
        </a>{" "}
        -{" "}
        <a
          className="footer-link text-teal-500 hover:text-teal-700"
          href="/privacy-policy/"
        >
          Privacy Policy
        </a>{" "}
      </p>
    </footer>
  );
}
