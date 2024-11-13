import './Header.css';
import Button from './Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return(
        <div className="Header">
            <img src="/images/zigtong_logo.png" alt="zigtong 로고" style={{width:'130px'}}/>
            <div className="Header_navi">
                <Link to="/zigtongDesc" className='Header_link'>ZigTong 설명</Link>
                <Link to="/savePath" className='Header_link'>저장한 경로 보기</Link>
                <Button text="trip planning" onclick={()=>{navigate('')}} type={'blueButton'}/>
            </div>
            
        </div>
    )
}

export default Header;