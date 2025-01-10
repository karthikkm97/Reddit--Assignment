export interface RedditPost {
  id: string;
  title: string;
  author: string;
  created_utc: number;
  num_comments: number;
  score: number;
  thumbnail: string;
  url: string;
}

export interface RedditResponse {
  data: {
    children: Array<{
      data: RedditPost;
    }>;
  };
}