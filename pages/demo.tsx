import PostsLib from '~/lib/posts.lib';
import Layout from '~/components/layout/Layout';

// Static Generation with data. Get md file data as props.
export async function getStaticProps() {
    const allPostsData = PostsLib.getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    }
}

/** 官網教學：如何取得本地文章資料作SSR */
export default function Demo({ allPostsData }) {
    return (
        <Layout seo={{ pageTitle: 'Home' }}>
            <h1 className="text-2xl hover:underline animate-float-normal">Welcome to JAPARI PARK</h1>
            <p>Get started by editing</p>
        </Layout>
    )
}
