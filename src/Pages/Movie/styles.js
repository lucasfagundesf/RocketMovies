import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas: 
    "header"
    "content"
    ;

    > main {
        margin: 2rem 10.6rem ;
        padding-right: 3rem;
        grid-area: content;
        overflow-y: scroll;

        &::-webkit-scrollbar {
            width: .8rem;
            height: 9rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.COLORS.PINK};
            border-radius: .8rem;
        }
        
       
    }
`;
export const Content = styled.div`
    width: 100%;
    

    > header {
        margin-bottom: 2.4rem ;
        
        a {
            display: flex;
            align-items: center;
            
            font-size: 1.6rem;
            color: ${({ theme }) => theme.COLORS.PINK};
            svg {
                width: 1.6rem;
                height: 1.6rem;
            }
        }
        
    }

    > h1 {
        display: inline;
        font-size: 3.6rem;
        margin-right: 2rem ;
    }
    > span {
       
        svg {
            width: 2rem;
            height: 2rem;
            color: ${({ theme }) => theme.COLORS.PINK};
            fill: ${({ theme }) => theme.COLORS.PINK};
            margin-right: 1rem;
        }
        svg:last-child {
            fill: none;
        }
    }
    .info {
        display: flex;
        align-items: center;
        margin-top: 2.4rem ;

        img {
            width: 1.6rem;
            height: 1.6rem;
            border-radius: 50%
        }

        p {
            display: inline;
            font-size: 1.6rem;
            margin: 0 1rem;
        }
        svg {
            width: 1.6rem;
            height: 1.6rem;
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
    .tagsM {
        margin: 4rem 0;
        font-weight: 400;
    }

    > p {
        font-size: 1.6rem;
        margin-bottom: 2rem;
    }
`;