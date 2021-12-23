import normalizeNote from './normalize-note.js';
import getPitchClass from './get-pitch-class.js';
import getOctave from './get-octave.js';
import pitchClassIndiciesByValue from './pitch-class-indicies-by-value.js';

const sortNotes = (notes = []) =>
  notes
    .map(normalizeNote)
    .map((note) => [getPitchClass(note), getOctave(note)])
    .sort((a, b) => {
      const [pcA, octA] = a;
      const [pcB, octB] = b;
      if (octA === octB || octA === null) {
        return pitchClassIndiciesByValue[pcA] - pitchClassIndiciesByValue[pcB];
      }
      return octA - octB;
    })
    .map((parts) => parts.join(''));

export default sortNotes;
