function top10EconomicalBowler2015(deliveries, matches) {

    let totalRunConcededByBowler = {};
    let totalBollsThrowingByBowler = {};

    matches.filter(item => Number(item.season) === 2015).map(match => {
        deliveries.map(deliveri => {
            if (match.id === deliveri.match_id) {
                totalRunConcededByBowler[deliveri.bowler] = (totalRunConcededByBowler[deliveri.bowler] || 0) + Number(deliveri.total_runs);
                totalBollsThrowingByBowler[deliveri.bowler] = (totalBollsThrowingByBowler[deliveri.bowler] || 0) + 1;
            }
        })
    })

    let economicBowler = {};
    for (prop in totalRunConcededByBowler) {
        economicBowler[prop] = (totalRunConcededByBowler[prop] / (totalBollsThrowingByBowler[prop] / 6)).toFixed(2);
    }

    let top10EconomicBowlerValueArray = Object.values(economicBowler).sort((a, b) => Number(a) - Number(b)).slice(0, 10);

    let finalResult = {};

    top10EconomicBowlerValueArray.forEach(iterateValue => {

        for (prop in economicBowler) {
            if (iterateValue === economicBowler[prop]) {
                finalResult[prop] = iterateValue;
            }
        }
    })

    return finalResult;
}

module.exports = top10EconomicalBowler2015;
