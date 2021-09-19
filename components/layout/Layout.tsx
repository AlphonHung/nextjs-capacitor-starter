import Main from '~/components/layout/Main';
import Header, { HeaderProp } from '~/components/layout/Header';
import Footer from '~/components/layout/Footer';
import SEOHead, { SEOHeadProp } from '~/components/SEOHead';

/** 所有頁面共享排版 */
const Layout = (props: { children: React.ReactNode, header?: HeaderProp, seo: SEOHeadProp }) => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <SEOHead {...props.seo} />
            {props.header && <Header {...props.header} />}
            <Main>
                {props.children}
            </Main>
            <Footer />
        </div>
    )
}

export default Layout;