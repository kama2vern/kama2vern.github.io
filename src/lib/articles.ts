import type { MarkdownInstance } from 'astro';
export interface Frontmatter {
    title: string;
	pubDate: string;
}

export const allArticles = Object.values(
	import.meta.glob<MarkdownInstance<Frontmatter>>('../pages/articles/*.md', { eager: true })
);

export function allArticlesSortedByDate() {
    return allArticles
        .sort((a, b) => new Date(b.frontmatter.pubDate).getTime() - new Date(a.frontmatter.pubDate).getTime());
}

export function latestArticles() {
    return allArticlesSortedByDate().slice(0, 3);
}
