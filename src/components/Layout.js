import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <div className="font-serif bg-slate-600 h-[1000px]">
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
}
