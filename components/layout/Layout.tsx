import Main from '~/components/layout/Main';
import Footer from '~/components/layout/Footer';
import SEOHead, { SEOHeadProp } from '~/components/SEOHead';

/** 所有頁面共享排版 */
const Layout = (props: { children: React.ReactNode, seo: SEOHeadProp }) => {
    return (
        <div className="min-h-screen px-2 flex flex-col justify-center items-center">
            <SEOHead {...props.seo} />
            <Main>
                {props.children}
            </Main>
            <Footer />
        </div>
    )
}

export default Layout;