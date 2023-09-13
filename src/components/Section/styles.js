import styled from 'styled-components'

export const Container = styled.section`
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
`