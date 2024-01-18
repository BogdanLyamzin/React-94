import styles from "./vote.module.css";

const VoteResults = ({ total, democratePercantage, republicatntsPercantage }) => {
    return (
        <>
            <p>Total:  {total}</p>
            <p>Democrats percent: {democratePercantage}%</p>
            <p>Republicatns percent: {republicatntsPercantage}%</p>
        </>
    )
}

export default VoteResults;