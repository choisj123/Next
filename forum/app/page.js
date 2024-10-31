import { connectDB } from "@/util/database";
import { MongoClient } from "mongodb";

// async function 안에서만 await 사용가능
export default async function Home() {
  // const client = await MongoClient.connect(
  //   "mongodb+srv://admin:admin1234@cluster0.ldc6l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  //   { useNewUrlParser: true }
  // );

  // const db1 = client.db("forum");

  // 서버 컴포넌트에서만 작성!!
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div>
      <h2 className="text-blue-500 text-xl font-bold text-center">게시판</h2>

      <table className="text-center">
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
