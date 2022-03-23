import { Accordion, AccordionDetails, AccordionSummary, Box, List, ListItemText,AccordionProps } from '@mui/material'
import React from 'react'
import {  styled } from '@mui/material/styles';

import PublicIcon from '@mui/icons-material/Public';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from "next/router";


const StyledAccordion = styled(Accordion)<AccordionProps>(()=>({
    boxShadow: "0px 0px 1px 0px rgb(0 0 0 / 20%), 0px 0px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"
}))


const MobileHeadDrawer = () => {
    const { t, lang } = useTranslation('common');
    const router = useRouter();
    const { pathname, asPath, query } = router

    const onClickLanguageHandler = (language : string) => {
        router.push({ pathname, query }, asPath, { locale: language })
      };
  return (
    <Box sx={{ width: 230 }} role="presentation">
        <List>
            <StyledAccordion >
                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                    <div className="flex items-center text-theme-red"><PublicIcon className="mr-1"/>{t("Current_Language")}</div>
                </AccordionSummary>
                <AccordionDetails>
                    <div  className={`w-full ${lang === 'zh-HK' ? 'text-blueGray-600': 'text-blueGray-400'} flex items-center justify-between px-3 text-blueGray-600 font-bold text-md py-2 cursor-pointer rounded`}>
                        <ListItemText onClick={()=>{onClickLanguageHandler("zh-HK")}} className="text-2xl" primary="中文(繁體)"  />
                    </div>
                    <div className={`w-full ${lang === 'en' ? 'text-blueGray-600' : 'text-blueGray-400'} flex items-center justify-between px-3  font-bold text-md py-2 cursor-pointer rounded`}>
                        <ListItemText onClick={()=>{onClickLanguageHandler("en")}}className="text-2xl" primary="English"  />
                    </div>
                </AccordionDetails>
            </StyledAccordion>
        </List>
    </Box>
  )
}

export default MobileHeadDrawer