import HeadHTML from "../headHtml";
import Header from "../header";
import Footer from "../footer";



function Layout({ children }) {

  return (
    <>
      <HeadHTML />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
