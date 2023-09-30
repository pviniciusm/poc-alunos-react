import React from 'react';
import DefaultLayout from '../config/layout/DefaultLayout';
import { styled } from 'styled-components';
import { FormStyled } from '../components/FormStyled';
import { FormInputGroup } from '../components/FormInputGroup';

const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Contact: React.FC = () => {
    const handleSubmit = (event: any) => {
        event.preventDefault();

        const aluno = {
            email: event.target.email.value,
            password: event.target.password.value
        };

        console.log(aluno);
    };

    return (
        <DefaultLayout>
            <LoginWrapper>
                <h1>Faça o seu login:</h1>
                <FormStyled onSubmit={handleSubmit}>
                    <FormInputGroup>
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" required />
                    </FormInputGroup>
                    <FormInputGroup>
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" required />
                    </FormInputGroup>

                    <button type="submit">Login</button>
                </FormStyled>
            </LoginWrapper>
        </DefaultLayout>
    );
};

export default Contact;
