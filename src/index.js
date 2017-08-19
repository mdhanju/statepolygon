'use strict';

const allStates = require('../data/allStates');
const statePolygon = require('../data/statePolygon');


/*
 ** Accepts state name
 ** {string|array} state or array of state names
 ** {string|array} return string or array of state abbreviations
 */
const stateNamesToAbbreviations = function(params) {
    var result = [];
    if (!params) {
        return { status: 'invalid entry' };
    } else if (typeof params === 'string') {
        allStates.forEach(function(item1) {
            if (params.toUpperCase() === item1.name.toUpperCase()) {
                result = item1.short;
            }
        })
    } else {
        params.forEach(function(item) {
            allStates.forEach(function(item1) {
                if (item.toUpperCase() === item1.name.toUpperCase()) {
                    result.push(item1.short)
                }
            })
        })

    }
    return result;
};

/*
 ** Accepts state abbreviation
 ** {string|array} state or array of states
 ** {object|array} return object or array of polygons
 */
const statePolygonFromAbb = function(params) {
    var result = [];
    if (!params) {
        return { status: 'invalid entry' };
    } else if (typeof params === 'string') {
        statePolygon.forEach(function(item) {
            if (params.toUpperCase() === item.state.toUpperCase()) {
                result = item;
            }
        })
    } else {

        params.forEach(function(state) {
            statePolygon.forEach(function(item) {
                if (state.toUpperCase() === item.state.toUpperCase()) {
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
 ** {object|array} return object or array of polygons
 */
const statePolygonFromNames = function(params) {

    var result = [];

    if (!params) {
        return { status: 'invalid entry' };
    } else if (typeof params === 'string') {

        var finalState = stateNamesToAbbreviations(params);

        statePolygon.forEach(function(item) {
            if (finalState.toUpperCase() === item.state.toUpperCase()) {
                result = item;
            }
        })
    } else {

        var finalStates = stateNamesToAbbreviations(params);

        finalStates.forEach(function(state) {
            statePolygon.forEach(function(item) {
                if (state.toUpperCase() === item.state.toUpperCase()) {
                    result.push(item)
                }
            })
        })

    }
    return result;
};


module.exports.stateNamesToAbbreviations = stateNamesToAbbreviations;
module.exports.statePolygonFromAbb = statePolygonFromAbb;
module.exports.statePolygonFromNames = statePolygonFromNames;
module.exports.statePolygon = statePolygon;
