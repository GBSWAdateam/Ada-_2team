import "./Main.css";
import Header from "../components/Header";

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
            <div className="Main_mainImg_container">
                <img
                    src="/images/zigtong_mainImg.png"
                    alt="메인 이미지"
                    style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                    }}
                />
                <p className="Main_mainImg_text">
                    우리와 함께라면 어디든 갈 수 있어요!
                </p>
            </div>
            <div className="recentRoot">
                <h2>최근 저장된 경로</h2>
            </div>
            <div className="RecentPathcontainer">
                <div className="RecentPath">
                    <div className="button">
                        <div className="delete-button">
                            <img
                                src="/images/delbut.svg"
                                alt="Delete button"
                                class="image-button"
                            ></img>
                        </div>
                        <img
                            src="/images/Learn morebut.svg"
                            alt="Learn more button"
                            class="learn-more-button"
                        ></img>
                    </div>

                    <div className="text">
                        <p>서울역</p>
                        <img
                            className="station1"
                            src="/images/Double arrow.svg"
                            alt="서울역"
                            style={{ width: "20px", height: "18px" }}
                        />
                        <p>동서울 터미널</p>
                    </div>

                    <div className="details">
                        <p>₩ 100,000 </p>
                        <p className="VerticalBar"> | </p>
                        <p> 1 days</p>
                    </div>
                </div>{" "}
                <div className="RecentPath">
                    <div className="button">
                        <div className="delete-button">
                            <img
                                src="/images/delbut.svg"
                                alt="Delete button"
                                class="image-button"
                            ></img>
                        </div>
                        <img
                            src="/images/Learn morebut.svg"
                            alt="Learn more button"
                            class="learn-more-button"
                        ></img>
                    </div>

                    <div className="text">
                        <p>서울역</p>
                        <img
                            className="station1"
                            src="/images/Double arrow.svg"
                            alt="서울역"
                            style={{ width: "20px", height: "18px" }}
                        />
                        <p>동서울 터미널</p>
                    </div>

                    <div className="details">
                        <p>₩ 100,000 </p>
                        <p className="VerticalBar"> | </p>
                        <p> 1 days</p>
                    </div>
                </div>{" "}
                <div className="RecentPath">
                    <div className="button">
                        <div className="delete-button">
                            <img
                                src="/images/delbut.svg"
                                alt="Delete button"
                                class="image-button"
                            ></img>
                        </div>
                        <img
                            src="/images/Learn morebut.svg"
                            alt="Learn more button"
                            class="learn-more-button"
                        ></img>
                    </div>

                    <div className="text">
                        <p>서울역</p>
                        <img
                            className="station1"
                            src="/images/Double arrow.svg"
                            alt="서울역"
                            style={{ width: "20px", height: "18px" }}
                        />
                        <p>동서울 터미널</p>
                    </div>

                    <div className="details">
                        <p>₩ 100,000 </p>
                        <p className="VerticalBar"> | </p>
                        <p> 1 days</p>
                    </div>
                </div>{" "}
                <div className="RecentPath">
                    <div className="button">
                        <div className="delete-button">
                            <img
                                src="/images/delbut.svg"
                                alt="Delete button"
                                class="image-button"
                            ></img>
                        </div>
                        <img
                            src="/images/Learn morebut.svg"
                            alt="Learn more button"
                            class="learn-more-button"
                        ></img>
                    </div>

                    <div className="text">
                        <p>서울역</p>
                        <img
                            className="station1"
                            src="/images/Double arrow.svg"
                            alt="서울역"
                            style={{ width: "20px", height: "18px" }}
                        />
                        <p>동서울 터미널</p>
                    </div>

                    <div className="details">
                        <p>₩ 100,000 </p>
                        <p className="VerticalBar"> | </p>
                        <p> 1 days</p>
                    </div>
                </div>
            </div>
            <div className="review_container">
                <div className="review">
                    <img
                        src="/images/mainpagereview.png"
                        alt="광안대교, 도시를 품다"
                        style={{ width: "1350px" }}
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default Main;
