import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-500 via-slate-300  to-slate-200 ">
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
}
