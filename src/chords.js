import { m3, M3, P5, m7, M7, P8, M2 } from './intervals.js';
import transpose from './transpose.js';

const majorIntervals = [M3, P5];
const minorIntervals = [m3, P5];
const major7thIntervals = majorIntervals.concat(M7);
const minor7thIntervals = minorIntervals.concat(m7);
const dominant7thIntervals = majorIntervals.concat(m7);
const major9thIntervals = major7thIntervals.concat(P8 + M2);
const minor9thIntervals = minor7thIntervals.concat(P8 + M2);

const chord = (tonic, intervals) =>
  [tonic].concat(intervals.map(transpose(tonic)));

const makeChord = (intervals) => (tonic) => chord(tonic, intervals);

export const major = makeChord(majorIntervals);
export const minor = makeChord(minorIntervals);
export const major7th = makeChord(major7thIntervals);
export const minor7th = makeChord(minor7thIntervals);
export const dominant7th = makeChord(dominant7thIntervals);
export const major9th = makeChord(major9thIntervals);
export const minor9th = makeChord(minor9thIntervals);
