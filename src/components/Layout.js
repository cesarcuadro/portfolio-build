import Header from "./Header";

export default function Layout({ children }) {
    return (
      <>
      <div className="h-screen bg-secondary">
        <Header />
        <main>{children}</main>
        </div>
      </>
    )
  }