import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    height: 11.6rem;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6.4rem;
    padding: 0 12.3rem;

    > h1 {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Profile = styled(Link)`
    
    display: flex;
    align-items: center;

    
    > img {
        width: 6.4;
        height: 6.4rem;
        border-radius: 50%;
    }

    > div {
        width: 11.5rem;
        display: flex;
        flex-direction: column;
        
        margin-right: .9rem;
        

        a {
            text-align: end;
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.GRAY};
        }

        strong {
            text-align: end;
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`