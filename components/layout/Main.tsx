/** 頁面主內容容器 */
const Main = (props: { children: React.ReactNode }) => {
    return (
        <main className="w-screen h-screen">
            {props.children}
        </main>
    )
}

export default Main;