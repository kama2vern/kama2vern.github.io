import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const allArticles = await getCollection('article');
  return rss({
    // 出力されるXMLの`<title>`フィールド
    title: 'kama2vern.github.io',
    // 出力されるXMLの`<description>`フィールド
    description: 'かまかまの雑草ブログ',
    // エンドポイントのコンテキストからプロジェクトの"site"を取得
    // https://docs.astro.build/ja/reference/api-reference/#contextsite
    site: context.site,
    // 出力されるXMLの<item>の
    // コンテンツコレクションやglobインポートを利用した例については「`items`の生成」セクションをご覧ください
    items: [],
    // (任意) カスタムXMLを挿入
    customData: `<language>ja</language>`,
    items: allArticles.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      customData: post.data.customData,
      link: `/articles/${post.slug}/`,
    })),
  });
}