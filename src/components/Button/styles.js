import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BLACK};

    margin-top: 1.6rem;

    height: 5.6rem;
    border: 0;
    padding: 0 16px;
    border-radius: 10px;
    font-weight: 500;
    font-size: 1.6rem;

    &:disabled {
        opacity: 0.5;
    }
`;