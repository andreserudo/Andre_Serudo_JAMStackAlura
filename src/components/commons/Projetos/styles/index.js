import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../themes/utils/breakpointsMedia';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 6rem;

  ${breakpointsMedia({
    xs: css`
     padding-left: 3rem;
     padding-right: 3rem;
    `,
    md: css`
      align-items: center;
      padding-left: unset;
      padding-right: unset;      
    `,
  })}

`;

Wrapper.Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  ${breakpointsMedia({
    md: css`
      width: 80%;      
    `,
  })}

`;

const SectionTitle = styled.h1`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary.colorTitle};
`;

const ProjetosWrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  ${breakpointsMedia({
    md: css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `,
  })}

`;

export { Wrapper, SectionTitle, ProjetosWrapper };
