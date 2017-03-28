'use strict';
//an obj of adjectives that can be converted to superlative + comparative, via the lexicon data
const data = require('../../../../lexicon/data');

const convertables = {};
data.superlatives = data.superlatives || [];
data.superlatives.forEach((a) => {
  convertables[a] = true;
});
data.verbConverts = data.verbConverts || [];
data.verbConverts.forEach((a) => {
  convertables[a] = true;
});
module.exports = convertables;
