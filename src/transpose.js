import normalizeNote from './normalize-note.js';
import transposePitchClass from './transpose-pitch-class.js';
import transposeNote from './transpose-note.js';
import getOctave from './get-octave.js';
import getPitchClass from './get-pitch-class.js';
import swap2 from './utilities/swap-2.js';
import curry2 from './utilities/curry-2.js';

const _transpose = (note, steps) => {
  const normalizedNote = normalizeNote(note);
  const octave = getOctave(note);
  if (octave === null) {
    const result = transposePitchClass(normalizedNote, steps);
    return result;
  }
  const pitchClass = getPitchClass(normalizedNote);
  return transposeNote(pitchClass, octave, steps);
};

const transpose = (arg1, arg2) => {
  const getResult = typeof arg1 === 'string' ? _transpose : swap2(_transpose);
  return typeof arg2 === 'undefined'
    ? curry2(getResult)(arg1)
    : getResult(arg1, arg2);
};

export default transpose;
