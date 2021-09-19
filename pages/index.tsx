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

/** Home頁會取得getStaticProps的返回內容(allPostsData) */
export default function Home({ allPostsData }) {
    return (
        <Layout seo={{ pageTitle: 'Home' }}>
            <h1 className="text-6xl hover:underline animate-float-normal">Welcome to JAPARI PARK</h1>
            <p className="text-2xl">Get started by editing</p>
        </Layout>
    )
}
