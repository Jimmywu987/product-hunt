import HeadHTML from "../headHtml";
import Header from "../header";
import Footer from "../footer";



const Layout = ({ children })=>{

  return (
    <>
      <HeadHTML />
      <Header />
      <main className="min-h-[80vh]">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
