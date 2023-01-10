import { COLORS } from './colors';
import { css } from '@emotion/react';
import { reset } from './reset';

export const global = css`
  ${reset}
  html,
  body {
    background-color: ${COLORS.sub_yellow};
    margin: 0 auto;
    font-family: Pretendard;
  }
`;
