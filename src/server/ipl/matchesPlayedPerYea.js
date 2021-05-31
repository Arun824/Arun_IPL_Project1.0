function matchesPlayedPerYear(matches) {

    return matches.reduce((map, val) => {
        map[val.season] = (map[val.season] || 0) + 1;
        return map;
    }, {});
}

module.exports = matchesPlayedPerYear;
