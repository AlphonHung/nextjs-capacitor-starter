import PostsLib from '~/lib/posts.lib';
import Layout from '~/components/layout/Layout';
import Date from '~/components/Date';

export default function Post({ postData }) {
    return <Layout seo={{ pageTitle: postData.title }}>
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
    const paths = PostsLib.getAllPostIds(); // 透過lib取得id物件陣列
    return {
        paths,
        fallback: false
    }
}

/** 利用id取得該文章內容 */
export async function getStaticProps({ params }) {
    const postData = await PostsLib.getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}