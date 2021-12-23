import pitchClasses from './pitch-classes.js';

const pitchClassIndiciesByValue = pitchClasses.reduce(
  (byIndex, pitchClass, index) => {
    byIndex[pitchClass] = index;
    return byIndex;
  },
  {}
);

export default pitchClassIndiciesByValue;
