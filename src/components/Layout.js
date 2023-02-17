import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <div className="font-mono">
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
}
