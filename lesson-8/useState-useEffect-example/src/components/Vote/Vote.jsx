import { useState, Component } from "react";

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

/*
class Vote extends Component {
    static voteOptions = ["democrats", "republicants"]

    state = {
        democrats: 0,
        republicants: 0,
    }

    calcTotal() {
        const { democrats, republicants } = this.state;
        const total = democrats + republicants;
        return total;
    }

    calcPercentage(keyName) {
        const total = this.calcTotal();
        if (!total) {
            return 0;
        }
        const value = this.state[keyName];
        return Number(((value / total) * 100).toFixed(2));
    }

    leaveVote = (keyName) => {
        this.setState(prevState => {
            return {
                [keyName]: prevState[keyName] + 1
            }
        })
    }

    render() {
        const total = this.calcTotal();

        const democratePercantage = this.calcPercentage("democrats");
        const republicatntsPercantage = this.calcPercentage("republicants");

        return (
            <div className={styles.wrapper}>
                <Block title="Leave you vote">
                    <VoteActions options={Vote.voteOptions} leaveVote={this.leaveVote} />
                </Block>
                <Block title="Result">
                    <VoteResults total={total} democratePercantage={democratePercantage} republicatntsPercantage={republicatntsPercantage} />
                </Block>
            </div>
        )
    }
}
*/
export default Vote;