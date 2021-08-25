import Head from 'next/head';
import { AppProps } from 'next/app';
import useCurrentUrl from '~/hooks/useCurrentUrl';
import '~/styles/global.css';

const App = ({ Component, pageProps }: AppProps) => {
    const { domain } = useCurrentUrl();
    // todo: 最外層div可取代為ThemeProvider等
    return (
        <div>
            <Head>
                {/* SEO & SMO */}
                {/* viewport for pc */}
                <meta name="viewport" content="width=1280, user-scalable=yes" />
                {/* viewport for mobile */}
                {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta> */}
                <meta name="generator" content={domain} />
                <meta name="author" content={domain} />
                <meta name="copyright" content={`${new Date().getFullYear()} ${domain}`} />
                <link rel="icon" type="image/png" sizes="32x32" href={`/favicon-32x32.png?v=${Date.now()}`} />
                <link rel="icon" type="image/png" sizes="16x16" href={`/favicon-16x16.png?v=${Date.now()}`} />
                <link rel="icon" type="image/png" href={`/favicon.png?v=${Date.now()}`} />
                <link rel="shortcut icon" href={`/favicon.ico?v=${Date.now()}`} />
                {/* <meta property="og:image" itemProp="image" content="/og_img.jpg" /> */}
                {/* <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" /> */}
                <meta name="twitter:card" content="summary_large_image" />
                {/* <meta name="twitter:image" content="/og_img.jpg" /> */}
            </Head>
            <Component {...pageProps} />
        </div>
    )
}

export default App;