/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { CircularProgress } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const LoadingPage = (): EmotionJSX.Element => {
  const styles = {
    root: css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80vh;
      background-color: white;
    `,
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div css={styles.root}>
      <CircularProgress thickness={5} size={isMobile ? 75 : 100} />
    </div>
  );
};
