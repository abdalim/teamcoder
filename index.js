'use strict'

const START_INDEX = 0
const NUM_OF_CHARS = 3

function isBadTeamName (teamName) {
  return !teamName || typeof teamName === 'object'
}

/**
 * Generates a team code out of a team name
 * @param {string} teamName : a team's name
 * @return {string} generated team code
 */
module.exports = function (teamName) {
  if (isBadTeamName(teamName)) return ''
  return teamName.toString().substring(START_INDEX, NUM_OF_CHARS).toUpperCase()
}
