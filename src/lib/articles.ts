import { getCollection } from 'astro:content';
const isDev = import.meta.env.DEV;
const allArticles = await getCollection('article');

function validArticles() {
    return allArticles.filter((article) => {
        if (isDev) return true;

        const { isDebugArticle } = article.data;
        return !isDebugArticle;
    });
}

export function allArticlesSortedByDate() {
    return validArticles()
        .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export function latestArticles() {
    return allArticlesSortedByDate().slice(0, 3);
}
