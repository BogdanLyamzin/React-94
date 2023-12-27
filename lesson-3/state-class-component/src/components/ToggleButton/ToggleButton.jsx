import { Component } from "react";

import styles from "./toggle-button.module.css";

class ToggleButton extends Component {
    state = {
        active: false,
    }

    handleClick() {
        console.log(this)
        // const {active: prevActive} = this.state;
        // this.setState({
        //     active: !prevActive
        // })
    }

    render() {
        const {text} = this.props;
        const {active} = this.state;
        console.log(this)
        const fullClassName = active ? `${styles.active} ${styles.btn}` : styles.btn;

        return <button onClick={this.handleClick} className={fullClassName} type="submit">{text}</button>
    }
}

export default ToggleButton;