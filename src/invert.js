import transpose from './transpose.js';

const invert = (notes, inversion = 0) => {
  const inverted = notes.slice(0);
  let addFn = Array.prototype.push;
  let removeFn = Array.prototype.shift;
  let semitones = 12;
  if (inversion < 0) {
    addFn = Array.prototype.unshift;
    removeFn = Array.prototype.pop;
    semitones = -semitones;
  }
  for (let i = 0; i < Math.abs(inversion); i += 1) {
    addFn.call(inverted, transpose(removeFn.call(inverted), semitones));
  }
  return inverted;
};

export default invert;
