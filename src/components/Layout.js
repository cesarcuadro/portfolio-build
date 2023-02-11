import Header from "./Header";

export default function Layout({ children }) {
    return (
      <>
      <div className="h-screen bg-secondary pt-3">
        <Header />
        <main>{children}</main>
        </div>
      </>
    )
  }