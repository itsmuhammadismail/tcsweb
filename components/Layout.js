import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <main className="layout">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
