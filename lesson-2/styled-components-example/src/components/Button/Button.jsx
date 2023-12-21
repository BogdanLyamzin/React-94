import styled from "@emotion/styled";

const ButtonWrapper = styled.button`
    background-color: ${({active})=> active ? "red" : "#fff"};
    cursor: pointer;
    border: 1px solid ${({active})=> active ? "red" : "#000"};
    border-radius: 5px;
    padding: 10px 15px;
    color: ${({active})=> active ? "#fff" : "#000"};
`

const Button = ({text, type = "submit", active = false})=> {
    return <ButtonWrapper active={active} type={type}>{text}</ButtonWrapper>
}

export default Button;