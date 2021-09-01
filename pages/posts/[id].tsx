import { getAllPostIds, getPostData } from '~/lib/posts';
import SEOHead from '~/components/SEOHead';
import Layout from '~/components/Layout';
import Date from '~/components/Date';

export default function Post({ postData }) {
    return <Layout>
        <SEOHead pageTitle={postData.title} />
        {postData.title}
        <br />
        {postData.id}
        <br />
        <Date dateString={postData.date} />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
}

/** 回傳可用的文章id */
export async function getStaticPaths() {
    const paths = getAllPostIds(); // 透過lib取得id物件陣列
    return {
        paths,
        fallback: false
    }
}

/** 利用id取得該文章內容 */
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}