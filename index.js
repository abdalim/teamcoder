'use strict'

const START_INDEX = 0
const NUM_OF_CHARS = 3

function isBadTeamName (teamName) {
  return !teamName || typeof teamName === 'object'
}

function generateTeamCode (teamName) {
  if (isBadTeamName(teamName)) return ''
  return teamName.toString().substring(START_INDEX, NUM_OF_CHARS).toUpperCase()
}

/**
 * Generates a team code out of a team name
 * @param {string || string[]} nameInput : a team name or list of team names
 * @return {string} generated team code
 */
module.exports = function (nameInput) {
  if (Array.isArray(nameInput)) {
    return nameInput.map(function (name) {
      return generateTeamCode(name)
    })
  }

  return generateTeamCode(nameInput)
}
