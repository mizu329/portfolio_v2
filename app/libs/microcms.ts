import { createClient } from "microcms-js-sdk";

// microCMS SDK から必要な型をインポート
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
  MicroCMSContentId,
  MicroCMSDate,
} from "microcms-js-sdk";

// ニュース記事の型定義
export type News = {
  id: string;
  title: string;
  description: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
  image?: MicroCMSImage;
  body?: string;
} & MicroCMSListContent;

// カテゴリの型定義
export type Category = {
  name: string;
};

// microCMS の画像データ型
interface MicroCMSImage {
  url: string;
  height?: number;
  width?: number;
}
// microCMS のリストコンテンツ型
type MicroCMSListContent = MicroCMSContentId & MicroCMSDate;

// 環境変数が設定されていない場合はエラーをスローします
if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is not defined");
}

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is not defined");
}

// microCMS クライアントを作成
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// ニュース記事のリストを取得する関数
export const getNewsList = async (queries?: MicroCMSQueries) => {
  const listDate = await client.getList<News>({
    endpoint: "news",
    queries,
  });
  return listDate;
};
