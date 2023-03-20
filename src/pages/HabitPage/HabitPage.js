import axios from "axios"
import styled from 'styled-components'
import Menu from '../../components/Menu';
import Header from "../../components/Header"
import { ThreeDots } from "react-loader-spinner"
import AppContext from "../../context/AppContext"
import { useContext, useEffect, useState } from "react"

export default function HabitPage() {

    const [habits, setHabits] = useState([])
    const [loading, setLoading] = useState(false)
    const [habitName, setHabitName] = useState("")
    const [habitDay, setHabitDay] = useState([])
    const [addHabit, setAddHabit] = useState(false)
    const { user, setConcluded, setTodayHabits } = useContext(AppContext)

    useEffect(() => {

        const settings = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }

        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", settings)
            .then((res) => setHabits(res.data))

            .catch((err) => {
                console.log(err.response.data)
            })

    }, [setConcluded])


    const DAYSWEEK = [
        { name: 'd', id: 0 },
        { name: 's', id: 1 },
        { name: 't', id: 2 },
        { name: 'q', id: 3 },
        { name: 'q', id: 4 },
        { name: 's', id: 5 },
        { name: 's', id: 6 },
    ]


    function habitAdd() {
        setAddHabit(true)
    }

    function habitDaySelect(day) {
        if (habitDay.includes(day.id)) {
            setHabitDay(habitDay.filter((h) => h !== day.id))
            return
        }
        const days = [...habitDay, day.id]
        setHabitDay(days)
    }

    function newHabitRegister(e) {
        e.preventDefault()
        if (habitDay.length < 1) {
            alert("Escolhe pelo menos um dia da semana")
            return
        }

        setLoading(true)

        const body = {
            name: habitName,
            days: habitDay
        }

        const settings = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }

        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, settings)
            .then((res) => {
                setHabits([...habits, res.data])
                setAddHabit(false)
                setLoading(false)
                setHabitName("")
                setHabitDay([])
                refreshTodayProgress()

            })

            .catch((err) => {
                alert(err.response.data.message)
                setAddHabit(false)
                setLoading(false)
                setHabitName("")
                setHabitDay([])

            })

    }

    function deletHabit(habit) {
        const settings = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }

        if (window.confirm("Deseja apagar o hábito?")) {
            axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`, settings)
                .then(() => {
                    setHabits(habits.filter((h) => h.id !== habit.id))
                    refreshTodayProgress()
                })

        } else {

            return
        }

    }

    function refreshTodayProgress() {
        const settings = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", settings)
            .then(res => {
                const data = res.data

                setTodayHabits(data)
                if (data.find((h) => h.done === true)) {
                    let count = 0
                    data.forEach((h) => {
                        if (h.done === true) {
                            count = count + 1
                        }
                    })
                    setConcluded(((count / data.length) * 100).toFixed(2))

                } else {
                    setConcluded(0)
                }
            })

    }

    function cancelHabit() {
        setAddHabit(false)
    }

    return (
        <>
            <Header data-test="header" />

            <HabitsPageStyle>

                <AddHabitStyle>
                    <h1>Meus hábitos</h1>
                    <button data-test="habit-create-btn" onClick={habitAdd}>+</button>
                </AddHabitStyle>

                <HabitsInfo data-test="habit-create-container" status={addHabit} >
                    <form onSubmit={newHabitRegister}>
                        <div>
                            <input data-test="habit-name-input"
                                disabled={loading}
                                value={habitName}
                                onChange={(e) => setHabitName(e.target.value)}
                                type="text"
                                placeholder="nome do hábito" />

                            <Days>
                                {DAYSWEEK.map((day) =>
                                    <DaysButtons
                                        disabled={loading}
                                        data-test="habit-day"
                                        key={day.id}
                                        day={habitDay.includes(day.id)}
                                        onClick={() => habitDaySelect(day)}>
                                        {day.name.toUpperCase()}
                                    </DaysButtons>
                                )}

                            </Days>
                            <SendInfos>
                                <button
                                    data-test="habit-create-cancel-btn"
                                    type="button"
                                    disabled={loading}
                                    onClick={cancelHabit}
                                >Cancelar</button>

                                <button
                                    data-test="habit-create-save-btn"
                                    disabled={loading}
                                    type="submit">
                                    {!loading ? 'Salvar' : <ThreeDots
                                        color="#FFFFFF"
                                        height="60"
                                        width="60"
                                        ariaLabel="three-dots-loading"
                                        wrapperStyle={{}}
                                        wrapperClassName=""
                                        visible={true}
                                    />}
                                </button>

                            </SendInfos>
                        </div>
                    </form>

                </HabitsInfo>
                {habits.map((h) =>
                    <RegisteredHabits data-test="habit-container" key={h.id}>

                        <h1 data-test="habit-name">{h.name}</h1>

                        <img data-test="habit-delete-btn"
                            onClick={() => deletHabit(h)}
                            src="../assets/img/trash.png"
                            alt="deletHabit" />

                        <Days>
                            {DAYSWEEK.map((d) =>
                                <ChoosedDays
                                    data-test="habit-day"
                                    key={d.id}
                                    day={(h.days).includes(d.id)}>
                                    {d.name.toUpperCase()}
                                </ChoosedDays>
                            )}

                        </Days>

                    </RegisteredHabits>
                )}

                {habits.length < 1 &&

                    <NoHabitsText>
                        <p>
                            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                        </p>
                    </NoHabitsText>
                }

                <Menu data-test="menu" />

            </HabitsPageStyle>
        </>
    )
}

const NoHabitsText = styled.div`
    width: 338px;
    margin-top: 25px;
        p {
            font-size: 18px;
            color: #666666;
            font-family: 'Lexend Deca';
            font-weight: 400;
            font-size: 17.976px;
            line-height: 22px;
            color: #666666;

        }
`

const HabitsPageStyle = styled.div`
    padding-top: 15px;   
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #E5E5E5;   
    overflow-y: auto;
    padding-bottom: 130px;
    min-height: calc(100vh - 70px);
    background-color: #F2F2F2;  
  
`

const AddHabitStyle = styled.div`
    padding:0 15px 0 15px;
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;   
    width: 338px;

        h1 {
            font-weight: 400;
            font-size: 22.976px;
            color: #126BA5;
            font-family: 'Lexend Deca';
        }
        
        button {
            width: 40px;
            height: 35px;
            background: #52B6FF;
            border-radius: 4px;
            font-size: 27px;
            color: #FFFFFF;
            text-align: center;
            border-style: none;
            font-family: 'Lexend Deca';
            cursor: pointer;

            &:disabled {
                background-color: #CFCFCF;
                font-family: 'Lexend Deca';
            }
        }
`

const HabitsInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 19px;    
    margin-top: 20px;
    background-color: #FFFFFF;
    width: 340px;
    height: 180px;
    border-radius: 5px;
    display: ${props => props.status ? "block" : "none"};

        input {
            width: 303px;
            height: 45px;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            padding: 10px;
            font-size: 20px;
            color: #666666;
            font-family: 'Lexend Deca';

                &::placeholder {
                    font-size: 20px;
                    color: #DBDBDB;
                    font-family: 'Lexend Deca';
                }

                &:disabled {
                background-color: #CFCFCF;
                font-family: 'Lexend Deca';
            }
        }
`

const Days = styled.div`
    display: flex;
    gap: 5px;
    margin-top: 10px;
`

const DaysButtons = styled.div`
     width: 30px;
    height: 30px;
    background-color: ${props => props.day ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    color: #DBDBDB;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: 'Lexend Deca';
`

const ChoosedDays = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${props => props.day ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    color: #DBDBDB;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lexend Deca';
    cursor: pointer;
`


const SendInfos = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;  
    font-family: 'Lexend Deca';
    margin-top: 15px;

        button:first-of-type {
            width: 69px;
            height: 20px;
            font-size: 16px;
            color: #52B6FF;
            border: none;
            background-color: #FFFFFF;
            margin-right: 23px;
            cursor: pointer;
            font-family: 'Lexend Deca';
        }

        button{
            width: 84px;
            height: 35px;
            background: #52B6FF;
            border-radius: 5px;
            font-size: 16px;
            color: #FFFFFF;
            border-style: none;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Lexend Deca';
        }
`

const RegisteredHabits = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 19px;    
    margin-top: 20px;
    background-color: #FFFFFF;
    width: 340px;
    border-radius: 5px;
    position: relative;
    font-family: 'Lexend Deca';

        h1 {
           font-size:20px ;
           color: #666666;
           font-family: 'Lexend Deca';
        }

        img {
            position: absolute;
            top: 15px;
            right: 15px;
            cursor: pointer;
        }
`
