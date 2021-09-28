import Layout from '~/components/layout/Layout';

/** Home頁會取得getStaticProps的返回內容(allPostsData) */
export default function Home({ allPostsData }) {
    return (
        <Layout seo={{ pageTitle: 'Home' }}>
            <div className={`w-full h-full flex flex-col`}>
                <div className={`w-full h-1/5 flex justify-center items-center bg-gray-400 text-xl`}>誠心祈求後點我求籤</div>
                <div className={`w-full h-1/5 flex justify-center items-center bg-gray-200 text-xl`}>張王爺求籤簡介</div>
                <div className={`bg-temple bg-cover flex-1`} />
            </div>
        </Layout>
    )
}
