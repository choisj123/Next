import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="bg-gray-50 p-4">
      <h1 className="text-3xl font-bold text-center mb-5">게시판</h1>
      {result.map((a, i) => (
        <div className="bg-white rounded-lg p-5 mb-2 shadow-sm" key={i}>
          <Link href={`/detail/${result[i]._id}`} prefetch={false}>
            <h4 className="text-black text-xl font-extrabold m-0">
              {result[i].title}
            </h4>
          </Link>
          <DetailLink></DetailLink>
          <p className="text-gray-500 mt-2 mb-0">{result[i].content}</p>
        </div>
      ))}
    </div>
  );
}
