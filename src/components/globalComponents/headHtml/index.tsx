import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head'


const HeadHtml = ()=>{
  const { t } = useTranslation('common');

  return (
    <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content={t("head.meta.title")} />
        <meta name="description" content={t("head.meta.description")} />
    </Head>
  )
}

export default HeadHtml