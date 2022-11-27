import styled from '@emotion/styled'

export const TransactionTable = styled.table`
    width: 1000px;
    border: 1px solid white;

    tr {
        height: 30px;
    }

    th, td {
        text-align: center;
    }

    th {
        background-color: blue;
        color: white;
    }

    td {
        background-color: white;
    }

    tr:nth-of-type(2n) td{
        background-color: silver;
    }
`;