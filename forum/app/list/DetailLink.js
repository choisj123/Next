"use client";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

export default function DetailLink() {
  let router = useRouter();

  let a = usePathname(); // 현재 url
  let b = useSearchParams(); // 쿼리 스트링
  let c = useParams(); // dynamic route에 입력한 내용 출력

  return (
    <button
      onClick={() => {
        // router.push("/list");
        // router.back(); // 뒤로가기
        // router.forward(); // 앞으로가기
        // router.refresh(); // 바뀐 내용만 새로고침
        router.prefetch("/"); // 페이지 미리 로드
      }}
      className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
    >
      목록으로
    </button>
  );
}
