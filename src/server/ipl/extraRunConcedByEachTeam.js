function extraRunConcedByEachTeam(deliveries, matches) {
       let extraRunConced = {};

       matches.filter(obj => Number(obj.season) === 2016).map(match => {
              deliveries.map(deliveri => match.id === deliveri.match_id ? extraRunConced[deliveri.bowling_team] = (extraRunConced[deliveri.bowling_team] || 0) + Number(deliveri.extra_runs) : 0);
       })

       return extraRunConced;
}

module.exports = extraRunConcedByEachTeam;
