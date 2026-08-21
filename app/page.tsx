import PdfViewerClient from "./components/PdfViewerClient";

export default function Home() {
  return (
    <main className="container">
      <header className="header">
        <img
          src="/logo.png"
          alt="Aliméntate"
          className="logo"
        />
      </header>

      <PdfViewerClient />
    </main>
  );
}