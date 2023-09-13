import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    margin-bottom: 2.4rem;
    padding: 3.2rem;
    background-color: ${({ theme}) => theme.COLORS.PINKT};
    border: none;
    border-radius: 1.6rem;
    text-align: left;

    

    > h1 {
        flex: 1;
        font-weight: 700;
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > .rate {
        color: ${({ theme }) => theme.COLORS.PINK};

        svg {
            fill: ${({ theme }) => theme.COLORS.PINK};
            margin: .8rem .6rem 1.5rem 0;
            width: 1.2rem;
            height: 1.2rem;
        }
        svg:last-child {
            fill: none;
        }
    }

    > p {
        color: ${({ theme }) => theme.COLORS.GRAY};
        font-size: 1.6rem;        
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 2.5rem;
    }
`;