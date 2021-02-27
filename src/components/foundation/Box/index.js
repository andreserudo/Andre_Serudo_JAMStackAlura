import styled from 'styled-components';
import propToStyle from '../../../themes/utils/propToStyle';

const Box = styled.div`
  ${propToStyle('height')}
  ${propToStyle('width')}
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('alignItems')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('position')}
  ${propToStyle('left')}
  ${propToStyle('top')}
`;

export default Box;
