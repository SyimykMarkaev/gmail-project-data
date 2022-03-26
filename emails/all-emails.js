// const primary = require('./primary');
// const social = require('./social');
// const promotions = require('./promotions');
import { primary } from './primary';
import { promotions } from './promotions';
import { social } from './social';

const allInbox = [...primary, ...social, ...promotions];

module.exports = { primary, social, promotions, allInbox };
