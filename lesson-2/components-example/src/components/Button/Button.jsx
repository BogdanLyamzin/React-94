import "./button.css";

const Button = ({text, type = "submit"})=> {
    return <button className="btn" type={type}>{text}</button>
}

export default Button;