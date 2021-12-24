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

A function which accepts an array of notes

### `normalizeNote`

### `pitchClasses`

### `sampleNote`

### `sortNotes`

### `toss`

### `transpose`
