import { styled } from 'styled-components';

export const FormInputGroup = styled.div`
    label {
        display: block;
        font-weight: bold;
    }

    input,
    select {
        border: 1px solid #ddd;
        padding: 8px 12px;
        border-radius: 4px;
        margin-top: 4px;
        width: 100%;
        box-sizing: border-box;
    }

    margin-bottom: 24px;
    width: 80%;
`;
