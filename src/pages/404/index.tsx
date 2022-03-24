import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const NoFound404 = () => {
    const { t } = useTranslation('common');

    return (<div className="flex justify-center items-center h-[70vh]">
            <div className="flex flex-col space-y-1 items-center">
                <div className="mr-2 text-theme-red text-4xl">404</div>
                <div>{t("404.title")}<Link href="/"><a className="text-sky-600 hover:text-sky-700">{t("404.linkBack")}</a></Link></div>
            </div>
        </div>)
}

export default NoFound404