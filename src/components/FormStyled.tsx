import { styled } from 'styled-components';

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 360px;

    border-radius: 12px;
    background-color: #fafafa;
    padding: 24px 12px;
    margin-top: 60px;

    button {
        padding: 12px 8px;
        background-color: #1d439c;
        color: #fafafa;
        border: none;
        border-radius: 4px;
        min-width: 50%;
        display: block;
    }
`;
