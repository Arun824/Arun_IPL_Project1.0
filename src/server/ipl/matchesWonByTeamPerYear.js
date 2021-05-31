function matchesWonByTeamPerYear(matches) {

    let matchesYear = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
    let finalResult = {};
    matchesYear.forEach(iterateYear => {

        finalResult[iterateYear] = matches.reduce((accumulator, match) => {
              if(iterateYear === Number(match.season)) {
                  accumulator[match.winner] = (accumulator[match.winner] || 0) + 1;
              }
              return accumulator;
        }, {})
    })

    return finalResult;
}

module.exports = matchesWonByTeamPerYear;
