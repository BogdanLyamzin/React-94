import { Component } from "react";

import styles from "./main-menu.module.css";

/*
class Component {
    constructor(props) {
        this.props = {...props};
    }
}
*/

class MainMenu extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         activeIndex: 0
    //     }
    // }

    state = {
        activeIndex: 0,
    }

    handleClick(idx) {
        this.setState({
            activeIndex: idx
        })
    }

    render() {
        const {items} = this.props;
        const {activeIndex} = this.state;

        const elements = items.map(({ id, text, href }, index) => (
            <li key={id}>
                <a onClick={()=> this.handleClick(index)} className={index === activeIndex ? `${styles.link} ${styles.active}` : styles.link} href={href}>{text}</a>
            </li>
        ));

        return (
            <ul className={styles.menu}>
                {elements}
            </ul>
        )
    }
}

export default MainMenu;