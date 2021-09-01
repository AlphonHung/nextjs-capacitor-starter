import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import { PostType } from '~/domain/post.domain';

// 指定頂層posts資料夾
const postsDirectory = path.join(process.cwd(), 'posts')

/** 取得排序後的文章列表 */
const getSortedPostsData = () => {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        } as PostType
    })
    // Sort posts by date
    return allPostsData.sort((a, b) => (a < b) ? 1 : (a > b ? -1 : 0));
}

/** 取得所有文章id */
const getAllPostIds = () => {
    const fileNames = fs.readdirSync(postsDirectory)

    // 回傳陣列內，每篇文章都需要一個params物件來包住id，這個id與實際顯示文章的[id].tsx對應
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

/** 透過id取得文章內容 */
const getPostData = async (id: string) => {
    const fullPath = path.join(postsDirectory, `${id}.md`); // 設定路徑
    const fileContents = fs.readFileSync(fullPath, 'utf8'); // 讀取指定路徑文件

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the id
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}

export default {
    getSortedPostsData,
    getAllPostIds,
    getPostData
}