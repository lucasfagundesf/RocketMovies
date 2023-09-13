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
        overflow-y: auto;

        &::-webkit-scrollbar{
            width: 8px;   
        }
        &::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.COLORS.PINK};
            border-radius: 8px;
        }
    }
    .tags {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;
export const Form = styled.form`
    
    > header {
            a {
                
                font-size: 1.6rem;
                color: ${({ theme }) => theme.COLORS.PINK};

                svg {
                    width: 1.6rem;
                    height: 1.6rem;
                }
            }
            h1 {
                margin-top: 2.4rem;
                margin-bottom: 4rem;
                font-size: 3.6rem;
            }
    }
    h2 {
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.GRAY};
        margin-bottom: 2.4rem;
    }
    .title {
        display: flex;
        gap: 4rem;
    }
    .tags {
        background-color: ${({ theme })=> theme.COLORS.BLACK};
        padding: 1.6rem;
        gap: 2.4rem;
        justify-content: left;
        border-radius: .8rem;
    }
    .btn {
        margin-top: 2rem;
        display: flex;
        gap: 4rem;
    }
    .excluir {
        background-color: ${({ theme }) => theme.COLORS.BLACK};
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    
    
`;