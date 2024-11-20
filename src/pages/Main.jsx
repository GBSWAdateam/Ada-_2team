import "./Main.css";
import Header from "../components/Header";
import Maincontainer from "../components/Main_container";
import Mapitem from "../components/map";

const review = [
    {
        img: "/images/광안대교, 도시를 품다.jpg",
        usernm: "자린고비여행가곽두팔",
        score: 4,
        detail: "항상 여행은 돈이 문제였는데 직통으로 저렴하게 여행 가능!",
    },
    {
        img: "/images/강릉 선교장.jpg",
        usernm: "한양유생한옥균",
        score: 5,
        detail: "놀러갈때 고민할 필요없어요!!",
    },
    {
        usernm: "흑백요리사비빔대왕",
        score: 5,
        detail: "한식은 역시 비빔밥 비빔비빔비빔비빔비빔비빔",
    },
    {
        usernm: "무엇이든손민수",
        score: 4,
        detail: "제 친구가 이거 쓰길래 좋아보여서 따라썼는데 잘한 선택같아용 ㅎ",
    },
];

const Main = () => {
    return (
        <div className="Main">
            <Header />
            <Maincontainer />
            <div className="recentRoot">
                <h2>최근 저장된 경로</h2>
            </div>
            <div className="RecentPathcontainer">
                <Mapitem />
                <Mapitem />
                <Mapitem />
                <Mapitem />
            </div>
            <div className="review_container">
                <div className="review">
                    <img
                        src="/images/mainpagereview.png"
                        alt="광안대교, 도시를 품다"
                        style={{ width: "1350px" }}
                    />
                </div>
            </div>
            <footer className="footer">
                <div className="footer_text">
                    <p>tel. 054-000-0000</p>
                    <p>
                        © 경상북도 의성군 봉양면 봉호로 14
                        (경북소프트웨어고등학교)
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Main;
