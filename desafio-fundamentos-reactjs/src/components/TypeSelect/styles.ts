import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  button {
    height: 64px;
    margin-top: 6px;
    font-size: 17px;

    background: #f5f8fa;
    color: #5c8599;
    border: 1px solid #d3e2e5;
    cursor: pointer;

    &.active {
      background: #edfff6;
      border: 1px solid #a1e9c5;
      color: #37c77f;
    }

    &:first-child {
      border-radius: 20px 0px 0px 20px;
    }

    &:last-child {
      border-radius: 0 20px 20px 0;
      /* border-left: 0; */
    }
  }
`;
