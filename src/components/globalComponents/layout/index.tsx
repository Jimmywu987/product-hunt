import HeadHTML from "../headHtml";
import Header from "../header";
import Footer from "../footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Layout = ({ children,posts, topics })=>{
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({
      type: "@@STORED_POSTS",
      payload: {posts,topics},
    });
  },[])
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




