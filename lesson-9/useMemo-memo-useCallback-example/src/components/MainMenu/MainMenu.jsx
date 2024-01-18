import { useState, Component } from "react";

import styles from "./main-menu.module.css";

const MainMenu = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (e, index)=> {
        e.preventDefault();
        setActiveIndex(index);
    }
    
    const elements = items.map(({ id, text, href }, index) => (
        <li key={id}>
            <a onClick={(e)=> handleClick(e, index)} className={index === activeIndex ? `${styles.link} ${styles.active}` : styles.link} href={href}>{text}</a>
        </li>
    ));

    return (
        <ul className={styles.menu}>
            {elements}
        </ul>
    )
}

/*
class MainMenu extends Component {

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
*/
export default MainMenu;