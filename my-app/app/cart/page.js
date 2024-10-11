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
    let 장바구니 = ['Tomatoes', 'Pasta']
    let card = ['현대', '롯데', '신한']
    return(
        <div>
            <Contents/>
            <h3 className="title">장바구니</h3>
            {/* {age} {name} */}
            <CartItem item={장바구니[0]} temp={card[0]}/>
            <CartItem item={장바구니[1]}/>
            <CartItem item={장바구니[2]}/> 
            <Banner event={card[0]}/>
            <Banner event={card[1]}/>
            <Banner event={card[2]}/>
            <RedBtn color="blue"/>
            <Link style={{textAlign: 'center'}} href="/cart/payment">결제</Link>
        </div>
    )
}

function Banner(props){
    return <h5>{props.event}카드 결제 행사중</h5>
}

// 컴포넌트 component 
function CartItem(props){
    return (
        <div className="cart-item">
            <p>{props.item}</p>
            <p>{props.temp}</p>
            <p>1개</p>
        </div>
    )
}

function RedBtn(props){
    return <button style={{background: props.color, width:'100px', marginLeft: '400px'}}>버튼</button>
}

