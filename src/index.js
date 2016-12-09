'use strict';

var allStates = require('../data/allStates');


/*
 ** Accepts state abbreviation
 ** {string|array} state or array of states
 **	{object|array} return object or array of polygons
 */
const fromStateAbbreviations = function(params) {
    var result = [];
    if (typeof params === 'string') {
        statePolygon.forEach(function(item) {
            if (stateKey === item.state) {
                result = item;
            }
        })
    } else {

        params.forEach(function(state) {
            statePolygon.forEach(function(item) {
                if (state === item.state) {
                    result.push(item)
                }
            })
        })

    }
    return result;
};


/*
 ** Accepts state names
 ** {string|array} state or array of states
 **	{object|array} return object or array of polygons
 */
const fromStateNames = function(params) {

    var result = [];
    if (typeof params === 'string') {
        var finalState = '';
        allStates.forEach(function(item1) {
            if (finalState === item1.name) {
                finalState = item1.short;
            }
        })

        statePolygon.forEach(function(item) {
            if (finalState === item.state) {
                result = item;
            }
        })
    } else {

        var finalStates = [];
        params.forEach(function(item) {
            allStates.forEach(function(item1) {
                if (item === item1.name) {
                    finalStates.push(item1.short)
                }
            })
        })

        finalStates.forEach(function(state) {
            statePolygon.forEach(function(item) {
                if (state === item.state) {
                    result.push(item)
                }
            })
        })

    }
    return result;
};


module.exports.fromStateAbbreviations = fromStateAbbreviations;
module.exports.fromStateNames = fromStateNames;