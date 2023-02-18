import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <div className="font-serif text-white bg-black min-h-screen overflow-y-auto">
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
}
