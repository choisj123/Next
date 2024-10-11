'use client'

import Image from "next/image"
// import img from '/public/tomato.png'

import {useState} from "react"

export default function List(){
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut'] // array 자료형

    // let arr = [2,3,4]
    // let a = arr.map((a, i)=>{
    //   // 함수 안의 코드 반복 실행 해줌
    //   console.log(a, i) 
    //   return 10
    // })
    // console.log(a)

    let [수량, 수량변경] = useState([0, 0, 0])
    return(
        <div>
            <h3 className="title">상품 목록</h3>
            {
                상품.map((a, i)=>{
                    return (
                        <div className="food" key={i}>
                            {/* <Image src={img} alt="토마토" className="food-img"></Image> */}
                            <img src={`/food${i}.png`} alt="토마토" className="food-img"></img>
                            {/* <Image src="https://placehold.co/500" width={500} height={500} className="food-img"/>  외부에서 불러올 때 */}
                            <h4>{a} $40</h4>
                            <button onClick={()=> {
                                let copy1 = [...수량]
                                copy1[i]--
                                수량변경(copy1)
                            }}>-</button>
                            <span> {수량[i]} </span>
                            <button onClick={()=>{ 
                                let copy1 = [...수량]
                                copy1[i]++
                                수량변경(copy1) 
                            }}>+</button>
                        </div>
                    )
                })
            }
        </div>
    )
}