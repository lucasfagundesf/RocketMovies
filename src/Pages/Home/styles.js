import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas: 
    "header"
    "content";
    
`;
export const Content = styled.div`
        
    
        overflow-y: auto;
        margin: 0 12.3rem;
        padding-right: 3rem;
        grid-area: content;
            
        &::-webkit-scrollbar {
            width: 8px;
            
            
        }
        &::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.COLORS.PINK};
            border-radius: 8px;
        }

        
            
`;
export const Section = styled(Link)`
    display: flex;
    align-items: center;
    padding: 4rem 0;
    justify-content: space-between;
    

    > h1 {       
        font-size: 3.2rem;
                            
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
        

    > button {
        
        height: 4.8rem;
        padding: 1.3rem  3.2rem;
        border: none;
        border-radius: .8rem;
        background-color: ${({ theme }) => theme.COLORS.PINK};
        color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

        svg {
            width: 1.6rem;
            height: 1.6rem;
        }
    }
`;
