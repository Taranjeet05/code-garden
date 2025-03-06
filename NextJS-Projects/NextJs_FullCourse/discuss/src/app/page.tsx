import PostList from "@/components/posts/PostList";
import TopicCreateForm from "@/components/topics/TopicCreateForm";
import { fetchTopPosts } from "@/lib/query/post";

export default async function Home() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-4">
        <div className="col-span-3">
          <h1 className="text-5xl text-center font-mono m-2 font-bold">
            Top Posts
          </h1>
          <PostList fetchData={fetchTopPosts} />
        </div>
        <div className="col-span-1">
          <TopicCreateForm />
        </div>
      </div>
    </>
  );
}
