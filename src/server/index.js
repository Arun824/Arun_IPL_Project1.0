const fs = require('fs');
const csv = require('csvtojson');

const MATCHES_FILE_PATH = "./../csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./../csv_data/deliveries.csv";

const matchesPlayedPerYear = require('./ipl/matchesPlayedPerYea.js');
const matchesWonByTeamPerYear = require('./ipl/matchesWonByTeamPerYear.js');
const extraRunConcedByEachTeam = require('./ipl/extraRunConcedByEachTeam.js');
const top10EconomicalBowler2015 = require('./ipl/top10EconomicalBowler2015.js');
const tossWinMatchWin = require('./ipl/tossWinMatchWin.js');
const highestPlayerOfMatchesWinner = require('./ipl/highestPlayerOfMatchesWinner.js');
const strikeRateOfBatsmanPerYear = require('./ipl/strikeRateOfBatsmanPerYear.js');
const playerDismissed = require('./ipl/playerDismissed.js');
const bestEconomiBowlerInSuperOver = require('./ipl/bestEconomiBowlerInSuperOver.js');


function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then(deliveries => {
          
          fs.writeFile("./../public/output/matchesPlayedPerYear.json", JSON.stringify(matchesPlayedPerYear(matches)), "utf8", err => {
            if (err) {
              console.error(err);
            }
          });

          fs.writeFile("./../public/output/matchesWonByTeamPerYear.json", JSON.stringify(matchesWonByTeamPerYear(matches)), "utf8", err => {
            if (err) {
              console.error(err);
            }
          });
           
          fs.writeFile("./../public/output/extraRunConcedByEachTeam.json", JSON.stringify(extraRunConcedByEachTeam(deliveries, matches)), "utf8", err => {
            if (err) {
              console.error(err);
            }
          });
  
          fs.writeFile("./../public/output/top10EconomicalBowler2015.json", JSON.stringify(top10EconomicalBowler2015(deliveries, matches)), "utf8", err => {
            if (err) {
              console.error(err);
            }
          });
          
          fs.writeFile("./../public/output/tossWinMatchWin.json", JSON.stringify(tossWinMatchWin(matches)), "utf8", err => {
            if (err) {
              console.error(err);
            }
          });

          fs.writeFile("./../public/output/highestPlayerOfMatchesWinner.json", JSON.stringify(highestPlayerOfMatchesWinner(matches)), "utf8", err => {
            if (err) {
              console.error(err);
            }
          });

          fs.writeFile("./../public/output/strikeRateOfBatsmanPerYear.json", JSON.stringify(strikeRateOfBatsmanPerYear(deliveries, matches)), "utf8", err => {
            if (err) {
              console.error(err);
            }
          });

          fs.writeFile("./../public/output/playerDismissed.json", JSON.stringify(playerDismissed(deliveries)), "utf8", err => {
            if (err) {
              console.error(err);
            }
          });

           fs.writeFile("./../public/output/bestEconomiBowlerInSuperOver.json", JSON.stringify(bestEconomiBowlerInSuperOver(deliveries)), "utf8", err => {
            if (err) {
              console.error(err);
            }
          });

        })
    })
}

main();

