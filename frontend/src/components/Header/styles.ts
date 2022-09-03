import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 220px;
    background: linear-gradient(180deg, #102347 0%, #181818 100%);

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        h1 {
            margin-top: 15px;
            font-size: 24px;
        }
    }
`

export const Logo = styled.img`
    width: 235px;
`