import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

import Header from '../../components/Header';
import Input from '../../components/Input';
import TypeSelect from '../../components/TypeSelect';

import { Container, Title, CreateContainer, InputBlock } from './styles';

interface CreateFormData {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

const Create: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: CreateFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string().required('Título obrigatório'),
          value: Yup.number().positive('Preço deve ser positivo'),
          type: Yup.string()
            .required('Tipo obrigatório')
            .matches(/(income|outcome)/, {
              message: 'Tipo deve ser "income" ou "outcome"',
            }),
          category: Yup.string().required('Categoria obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/transactions', data);

        history.push('/');
      } catch (err) {
        console.log(err);

        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }

      console.log(data);
    },
    [history],
  );

  return (
    <>
      <Header size="small" />
      <Container>
        <Title>Adicione uma transação</Title>
        <CreateContainer>
          <Form
            ref={formRef}
            initialData={{ value: 0 }}
            onSubmit={handleSubmit}
          >
            <InputBlock>
              <label htmlFor="title">Nome</label>
              <Input name="title" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="value">Preço</label>
              <Input type="number" min="0" name="value" step="0.01" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="category">Categoria</label>
              <Input name="category" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="type">Tipo</label>
              <TypeSelect name="type" />
            </InputBlock>

            <button type="submit">Adicionar</button>
          </Form>
        </CreateContainer>
      </Container>
    </>
  );
};

export default Create;
