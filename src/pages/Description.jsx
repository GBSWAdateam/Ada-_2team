import Header from "../components/Header";
import './Description.css'

const Description = () => {
    return(
        <div className="Description">
            <Header/>
            <div className="Description_mainImg_container">
                <img src="/images/zigtong_mainImg.png" alt="메인 이미지" style={{width:'100%',height:'200px', objectFit:'cover'}} />
                <p className="Description_mainImg_text">우리와 함께라면 어디든 갈 수 있어요!</p>
            </div>
            <div className="Description_detail">
                <h2>ZigTong을 사용하면 이런 효과가 있어요!</h2>
                <div className="section">
                    <img src="/images/zigtong_main_trip.png" alt="" style={{width:'200px'}}/>
                    <div className="Description_section_desc">
                        <h3>더욱 즐거운 여행</h3>
                        <p>ZigTong에 원하는 여행의 키워드를 입력하세요! <br />ex) 키워드로 독일 분위기, 부산을 입력 → 부산 해운대 블루라인파크 제안</p>
                        <p>더이상 여행 계획으로 스트레스 받지마세요 !<br />취향에 딱 맞는 여행 루트를 제공해드릴게요</p>
                    </div>
                </div>
                <div className="section section_end">
                    <img src="/images/zigtong_main_money.png" alt="" style={{width:'200px'}}/>
                    <div className="Description_section_desc">
                        <h3>여행 지출 감소</h3>
                        <p>ZigTong에 희망하는 예산을 입력세요 !<br/>최대한 근접한 값의 여행 경비로 할 수 있는 여행 루트를 제공해드릴게요</p>
                        <p>예상치 못한 지출을 걱정하지마세요 ! 부족한 여행 경비를 걱정하지마세요 !<br/>여행 예산 계산의 번거로움을 없애드릴게요<br/>원하는 가격대로 즐겁고 행복한 여행을 즐겨보세요</p>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Description;