import { connectDB } from "@/util/database";
import { MongoClient } from "mongodb";

export default async function Home() {
  // 서버 컴포넌트에서만 작성!!
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div>
      <h2 className="text-blue-500 text-xl font-bold text-center">
        Hello, tailwindcss!
      </h2>

      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>내용</th>
          </tr>
        </thead>
        <tbody>
          {result.map((a, i) => {
            <tr key={i}>
              <td>{result[i].title}</td>
              <td>{result[i].content}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}
