import "./button.css";

const Button = ({text, type = "submit"})=> {

    return <button className="btn" type={type}>{text}</button>
    // return <button className="btn" type={props.type}>{props.text}</button>
}

export default Button;