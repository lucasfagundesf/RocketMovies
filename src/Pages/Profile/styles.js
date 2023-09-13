import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > header {
        width: 100%;
        height: 14.4rem;

        background: ${({ theme }) => theme.COLORS.PINKT};

        display: flex;
        align-items: center;

        padding: 0 12.4rem;

        a {
            color: ${({ theme }) => theme.COLORS.PINK};
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: .8rem;
            font-size: 1.6rem;

            svg {
            color: ${({ theme }) => theme.COLORS.PINK};
            width: 2.4rem;
            height: 2.4rem;
            }
        }
        
    }
`;

export const Form = styled.form`
    max-width: 34rem;
    margin: -9.4rem auto 0 ;

    > div:nth-child(4) {
        margin-top: 2.4rem;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: 0 auto 3.2rem;
    width: 18.6rem;
    height: 18.6rem;

    > img {
        width: 18.6rem;
        height: 18.6rem;
        border-radius: 50%;
    }
    > label {
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 50%;
        color: ${({ theme }) => theme.COLORS.BLACK};
        background-color: ${({ theme }) => theme.COLORS.PINK};
        
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 2rem;
            height: 2rem;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }
    }
        
`;