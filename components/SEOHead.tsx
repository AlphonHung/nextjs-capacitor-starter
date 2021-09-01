import React from 'react'
import Head from 'next/head'
import useCurrentUrl from '~/hooks/useCurrentUrl';

const siteName = `Next.js Starter`;

/** 單頁SEO設置屬性類型 */
export type SEOHeadProp = {
    pageTitle: string;
    pageDescription?: string;
    keywords?: string
}

/** 組件：針對SEO設定每頁標頭 */
const SEOHead = (props: SEOHeadProp) => {
    const currentTitle = props.pageTitle;
    const currentDescription = props.pageDescription || '';
    const keywords = props.keywords || '';
    const { currentUrl } = useCurrentUrl();
    return (
        <Head>
            <title>{`${currentTitle} | ${siteName}`}</title>
            <meta name="description" content={currentDescription} />
            <meta name="keywords" content={keywords}></meta>

            <meta property="og:site_name" name="application-name" content={siteName} />
            <meta property="og:title" itemProp="name" content={`${currentTitle} | ${siteName}`} />
            <meta property="og:description" itemProp="description" content={currentDescription} />
            <meta property="og:url" itemProp="url" content={currentUrl} />

            <meta name="twitter:title" content={`${currentTitle} | ${siteName}`} />
            <meta name="twitter:description" content={currentDescription} />
        </Head>
    )
}

export default SEOHead;