import PdfViewer from "./components/PdfViewer";

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

      <PdfViewer />
    </main>
  );
}