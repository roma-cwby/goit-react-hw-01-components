import styled from '@emotion/styled'

export const StatisticSection = styled.section`
    width: 300px;
    background-color: white;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 20px;

    h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50%;
        padding: 10px 0;
    }

    ul {
        display: flex;
        height: 50%;
    }

    li {
        width: 20%;
        height: 100%;
        text-align: center;
        padding: 2px 0;
    }

    li span {
        display: block;
        color: white;
    }

    li span:last-child{
        font-size: 25px;
    }
`;