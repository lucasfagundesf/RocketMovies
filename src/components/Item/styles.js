import styled from 'styled-components';

export const Container =styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_300};
    color: ${({ theme }) => theme.COLORS.GRAY};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY}` : "none"};

    margin-bottom: .8rem;
    border-radius: 10px;
    padding-right: 1.6rem;

    > button {
        border: none;
        background: none;


        svg {
            width: 2rem;
            height: 2rem;
        }
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.PINK};
        
    }
    .button-add {
        color: ${({ theme }) => theme.COLORS.PINK};
        
    }
    > input {
        height: 5.6rem;
        width: 100%;
        padding: 1.2rem;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;

        border: none; 

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;