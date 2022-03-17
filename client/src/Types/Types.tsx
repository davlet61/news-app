import { FormEvent, Dispatch, SetStateAction, ChangeEvent } from 'react';

export interface Source {
  id: null;
  name: string;
}

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface News {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Context {
  keyword: string;
  news: News;
  setKeyword: Dispatch<SetStateAction<string>>;
  setNews: Dispatch<SetStateAction<News>>;
}

export type HandleSubmitFn = (event: FormEvent) => void;

export type AddNewsFn = (data: News) => void;

export type HandleChangeFn = (
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => void;

export type State = News | Article | string;
