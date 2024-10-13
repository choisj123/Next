import { connectDB } from "@/util/database";

export default async function List() {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="bg-gray-50 p-4">
      {result.map((a, i) => {
        return (
          <div className="bg-white rounded-lg p-5 mb-2 shadow-sm" key={i}>
            <h4 className="text-black text-xl font-extrabold m-0">
              {result[i].title}
            </h4>
            <p className="text-gray-500 mt-2 mb-0">{result[i].content}</p>
          </div>
        );
      })}
    </div>
  );
}
