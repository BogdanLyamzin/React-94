import { useState } from "react";

import Block from "./Block/Block";
import VoteActions from "./VoteActions";
import VoteResults from "./VoteResults";

import styles from "./vote.module.css";

const voteOptions = ["democrats", "republicants"];

const Vote = ()=> {
    const [votes, setVotes] = useState({
        democrats: 0,
        republicants: 0,
    });

    const calcTotal = () => {
        const { democrats, republicants } = votes;
        const total = democrats + republicants;
        return total;
    }

    const calcPercentage = (keyName) => {
        const total = calcTotal();
        if (!total) {
            return 0;
        }
        const value = votes[keyName];
        return Number(((value / total) * 100).toFixed(2));
    }

    const leaveVote = (keyName) => {
        setVotes(prevVotes => ({
            ...prevVotes,
            [keyName]: prevVotes[keyName] + 1
        }))
    }

    const total = calcTotal();

    const democratePercantage = calcPercentage("democrats");
    const republicatntsPercantage = calcPercentage("republicants");

    return (
        <div className={styles.wrapper}>
            <Block title="Leave you vote">
                <VoteActions options={voteOptions} leaveVote={leaveVote} />
            </Block>
            <Block title="Result">
                <VoteResults total={total} democratePercantage={democratePercantage} republicatntsPercantage={republicatntsPercantage} />
            </Block>
        </div>
    )
}

export default Vote;