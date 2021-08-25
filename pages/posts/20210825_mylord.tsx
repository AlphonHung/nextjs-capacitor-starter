import SEOHead from '~/components/SEOHead';
import Layout from '~/components/Layout';

const post = () => {
    return (
        <Layout>
            <SEOHead pageTitle={`My Lord`} />
            <h1>My Lord</h1>
        </Layout>
    )
}

export default post;