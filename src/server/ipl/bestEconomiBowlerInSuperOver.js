function bestEconomiBowlerInSuperOver(deliveries) {

    let totalRunConcededByBowler = {};
    let totalBallThrowingByBowler = {};

    deliveries.filter(item => Number(item.is_super_over) !== 0).map(deliveri => {

        totalRunConcededByBowler[deliveri.bowler] = (totalRunConcededByBowler[deliveri.bowler] || 0) + Number(deliveri.total_runs);
        totalBallThrowingByBowler[deliveri.bowler] = (totalBallThrowingByBowler[deliveri.bowler] || 0) + 1;
    })

    let economiRate = {};

    for (prop in totalRunConcededByBowler) {
        economiRate[prop] = (totalRunConcededByBowler[prop] / (totalBallThrowingByBowler[prop] / 6)).toFixed(2);
    }


    let minValueOfEconomiRate = Math.min(...Object.values(economiRate));

    let finalResult = {};

    for (prop in economiRate) {
        if (minValueOfEconomiRate === Number(economiRate[prop])) {
            finalResult[prop] = minValueOfEconomiRate;
        }
    }

    return finalResult;

}

module.exports = bestEconomiBowlerInSuperOver;