import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 16px;
  background: #f5f8fa;
  color: #5c8599;

  border: 1px solid #d3e2e5;
  border-radius: 20px;

  display: flex;
  align-items: center;

  label + & {
    margin-top: 6px;
  }

  ${props =>
    props.isFocused &&
    css`
      border-color: #ff872c;
    `}

  ${props =>
    props.isFilled &&
    css`
      border-color: #5cba5a;
    `}

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #5c8599;
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
