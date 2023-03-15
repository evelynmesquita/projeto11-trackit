import styled from 'styled-components'
import { Link } from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';

export default function HabitPage() {

    return (
        <Body>
            <Header>
                <h1>TrackIt</h1>
                <img src='../assets/profile.png' />
            </Header>

            <MyHabits>
                <h2>Meus hábitos</h2>
                <button>+</button>
            </MyHabits>

            <MyHabitsText>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </MyHabitsText>

            <Footer>
                <p>Hábitos</p>
                    <Progress>
                        <CircularProgressbar
                        text={"Hoje"} />
                    </Progress>
                <p>Histórico</p>
            </Footer>

        </Body>
        
    )
}

const Body = styled.div`
    background-color: #F2F2F2;
    width: 375px;
    height: 667px;

`

const Header = styled.div`
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

const MyHabits = styled.div`
    padding-top: 100px;
    width: 340px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    align-items: center;

    h2 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

    button {
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;
        color: #FFFFFF;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 27px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const MyHabitsText = styled.div`
    width: 338px;
    height: 74px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    margin-top: 30px;
    margin-left: 17px;
`

const Footer = styled.div`
    width: 375px;
    height: 70px;
    background: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
    padding-left: 36px;
    padding-right: 36px;
    }
`

const Progress = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    margin-bottom: 30px;
    background: #52B6FF;
    border-radius: 50%;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    
`