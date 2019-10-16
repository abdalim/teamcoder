'use strict'

var expect = require('chai').expect
var teamcoder = require('../src')

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
      expect(teamcoder('liverpool')).to.equal('liv')
    })

    it('should return team code in lowercase', function () {
      expect(teamcoder('LIVERPOOL')).to.equal('liv')
      expect(teamcoder('liverpool')).to.equal('liv')
      expect(teamcoder('lIvERPoOL')).to.equal('liv')
    })

    it('should return acronym for multiple words team name', function () {
      expect(teamcoder('west ham united')).to.equal('whu')
      expect(teamcoder('zenit st petersburg')).to.equal('zsp')
      expect(teamcoder('red bull salzburg')).to.equal('rbs')
      expect(teamcoder('paris saint germain')).to.equal('psg')
    })

    it.skip('should not include non alpha numeric characters')
    it.skip('should return human readable team code')
    it.skip('should pad with human readable chars if team name is shorter than code length')
  })

  context('given a list of team names', function () {
    it('should return list of team codes', function () {
      expect(teamcoder(['liverpool', 'arsenal'])).to.deep.equal(['liv', 'ars'])
      expect(teamcoder(['LIVERPOOL', 'ARSENAL'])).to.deep.equal(['liv', 'ars'])
    })

    it.skip('should return list of team codes without duplicates', function () {
      expect(teamcoder([
        'liverpool',
        'manchester united',
        'manchester city'
      ])).to.deep.equal([
        'liv',
        'mun',
        'mci'
      ])
    })
  })
})
