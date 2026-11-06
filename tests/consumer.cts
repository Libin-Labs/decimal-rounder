import * as api from '@lp-labs/decimal-rounder';
import { roundDecimal } from '@lp-labs/decimal-rounder';
console.log(roundDecimal(1.005, 2));
// @ts-expect-error invalid argument must be rejected by declarations
api.roundDecimal(1, 'two');
