import  styled  from "styled-components";
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;
export const Form = styled.form`
    padding: 13.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

    

    > h1 {
        font-size: 4.8rem;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > p {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY};
    }

    > h2 {
        font-size: 2.4rem;
        margin: 4.8rem 0;
    }

    > a {
        font-size: 1.6rem;
        margin-top: 4.2rem;
        color: ${({ theme }) => theme.COLORS.PINK};
        text-align: center;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;