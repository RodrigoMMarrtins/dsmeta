import styled from "styled-components";

export const ContentWrapper = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
`
export const CardWrapper = styled.div`
    background-color: #283142;
    border-radius: 10px;
    padding: 30px 30px;
`

export const TitlePage = styled.h2`
    color: #676fff;
    font-size: 24px;
    margin-bottom: 20px;
`

export const SalesTable = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 1fr);
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    div {
        box-sizing: border-box;
    }
    
`
export const TableHeader = styled.div`
    display: grid;
    grid-template-columns: 0.75fr 1fr 1fr 1fr 1fr 1fr 1fr;
    place-items: center;
    height: 55px;
    font-size: 16px;
    color: #e9e9e9;
    font-weight: 700;
    
`
export const TableBody = styled.div`
    display: flex;
    flex-direction: column;
    
    & div:nth-child(odd) {
        background-color: #242c3b;

        :hover {
            background-color: #384459;
        }
    }
`

export const TableItem = styled.div`
    display: grid;
    grid-template-columns: 0.75fr 1fr 1fr 1fr 1fr 1fr 1fr;
    place-items: center;
    font-size: 14px;
    font-weight: 400;
    color: #cfcfcf;
    border-top: 1px solid #5F6E82;
    padding: 5px 0;
    & > div {
        display: flex;
    }
    :hover {
        background-color: #384459;
    }

    :hover > div{
        background-color: #384459;
    }


`

export const Input = styled.input`
    width: 100%;
    height: 46px;
    background-color: #1b2531;
    border: 1px solid #384459;
    border-radius: 5px;
    color: #9aaabe;
    padding: 0 20px;
    font-size: 18px;
`

export const InputWrapper = styled.div`
    margin-bottom: 16px;
    max-width: 300px;

    & input {
        width: 100%;
        height: 46px;
        background-color: #1b2531;
        border: 1px solid #384459;
        border-radius: 5px;
        color: #9aaabe;
        padding: 0 20px;
        font-size: 18px;
    }
  `