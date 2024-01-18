import styles from "./vote.module.css";

const VoteActions = ({ options, leaveVote }) => {
    const buttonElements = options.map(name => <button onClick={(() => leaveVote(name))} key={name}>{name}</button>);

    return buttonElements;
}

export default VoteActions;