// 'use client' // 쓰면 client component
                // 안쓰면 server component

// server component
// - html에 자바스크립트 기능 넣기 불가능( ex, onclick 이벤트)
// - 로딩 속도 빠름
// - 검색 엔진 노출 유리
// - 큰 페이지는 server로

// client component ** 많이 사용
// - html에 자바스크립트 기능 넣기 가능( ex, onclick 이벤트)
// - useState, useEffect 등 사용 가능
// - 로딩 속도 느림 (js 필요, hydration 필요)

import Link from "next/link"
//import age from "./data.js" // ./ - 현재 폴더  ../ - 상위폴더 , ./폴더명/파일명 - 하위폴더
import {age, name} from "./data.js"
import Contents from "./contents.js"

export default function Cart(){
    return(
        <div>
            <Contents/>
            <h3 className="title">장바구니</h3>
            {age} {name}
            <CartItem/>
            <CartItem/>
            <CartItem/> 
            <Link style={{textAlign: 'center'}} href="/cart/payment">결제</Link>
        </div>
    )
}

// 컴포넌트 component 
function CartItem(){
    return (
        <div className="cart-item">
            <p>상품명</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}

