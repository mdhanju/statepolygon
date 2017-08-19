# statepolygon

##Only US and canada states are supported.

Methods:
1). stateNamesToAbbreviations - converts state names to abbreviations.
2). statePolygonFromAbb - gets state outline polygon from state abbreviations.
3). statePolygonFromNames - gets state outline polygon from state names.

Note: Input to all these methods can be string or array of string

##Sample Usage

```bash

import { statePolygonFromAbb } from 'statepolygon'

const stateAbb = statepolygon.fromStateAbbreviations(['California', 'new york']);

console.log('reqStatePoly :: ', reqStatePoly); // ['CA', 'NY']

```

```bash

import { statePolygonFromNames } from 'statepolygon'

const reqStatePoly = statePolygonFromNames(['California', 'new york']);

console.log('reqStatePoly :: ', reqStatePoly);

```

```bash

import { statePolygonFromAbb } from 'statepolygon'

const reqStatePoly = statePolygonFromAbb(['California', 'new york']);

console.log('reqStatePoly :: ', reqStatePoly);

```

```bash

import { statePolygon } from 'statepolygon'

const allStatesPolygon = statePolygon();

console.log('reqStatePoly :: ', allStatesPolygon); // Array of all states poygon

```
