import './Main.css';
import Header from '../components/Header';

const review = [
    {
        img: '/images/광안대교, 도시를 품다.jpg',
        usernm: '자린고비여행가곽두팔',
        score: 4,
        detail: '항상 여행은 돈이 문제였는데 직통으로 저렴하게 여행 가능!'
    },
    {
        img: '/images/강릉 선교장.jpg',
        usernm: '한양유생한옥균',
        score: 5,
        detail: '놀러갈때 고민할 필요없어요!!'
    },
    {
        usernm: '흑백요리사비빔대왕',
        score: 5,
        detail: '한식은 역시 비빔밥 비빔비빔비빔비빔비빔비빔'
    },
    {
        usernm: '무엇이든손민수',
        score: 4,
        detail: '제 친구가 이거 쓰길래 좋아보여서 따라썼는데 잘한 선택같아용 ㅎ'
    }
]

const Main = () => {
    return (
        <div className="Main">
            <Header/>
            <div className="Main_mainImg_container">
                <img src="/images/zigtong_mainImg.png" alt="메인 이미지" style={{width:'100%',height:'200px', objectFit:'cover'}} />
                <p className="Main_mainImg_text">우리와 함께라면 어디든 갈 수 있어요!</p>
            </div>
            <div className="recentRoot">
                <h2>최근 저장된 경로</h2>
            </div>
            <div className="review_container">

            </div>
        </div>
    );
}

export default Main;