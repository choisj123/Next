export default function Home() {
  let name = 'choi'
  let age = 20
  let link = 'http://google.com'
  return (
    <div>
      <h4 className="title">수딩후레쉬</h4>
      <p className="title-sub">by dev {name}</p>
      <a href={link} style={{color:'red', textAlign: 'center', fontSize:'30px'}}>링크</a>
    </div>
  );
}
 