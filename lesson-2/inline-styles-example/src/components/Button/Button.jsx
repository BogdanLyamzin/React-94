const btnStyles = {
    backgroundColor: "#fff", 
    cursor: "pointer", 
    border: "1px solid", 
    borderRadius: 5, 
    padding: "10px 15px",
};

const Button = ({text, type = "submit"})=> {
    return <button style={btnStyles} type={type}>{text}</button>
}

export default Button;