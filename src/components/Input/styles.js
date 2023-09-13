import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
    color: ${({ theme }) => theme.COLORS.GRAY};

    margin-bottom: .8rem;
    border-radius: 1rem;

    > input {
        height: 5.6rem;
        width: 100%;
        padding: 1.8rem;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY};
        }
    }
    > svg {
        margin-left: 1.6rem;
    }
`;