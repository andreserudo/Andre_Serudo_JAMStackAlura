import styled from 'styled-components';
import propToStyle from '../../../../themes/utils/propToStyle';

const InputBase = styled.input`  
  ${propToStyle('height')};
  ${propToStyle('width')};
`;

export default InputBase;
