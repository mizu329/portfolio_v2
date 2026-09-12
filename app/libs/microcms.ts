import { createClient } from "microcms-js-sdk";

// microCMS SDK から必要な型をインポート
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

// カテゴリの型定義
export type Category = {
  id: string;
  name: string;
};

// ニュース記事の型定義
export type News = {
  id: string;
  title: string;
  description: string;
  categories: Category[] | undefined;
  publishedAt: string;
  createdAt: string;
  thumbnail?: MicroCMSImage;
  body?: string;
} & MicroCMSListContent;

// 制作実績の型定義
export type Works = {
  id: string;
  title: string;
  subtitle: string;
  // categories: Category[] | undefined;
  publishedAt: string;
  createdAt: string;
  workImage?: MicroCMSImage;
  body?: string;
  summary?: string;
} & MicroCMSListContent;

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
  const listData = await client.getList<News>({
    endpoint: "news",
    queries: {
      ...queries,
      orders: queries?.orders ?? "-publishedAt",
    },
  });
  return listData;
};

// ニュース記事の詳細を取得する関数
export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<News>({
    endpoint: "news",
    contentId,
    queries,
  });
  return detailData;
};

// 制作実績のリストを取得する関数
export const getWorksList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Works>({
    endpoint: "works",
    queries: {
      ...queries,
      orders: queries?.orders ?? "-publishedAt",
    },
  });
  return listData;
};

// 制作実績の詳細を取得する関数
export const getWorksDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Works>({
    endpoint: "works",
    contentId,
    queries,
  });
  return detailData;
};
