import { Component } from "react";

import styles from "./toggle-button.module.css";

class ToggleButton extends Component {
    // constructor(props) {
    //     super(props);
    //     this.onClick = this.handleClick.bind(this);
    // }

    static defaultProps = {
        type: "submit"
    }

    state = {
        active: false,
    }

    handleClick = () => {
        this.setState(prevState => {
            return {
                active: !prevState.active
            }
        })
    }

    render() {
        const {text, type} = this.props;
        const {active} = this.state;

        const fullClassName = active ? `${styles.btn} ${styles.active}` : styles.btn;

        return <button onClick={this.handleClick} className={fullClassName} type={type}>{text}</button>
    }
}

export default ToggleButton;