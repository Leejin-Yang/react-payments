import PropTypes from 'prop-types';
import * as Styled from './index.styled';
import { INPUT_SCALE_NAMES } from '../../constant';

const Input = ({ scale, ...rest }) => {
  return <Styled.Container scale={scale} {...rest} />;
};

Input.propTypes = {
  scale: PropTypes.oneOf(INPUT_SCALE_NAMES),
};

export default Input;