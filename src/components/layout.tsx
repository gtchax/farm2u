import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="mt-20 container min-h-screen">{children}</main>
      <Footer>this is the footer</Footer>
    </>
  );
};

export default Layout;
