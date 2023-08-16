import HeadHTML from "../headHtml";
import Header from "../header";
import Footer from "../footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Layout = ({ children, posts, topics }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "@@STORED_POSTS",
      payload: { posts, topics },
    });
  }, []);
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <>
        <HeadHTML />
        <Header />
        <main>{children}</main>
      </>
      <Footer />
    </div>
  );
};

export default Layout;
