module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const turnsCount = 2 ** disksNumber - 1;
    const secondsCount = turnsCount / (turnsSpeed / 3600);

    return {turns: turnsCount, seconds: secondsCount};
}