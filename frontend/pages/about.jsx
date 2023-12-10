import styles from '../styles/About.module.css'

export default function About() {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>About  Tic-Tac-Toe</h1>

                <p className={`${styles.mb54} ${styles.content}`}>Tic-Tac-Toe is a simple and popular strategy board game that is typically played by two players. The game board consists of a 3x3
                    grid,
                    and players take turns placing their respective markers on empty squares with the goal of forming a line horizontally, vertically,
                    or
                    diagonally.</p>

                <h2 className={styles.title}>Game Rules</h2>

                <ol className={`${styles.rules} ${styles.mb54}`}>
                    <li>The Tic-Tac-Toe board is a 3x3 grid with a total of 9 positions for players to place their markers.</li>
                    <li>Player 1 uses "X" as their marker, and Player 2 uses "O".</li>
                    <li>The game starts with an empty board, and Player 1 goes first.</li>
                    <li>Each player takes turns selecting an empty square and placing their marker on that position.</li>
                    <li>Players try to form a line horizontally, vertically, or diagonally to win the game.</li>
                    <li>If the board becomes full and no player has formed a line, the game ends in a draw.</li>
                    <li>If any player successfully forms a line, they win the game.</li>
                    <li>The game can be restarted once it is finished.</li>
                </ol>

                <p className={styles.content}>That concludes the introduction to Tic-Tac-Toe. Have fun playing this exciting game!</p>
            </div>
        </>
    )
}
