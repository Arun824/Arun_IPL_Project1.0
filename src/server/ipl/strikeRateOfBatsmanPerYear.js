
function strikeRateOfBatsmanPerYear(deliveries, matches) {

    let matchesYear = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
    let totalRunScoredByBatsmanInYear = {};
    let totalBollsFacedByBatsmanInYear = {};

    matchesYear.forEach(year => {

        let totalRunScoredByBatsman = {};
        let totalBollsFacedByBatsman = {}

        matches.filter(item => Number(item.season) === year).map(match => {

            deliveries.map(deliveri => {
                if (match.id === deliveri.match_id) {
                    totalRunScoredByBatsman[deliveri.batsman] = (totalRunScoredByBatsman[deliveri.batsman] || 0) + Number(deliveri.batsman_runs);
                    totalBollsFacedByBatsman[deliveri.batsman] = (totalBollsFacedByBatsman[deliveri.batsman] || 0) + 1;
                }
            })
        })
        totalRunScoredByBatsmanInYear[year] = totalRunScoredByBatsman;
        totalBollsFacedByBatsmanInYear[year] = totalBollsFacedByBatsman;
    })



    let finalResult = {};
    for (year in totalRunScoredByBatsmanInYear) {
        let strikeRecord = {}
        for (playerName in totalRunScoredByBatsmanInYear[year]) {
            strikeRecord[playerName] = ((totalRunScoredByBatsmanInYear[year][playerName] / totalBollsFacedByBatsmanInYear[year][playerName]) * 100).toFixed(2);
        }
        finalResult[year] = strikeRecord;

    }

    return finalResult;
}

module.exports = strikeRateOfBatsmanPerYear;