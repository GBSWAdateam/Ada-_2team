import './Button.css'

const Button = ({text, type, onclick}) => {
    const btnStyle = ["blueButton", "whiteButton"].includes(type) ? type : '';
    return(
        <button className={["Button",`Button_${btnStyle}`].join(" ")} onClick={onclick}>{text}</button>
    )
}

export default Button;