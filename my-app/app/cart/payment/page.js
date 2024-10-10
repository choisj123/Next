import Link from "next/link"
export default function Payment(){
    return(
        <div>
            <h1 className="title">결제페이지입니다</h1>
            <Link className="payLink" href="/cart" >이전</Link>
        </div>
    )
}