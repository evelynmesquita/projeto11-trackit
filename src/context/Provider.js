import { useState } from "react";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [habits, setHabits] = useState([]);
    const [concluded, setConcluded] = useState(0);

    return (
        <AppContext.Provider value={{ user, setUser, habits, setHabits, concluded, setConcluded }}>

            {children}

        </AppContext.Provider>
    )
}

export default AppProvider;