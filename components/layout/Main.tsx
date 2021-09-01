/** 頁面主內容容器 */
const Main = (props: { children: React.ReactNode }) => {
    return (
        <main className="py-20 flex flex-col justify-center items-center flex-1">
            {props.children}
        </main>
    )
}

export default Main;