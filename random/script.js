document.addEventListener("DOMContentLoaded", () => {
    const size = 3; // 3x3 grid
    const puzzleContainer = document.getElementById("puzzle-container");
    const scorecard = document.getElementById("scorecard");
    let turns = 0;
    let tiles = [...Array(size * size).keys()].map(n => n + 1);
    tiles[size * size - 1] = 0;  // Empty space
    let gameHistory = JSON.parse(localStorage.getItem('gameHistory')) || [];
    generateSolvablePuzzle();
    renderPuzzle(tiles);

    function renderPuzzle(tiles) {
        puzzleContainer.innerHTML = '';
        tiles.forEach((tile, index) => {
            const tileElement = document.createElement("div");
            tileElement.className = tile === 0 ? "tile empty" : "tile";
            tileElement.textContent = tile !== 0 ? tile : '';
            tileElement.addEventListener("click", () => moveTile(index));
            puzzleContainer.appendChild(tileElement);
        });
    }

    function moveTile(index) {
        const emptyIndex = tiles.indexOf(0);
        const validMoves = [index - 1, index + 1, index - size, index + size];
        if (validMoves.includes(emptyIndex) && isValidMove(index, emptyIndex)) {
            [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
            turns++;
            renderPuzzle(tiles);
            if (isSolved()) {
                displayMessage();
            }
        }
    }

    function isValidMove(index, emptyIndex) {
        if (Math.abs(index - emptyIndex) === 1) {
            return Math.floor(index / size) === Math.floor(emptyIndex / size);
        }
        return Math.abs(index - emptyIndex) === size;
    }

    function generateSolvablePuzzle() {
        do {
            shuffle(tiles);
        } while (!isSolvable() || isSolved());
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function isSolvable() {
        let inversions = 0;
        for (let i = 0; i < tiles.length - 1; i++) {
            for (let j = i + 1; j < tiles.length; j++) {
                if (tiles[i] && tiles[j] && tiles[i] > tiles[j]) inversions++;
            }
        }
        return inversions % 2 === 0;
    }

    function isSolved() {
        for (let i = 0; i < tiles.length - 1; i++) {
            if (tiles[i] !== i + 1) return false;
        }
        return true;
    }

    function displayMessage() {
        let score = calculateScore(turns);
        let message = getMessageForScore(score);

        // Save game result
        gameHistory.push({ turns, score, date: new Date().toISOString() });
        localStorage.setItem('gameHistory', JSON.stringify(gameHistory));

        let report = generateReport(gameHistory);

        document.getElementById("game-result").innerHTML = `
            <p>${message}</p>
            <p>Turns Taken: ${turns}</p>
            <p>Score: ${score}</p>
        `;

        document.getElementById("report-content").innerHTML = report;

        scorecard.classList.remove('hidden');

        document.getElementById("restart-btn").addEventListener("click", restartGame);
    }

    function calculateScore(turns) {
        if (turns < 50) return 100;
        if (turns <= 75) return 75;
        return 50;
    }

    function getMessageForScore(score) {
        if (score === 100) return "Amazing! You've completed the puzzle with a top score!";
        if (score === 75) return "Great job! Keep practicing to improve your score!";
        return "You finished the puzzle! Practice more to improve!";
    }

    function generateReport(history) {
        if (history.length === 0) return "<p>No previous games recorded.</p>";

        let totalGames = history.length;
        let totalScore = history.reduce((sum, game) => sum + game.score, 0);
        let averageScore = totalScore / totalGames;
        let bestGame = history.reduce((best, game) => game.score > best.score ? game : best);
        let worstGame = history.reduce((worst, game) => game.score < worst.score ? game : worst);

        let recentTrend = history.slice(-5).map(game => game.score);
        let trendDescription = analyzeTrend(recentTrend);

        return `
            <p>Total Games Played: ${totalGames}</p>
            <p>Average Score: ${averageScore.toFixed(2)}</p>
            <p>Best Game: ${bestGame.score} points (${bestGame.turns} turns) on ${new Date(bestGame.date).toLocaleDateString()}</p>
            <p>Game to Improve: ${worstGame.score} points (${worstGame.turns} turns) on ${new Date(worstGame.date).toLocaleDateString()}</p>
            <p>Recent Trend: ${trendDescription}</p>
        `;
    }

    function analyzeTrend(scores) {
        if (scores.length < 2) return "Not enough data for trend analysis.";

        let increasing = true;
        let decreasing = true;

        for (let i = 1; i < scores.length; i++) {
            if (scores[i] <= scores[i-1]) increasing = false;
            if (scores[i] >= scores[i-1]) decreasing = false;
        }

        if (increasing) return "Your scores are consistently improving!";
        if (decreasing) return "Your scores have been declining. Time to practice more!";
        return "Your scores have been fluctuating. Keep practicing for consistency!";
    }

    function restartGame() {
        turns = 0;
        generateSolvablePuzzle();
        renderPuzzle(tiles);
        scorecard.classList.add('hidden');
    }
});