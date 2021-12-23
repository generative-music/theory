import transpose from './transpose.js';

const chord = (tonic, intervals) =>
  [tonic].concat(intervals.map(transpose(tonic)));

export default chord;
