# theory

A collection of utilities related loosely related to western music theory.

## Installation

```bash
npm install @generative-music/theory
```

## API Reference

The following top-level exports are available from this package.

### `chords`

An object which contains functions that accept a tonic and return an array of notes which represent a chord of the specified type for the tonic.

The available chord types are:

- `major` (triad)
- `minor` (triad)
- `major7th`
- `minor7th`
- `dominant7th`
- `major9th`
- `minor9th`

```javascript
import { chords } from '@generative-music/theory';

const c5Major = chords.major('C5'); // returns ['C5', 'E5', 'G5']
const b2Minor9th = chords.minor9th('B2'); // returns ['B2', 'D3', 'F#3', 'A3', 'C#4']
```

### `getDistance`

A function which accepts two notes and returns the distance in semitones between those notes.

```javascript
import { getDistance } from '@generative-music/theory';

const distance = getDistance('A#2', 'B3'); // returns 13
```

### `getOctave`

A function which accepts a note in and returns the octave of that note or `null` if an octave could not be ascertained.

```javascript
import { getOctave } from '@generative-music/theory';

const octave = getOctave('C5'); // returns 5
```

### `getPitchClass`

A function which accepts a note and returns the pitch class of that note or `null` if a pitch class could not be ascertained.

```javascript
import { getPitchClass } from '@generative-music/theory';

const pitchClass = getOctave('C5'); // returns 'C'
```

### `intervals`

An object which contains numbers that represent intervals in semitones.

The available intervals are:

| Property Names | Semitones | Description                          |
| -------------- | --------- | ------------------------------------ |
| `P1`, `d2`     | 0         | perfect unision/diminished second    |
| `m2`, `A1`     | 1         | minor second/augmented unision       |
| `M2`,`d3`      | 2         | major second/diminished third        |
| `m3`,`A2`      | 3         | minor third/augmented second/tritone |
| `M3`, `d4`     | 4         | major third/diminished fourth        |
| `P4`,`A3`      | 5         | perfect fourth/augmented third       |
| `d5`,`A4`      | 6         | diminished fifth/augmented fourth    |
| `P5`,`d6`      | 7         | perfect fifth/diminished sixith      |
| `m6`,`A5`      | 8         | minor sixth/augmented fifth          |
| `M6`,`d7`      | 9         | major sixth/diminished seventh       |
| `m7`,`A6`      | 10        | minor seventh/augmented sixth        |
| `M7`,`d8`      | 11        | major seventh/diminished octave      |
| `P8`, `A7`     | 12        | perfect octave/augmented seventh     |

```javascript
import { intervals } from '@generative-music/theory';

const perfectFourthSemitones = intervals.P4; // assigns 5
```

### `invert`

A function which accepts an array of notes and an integer, and returns a new array of notes which represents an inversion of the given array, as specified by the inversion number.

```javascript
import { invert } from '@generative-music/theory';

const firstInversion = invert(['C4', 'E4', 'G4'], 1); // returns ['E4', 'G4', 'C5']
const secondInversion = invert(['C4', 'E4', 'G4'], 2); // returns ['G4', 'C5', 'E5']
const unInversion = invert(firstInversion, -1); // returns ['C4', 'E4', 'G4']
```

### `normalizeNote`

A function which accepts a note and returns the same note with a capital pitch class and minimal accidentals represented with only sharps instead of flats.

```javascript
import { normalizeNote } from '@generative-music/normalize-note';

const note = normalize('a###3'); // returns 'C4'
const otherNote = normalize('Fb'); // returns 'E'
```

### `pitchClasses`

An array of all 12 pitch classes starting with 'C' and using only sharps to represent accidentals.

```javascript
import { pitchClasses } from '@generative-music/theory';

console.log(pitchClasses); // ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
```

### `sampleNote`

A function which accepts an object with a desired note, an array of notes which can be sampled, and an optional pitch shift to apply to the desired note, in semitones. Returns an object with the closest sampled note and the rate to play it at to create the desired note with the pitch shift, if specified.

Pitch shifting is applied _after_ the closest sampled note has been selected, so the result will be the desired note plus the pitch shift. For example, specifying a desired note of 'C4' with no pitch shift will return the closest note to 'C4' and the appropriate playback rate, while specifying a desired note of 'C5' with a pitch shift of -12 will return the closest note to 'C5' and a playback rate with an additional -12 semitone transformation, at which the sampled note will actually sound like a C4 (C5 - 12 semitones = C4).

```javascript
import { sampleNote } from '@generative-music/theory';

const sampledC6 = sampleNote({
  note: 'C6', // the note to play
  sampledNotes: ['C4', 'G4', 'C5'], // a list of notes whose recordings we can play
}); // returns { sampledNote: 'C5', playbackRate: 2 }
// if a recording of a C5 is played at 2x speed, it will sound like a G#5

const pitchShiftedC4 = sampleNote({
  note: 'C4',
  sampledNotes: ['C5', 'G5', 'C6'],
  pitchShift: -12, // shift the result down an additional octave
}); // returns { sampledNote: 'C5', playbackRate: 0.25 }
// if a recording of a C5 is played at 0.25x speed, it will sound like a C4 shifted down an additional octave (C3)
```

### `sortNotes`

A function which accepts an array of notes and returns a new array of the same notes in ascending order.

```javascript
import { sortNotes } from '@generative-music/theory';

const sortedNotes = sortNotes(['C5', 'G4', 'C4', 'C6']); // returns ['C4', 'G4', 'C5', 'C6']
```

### `toss`

A function which accepts an array of pitch classes and an array of octaves, and returns an array of notes which represent the combinations of the specified pitch classes and octaves.

```javascript
import { toss } from '@generative-music/theory';

const notes = toss(['C', 'E', 'G'], [2, 3, 4]); // returns ['C2', 'E2', 'G2', 'C3', 'E3', 'G3', 'C4', 'E4', 'G4']
```

### `transpose`

A function which accepts a note and a transposition in semitones, and returns a new note which represents the given note after the specified transposition.

```javascript
import { transpose } from '@generative-music/theory';

const transposedC5 = transpose('C5', 5); // returns 'F5'
const transposedA = transpose('A', -2); // returns 'G'
```
