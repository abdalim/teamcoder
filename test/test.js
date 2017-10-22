'use strict'

var expect = require('chai').expect
var teamcoder = require('../index')

describe('teamcoder', function () {
  context('should return an empty string', function () {
    it('if team name is undefined', function () {
      expect(teamcoder(undefined)).to.equal('')
    })

    it('if team name is an empty string', function () {
      expect(teamcoder('')).to.equal('')
    })

    it('if team name is an object', function () {
      expect(teamcoder({ hello: 'world' })).to.equal('')
    })
  })

  context('given a single team name', function () {
    it('should return first 3 chars', function () {
      expect(teamcoder('LIVERPOOL')).to.equal('LIV')
    })

    it('should return team code in uppercase', function () {
      expect(teamcoder('liverpool')).to.equal('LIV')
    })

    it.skip('should not include non alpha numeric characters')
    it.skip('should return human readable team code')
    it.skip('should pad with human readable chars if team name is shorter than code length')
  })

  context('given a list of team names', function () {
    it('should return list of team codes', function () {
      expect(teamcoder(['liverpool', 'arsenal'])).to.deep.equal(['LIV', 'ARS'])
    })

    it.skip('should return list of team codes without duplicates')
  })
})
