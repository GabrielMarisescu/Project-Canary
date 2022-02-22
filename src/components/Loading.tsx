import React from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { CircularProgress } from '@material-ui/core';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const LoadingPage = () => {
  const styles = {
    root: css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: white;
    `,
    circularProgress: css`
      @keyframes changeColor {
        12.5% {
          color: #ff0000;
        }
        25% {
          color: #ffa500;
        }
        37.5% {
          color: #ffff00;
        }
        50% {
          color: #7fff00;
        }
        62.5% {
          color: #00ffff;
        }
        75% {
          color: #0000ff;
        }
        87.5% {
          color: #9932cc;
        }
        100% {
          color: #ff1493;
        }
      }
      animation: MuiCircularProgress-keyframes-circular-rotate 1.4s linear
          infinite,
        changeColor 2s linear infinite;
    `,
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div css={styles.root}>
      <CircularProgress
        thickness={5}
        size={isMobile ? 75 : 100}
        disableShrink
        css={styles.circularProgress}
      />
    </div>
  );
};
