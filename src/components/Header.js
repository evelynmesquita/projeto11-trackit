import styled from 'styled-components'
import { useContext } from "react"
import AppContext from "../context/AppContext"

export default function Header() {
    const { user } = useContext(AppContext)
    return (
        <HeaderStyle data-test="header">
            <h1>TrackIt</h1>
            <img src={user.image} alt="userImage" />
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    width: 375px;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    font-family: 'Playball', cursive;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;

    img {
        width: 51px;
        height: 51px;
        margin-top: 9px;
        margin-right: 10px;
        border-radius: 50%;
    }

    h1 {
        font-family: 'Playball', cursive;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
        margin-left: 18px;
        margin-top: 10px;
    }
`