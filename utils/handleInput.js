import { regPatterns } from '../constants';

const handleInput = (value, setFunction) => {
  setFunction(value.replace(regPatterns.name, ''));
};

export default handleInput;
