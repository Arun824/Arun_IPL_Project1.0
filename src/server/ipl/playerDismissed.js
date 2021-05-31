function playerDismissed(deliveries) {
    let finalResult = {};

    let playerDismissedData = deliveries.filter(item => item.player_dismissed !== '')
    playerDismissedData.forEach(itereate => {
        let bowlerName = {};
        playerDismissedData.map(deliveri => {
            if (itereate.batsman === deliveri.player_dismissed) {
                bowlerName[deliveri.bowler] = (bowlerName[deliveri.bowler] || 0) + 1;
            }
        })
        finalResult[itereate.batsman] = bowlerName;
    })

    return finalResult;
}

module.exports = playerDismissed;

