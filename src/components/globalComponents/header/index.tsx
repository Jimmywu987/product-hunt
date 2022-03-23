import styles from "./styles.module.css";
import { useState,Fragment } from "react"
import useTranslation from 'next-translate/useTranslation';
import Link from "next/link";
import { useRouter } from "next/router";
import {  Button, SwipeableDrawer, SwipeableDrawerProps } from "@mui/material";
import PublicIcon from '@mui/icons-material/Public';
import Image from 'next/image';
import MobileHeadDrawer from "../mobileHeadDrawer";
import {  styled } from '@mui/material/styles';

const StyledDrawer = styled(SwipeableDrawer)<SwipeableDrawerProps>(()=>({
  boxShadow: "0px 8px 10px -5px rgb(0 0 0 / 20%), 0px 16px 24px 2px rgb(0 0 0 / 14%), 0px 6px 0px 5px rgb(0 0 0 / 12%)",
  "& .MuiBackdrop-root": {
    top: "57px"
  },
  "& .MuiDrawer-paper": {
    top: "56px",
  }
}))

const Header = ()=>{

    const { t, lang } = useTranslation('common');
    const router = useRouter();
    const { pathname, asPath, query } = router
    const [productListHover, setProductListHover] = useState<boolean>(false)
    const [drawerState, setDrawerState] = useState<boolean>(false);


    const onClickLanguageHandler = (language : string) => {
      router.push({ pathname, query }, asPath, { locale: language })
    };

    const toggleDrawer = () =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event && event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
          return;
      }
      setDrawerState((e)=>!e);
    };

    return (
      <header className="shadow w-full ">
        <div className="container px-0.5 lg:px-4 flex justify-between items-center h-14 mx-auto">

          <Link href="/" passHref>
            <a className="text-theme-red font-bold text-xl flex items-center z-[1201]">
              <Image src="/logo.png" alt="Logo icon" width="30" height="30"  />
              <span className="ml-0.5">roduct Hunt Post</span>
            </a>
          </Link>

          <div className="hidden lg:flex relative">
            <Button onMouseEnter={() => setProductListHover(true)}
                    onMouseLeave={() => setProductListHover(false)} className="mx-2 justify-end " startIcon={<PublicIcon className="text-theme-red"/>}>
              <div className="text-sm leading-normal text-center text-theme-red ">
                {t("Current_Language")}
              </div>
            </Button>
            <div onMouseLeave={()=>setProductListHover(false)} onMouseEnter={()=>setProductListHover(true)} className={`transition duration-800 ease-in-out transform ${ !productListHover && 'invisible translate-y-4 opacity-0 '} absolute top-8  w-32 bg-white left-0 shadow-md rounded-lg`}>
              <div className="w-full h-full p-0.5">
              <div className={`flex items-center justify-between w-full px-3 py-2 rounded cursor-pointer ${lang === 'en' ? 'text-blueGray-600': 'text-blueGray-400'} text-md  hover:text-blueGray-800`} onClick={()=>onClickLanguageHandler("en")}>
                  English
                </div>
                <div className={`flex items-center justify-between w-full px-3 py-2 rounded cursor-pointer ${lang === 'zh-HK' ? 'text-blueGray-600': 'text-blueGray-400'} text-blueGray-600 text-md  hover:text-blueGray-800`} onClick={()=>onClickLanguageHandler("zh-HK")}>
                  中文(繁體)
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.hamburger_box} block lg:hidden cursor-pointer z-[1201] ${drawerState && styles.hamburger_box_animate}`} onClick={toggleDrawer()}>
            <div className={styles.hamburger_top}></div>
            <div className={styles.hamburger_middle}></div>
            <div className={styles.hamburger_bottom}></div>
          </div>
          
          <Fragment key="right">
            <StyledDrawer anchor="right" open={drawerState} onClose={toggleDrawer()} onOpen={toggleDrawer()}>
                <MobileHeadDrawer/>
            </StyledDrawer>
          </Fragment>
        </div>
      </header>
    )
}
  
  export default Header

