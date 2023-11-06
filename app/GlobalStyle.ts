'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* Colors */
    --colors-main--lightest-3:     #f2ffec;
    --colors-main--lightest-2:     #cdf7ca;
    --colors-main--lightest:       #99ef9c;
    --colors-main--lighten:        #5fd16f;
    --colors-main--light:          #34a34f;
    --colors-main:                 #0a6629;
    --colors-main--dark:           #07572a;
    --colors-main--darken:         #054929;
    --colors-main--darkest:        #033b26;
    --colors-main--very-darkest:   #013024;

    --colors-gray-1:               #252728;
    --colors-gray-2:               #484a4d;
    --colors-gray-3:               #6d7073;
    --colors-gray-4:               #87898c;
    --colors-gray-5:               #bec1c4;
    --colors-gray-6:               #e1e3e6;
    --colors-gray-7:               #f5f6f7;

    --colors-success--light:       #e6ffd9;
    --colors-success:              #30be30;
    --colors-success--dark:        #095b25;
    
    --colors-warning--lightest:    #fefae5;
    --colors-warning--light:       #fef5cc;
    --colors-warning:              #f2ae04;
    --colors-warning--dark:        #744500;
    
    --colors-error--light:         #fde7d3;
    --colors-error:                #db4827;
    --colors-error--dark:          #690713;
  }
  
  html {
    box-sizing: border-box;
    height: 100%;
  }

  html *,
  html ::after,
  html ::before {
    box-sizing: inherit;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 320px;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 1.5;
    color: var(--colors-gray-1);
    overflow-wrap: break-word;
    background-color: #fff;
  }

  main {
    flex-grow: 1;
    padding-top: 32px;
    padding-bottom: 18px;
  }
  
  a {
    text-decoration: none;
    transition: all .15s ease-out;
    text-decoration-skip-ink: none;

    &[href] {
      cursor: pointer;
    }
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    border-style: none;
  }

  svg {
    display: block;
  }

  picture {
    display: block;
  }

  input,
  select,
  textarea {
    display: block;
    width: 100%;
    padding: 16.5px 16px;
    font-family: inherit;
    font-size: 16px;
    line-height: 1.25;
    color: var(--colors-gray-1);
    background-color: #fff;
    border: 1.5px solid var(--colors-gray-5);
    border-radius: 8px;
    caret-color: var(--colors-main--light);
    transition: border-color .15s ease-in-out,
                box-shadow .15s ease-in-out;

    &:hover {
      border-color: var(--colors-gray-1);

      &::placeholder {
        color: var(--colors-gray-1);
      }
    }

    &:focus {
      border-color: var(--colors-main--light);
      outline: none;
    }

    &[disabled] {
      color: var(--colors-gray-6);
      border-color: var(--colors-gray-6);

      &::placeholder {
        color: var(--colors-gray-6);
      }
    }
  }

  ::placeholder {
    color: var(--colors-gray-4);
  }

  /* Remove shadow from fields for WebKit browsers */
  input:not([type=checkbox]):not([type=radio]),
  textarea,
  select {
    appearance: none;

    &[disabled] {
      cursor: not-allowed;
    }
  }

  select {
    cursor: pointer;
  }

  textarea {
    height: 160px;
    resize: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    transition: all .15s ease-out;

    &[disabled] {
      cursor: not-allowed;
    }
  }

  .visually-hidden:not(:focus):not(:active),
  input[type="checkbox"].visually-hidden,
  input[type="radio"].visually-hidden {
    position: absolute;
    left: -99999px;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;

export default GlobalStyle;
