const fetcher = (resource, init) => fetch(resource, init).then(res => res.json());

const onErrorRetry = (error, key, config, revalidate, { retryCount }) => {
    // 定義某些status不需要retry
    if (error.status === 404) return

    // 定義某些api不需要retry
    // if (key === '/api/user') return

    // Retry次數
    if (retryCount >= 10) return

    // 幾秒後再次嘗試
    setTimeout(() => revalidate({ retryCount }), 5000)
}

const onError = (error, key) => {
    // 判斷error滿足條件後執行流程，如後送log
    if (error.status !== 403 && error.status !== 404) { }
}

/** Middleware: 在console顯示發出的請求 */
const logger = (useSWRNext) => {
    return (key, fetcher, config) => {
        // 替換原始fetcher
        const extendedFetcher = (...args) => {
            // 額外插入一件要做的事
            console.log('SWR Request:', key)
            return fetcher(...args)
        }

        // Execute the hook with the new fetcher.
        return useSWRNext(key, extendedFetcher, config)
    }
}

export const swrConfig = {
    fetcher,
    onErrorRetry,
    onError,
    use: [logger]
}