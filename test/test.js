'use strict'

var expect = require('chai').expect
var teamcoder = require('../index')

describe('teamcoder', function () {
  context('given a single team name', function () {
    it('should return first 3 chars', function () {
      expect(teamcoder('LIVERPOOL')).to.equal('LIV')
    })

    it('should return team code in uppercase', function () {
      expect(teamcoder('liverpool')).to.equal('LIV')
    })

    it.skip('should return human readable team code')
    it.skip('should pad with human readable chars if team name is shorter than code length')
  })

  context.skip('given a list of team names', function () {
    it('should return list of team codes without duplicates')
  })
})
