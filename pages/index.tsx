import { useState, useEffect } from 'react';
import Layout from '~/components/layout/Layout';
// import { Animated } from "react-animated-css";

/** Home頁會取得getStaticProps的返回內容(allPostsData) */
export default function Home({ allPostsData }) {
    const [showIntro, setShowIntro] = useState(false);
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (showIntro && !init) {
            console.log('init')
            setInit(true);
        }
    }, [showIntro, init])

    return (
        <Layout seo={{ pageTitle: 'Home' }}>
            <div className={`w-full h-full flex flex-col`}>
                <div className={`w-full h-1/5 flex justify-center items-center bg-gray-400 text-xl`}>誠心祈求後點我求籤</div>
                <div className={`w-full h-1/5 flex justify-center items-center bg-gray-200 text-xl`} onClick={() => { setShowIntro(!showIntro) }}>張王爺求籤簡介</div>
                <div className={`bg-temple bg-cover flex justify-center items-center flex-1`}>
                    <div className={`animated duration-500 ${showIntro ? 'fadeInDown' : 'fadeOutUp'}`}>
                        {init && <div className={`flex flex-col justify-center items-center text-white text-lg`}>
                            <p>王爺本宮原位於恆春古城</p>
                            <p>93年為服務大眾遷移高雄</p>
                            <p>本工作室奉王爺指示</p>
                            <p>製造手機求籤方便大眾</p>
                            <p>勸善懲惡</p>
                        </div>}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
