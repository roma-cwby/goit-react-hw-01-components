import styled from '@emotion/styled'

export const FriendsList = styled.ul`
    width: 250px;
    margin-bottom: 20px;

    li {
        display: flex;
        align-items: center;

        padding: 5px 10px;
        background-color: white;
        border-radius: 5px;
        box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);

        span {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            margin-right: 10px;
        }

        img {
            margin-right: 10px;
        }
    }

    li:not(:last-of-type){
        margin-bottom: 10px;
    }
`;