import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <div className="font-serif">
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
}
