import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 736px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  color: #363f5f;
  text-align: center;
`;

export const CreateContainer = styled.section`
  background: #ffffff;
  border-radius: 5px;
  margin-top: 40px;
  padding: 60px 64px;

  form {
    > button {
      width: 100%;
      padding: 15px 80px;
      margin-top: 54px;

      background: #ff872c;
      color: #fff;

      border-radius: 20px;
      border: 0;
      outline: 0;

      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff872c')};
      }
    }
  }
`;

export const InputBlock = styled.div`
  & + div {
    margin-top: 30px;
  }

  label {
    font-weight: 500;
    font-size: 15px;
    color: #8fa7b3;
  }
`;
