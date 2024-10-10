import Image from "next/image"
// import img from '/public/tomato.png'

export default function List(){
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut'] // array 자료형
    // let arr = [2,3,4]
    // let a = arr.map((a, i)=>{
    //   // 함수 안의 코드 반복 실행 해줌
    //   console.log(a, i) 
    //   return 10
    // })
    // console.log(a)

    return(
        <div>
            <h4 className="title">상품 목록</h4>
            {
                상품.map((a, i)=>{
                    return (
                        <div className="food" key={i}>
                            {/* <Image src={img} alt="토마토" className="food-img"></Image> */}
                            <img src={`/food${i}.png`} alt="토마토" className="food-img"></img>
                            {/* <Image src="https://placehold.co/500" width={500} height={500} className="food-img"/>  외부에서 불러올 때 */}
                            <h4>{i+1}. {a} $40</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}