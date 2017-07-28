import Switch from '../Switch';
import Slider from '../Slider';
import Select from '../Select';

const types = {
  'switch': Switch,
  'slider': Slider,
  'select': Select
};

const getControlComponent = (type) => {
  return types[type];
}

export default getControlComponent;
