import styled from '@emotion/styled'

export const ProfileBox = styled.div`
    background-color: white;
    width: 250px;
    text-align: center;
    padding-top: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
`;

export const ProfileInfo = styled.div`
    img{
        width: 100px;
        border-radius: 50%;
        margin-bottom: 30px;
    }

    p {
        margin-bottom: 5px;
        color: silver;
    }

    p:last-of-type{
        margin-bottom: 20px;
    }
`;

export const ProfileList = styled.ul`
    display: flex;
    width: 100%;
    li {
        padding: 10px 5px;
        width: calc(100% / 3);
        border: 1px solid silver;

        span {
            display: block;
        }

        span:first-of-type {
            margin-bottom: 5px;
        }
    }
`;