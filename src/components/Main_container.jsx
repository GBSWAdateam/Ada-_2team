import "./Main_container.css";

const Maincontainer = () => {
    return (
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
    );
};

export default Maincontainer;
