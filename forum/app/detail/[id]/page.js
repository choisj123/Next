import DetailLink from "@/app/list/DetailLink";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

// 여러 페이지 만드는 Dynamic Route
export default async function Detail(props) {
  let db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: ObjectId.createFromHexString(props.params.id) });

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-bold text-center mb-5 border-b pb-3">
        상세 페이지
      </h1>
      <h4 className="text-xl font-semibold mb-3">{result.title}</h4>
      <p className="text-gray-700 leading-relaxed">{result.content}</p>

      <DetailLink></DetailLink>
    </div>
  );
}
