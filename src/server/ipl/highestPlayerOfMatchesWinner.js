function highestPlayerOfMatchesWinner(matches) {

    let matchesYear = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
    let result = {};

    matchesYear.forEach(item => {
        result[item] = matches.reduce((accumulator, match) => {
            if (item === Number(match.season)) {
                accumulator[match.player_of_match] = (accumulator[match.player_of_match] || 0) + 1;

            }
            return accumulator;
        }, {})

    })

    let finalResult = {};

    for (prop in result) {

        let max = Math.max(...Object.values(result[prop]))
        let obj = result[prop];

        for (iterate in obj) {
            if (obj[iterate] === max) {
                finalResult[prop] = iterate;
            }
        }
    }
    return finalResult;
}

module.exports = highestPlayerOfMatchesWinner;



