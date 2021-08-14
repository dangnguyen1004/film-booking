import React from "react";
import NavBar from "../component/NavBar/NavBar";
import color from "../config/color";
import { VscAccount } from "react-icons/vsc";
import { BiLogOut } from "react-icons/bi";
import LineBreak from "../component/LineBreak";
import FormInput from "../component/FormInput";
import { useState } from "react";
import FormRadio from "../component/FormRadio";
import Button from "@material-ui/core/Button";
import Ticket from "../component/Ticket";
import { logout } from '../services/authService'
import { useEffect } from "react";
import { getCurrentUser } from '../services/authService'
import { getTickets } from "../services/ticketsService";

function AccountPage({ history }) {
    const styles = {
        container: {
            width: "100%",
            maxWidth: 1216,
            marginTop: 175,
            display: "flex",
            color: color.white,
        },
        infoContainer: {
            width: "50%",
            paddingRight: 50,
            height: 1000,
            borderRight: '1px solid white',
        },
        info: {
            display: "flex",
            borderBottom: '1px solid #444444',
            paddingBottom: 20,
        },
        nameContainer: {
            flexGrow: 2,
            paddingLeft: 15,
        },
        name: {
            fontSize: 30,
            fontWeight: 600,
        },
        signOut: {
            height: 62,
            display: "flex",
            alignItems: "center",
        },
        yourTickets: {
            width: "50%",
            paddingLeft: 50,
            height: 700,
            display: 'flex',
            flexDirection: 'column',
            gap: 80,
            overflow: 'scroll',
            paddingBottom: 300,
        },
    };

    const [tickets, setTickets] = useState([])

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        gender: "",
    });
    const [errors, setErrors] = useState();

    const handleSignOut = () => {
        console.log("sign out");
        logout()
    };

    const handleChange = ({ target }) => {
        const newUser = { ...user };
        newUser[target.name] = target.value;
        setUser(newUser);
    };

    const handleChangeGender = (user) => {
        setUser(user);
    };

    const handleUpdate = () => {
        console.log(user);
    };

    const getData = async () => {
        const result = await getCurrentUser()
        if (result){
            setUser(result.data)
            const tickets = await getTickets(result.data.id)
            if (tickets){
                setTickets(tickets.data)
                console.log(tickets.data)
            }
            return
        }
        history.push('/login')
    }


    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="main" style={{ height: "100vh", overflow: "hidden", zIndex: -5, }}>
            <NavBar history={history}></NavBar>

            <div style={styles.container}>
                <div style={styles.infoContainer}>
                    <div style={styles.info}>
                        <div style={styles.avatar}>
                            <VscAccount size={62}></VscAccount>
                        </div>
                        <div style={styles.nameContainer}>
                            <div style={styles.name}>{user ? user.name : ""}</div>
                            <div style={{ fontSize: 15, fontWeight: 300 }}>
                                <span>{tickets.length} tickets purchases</span>
                                <span style={{ marginLeft: 10 }}>Gold member</span>
                            </div>
                        </div>
                        <div style={styles.signOut}>
                            <BiLogOut style={{ cursor: 'pointer' }} onClick={handleSignOut} size={40}></BiLogOut>
                        </div>
                    </div>
                    <div style={styles.form}>
                        <FormInput
                            onChange={handleChange}
                            label="Name"
                            data={user}
                            errors={errors}
                            name="name"
                        ></FormInput>
                        <FormInput
                            onChange={handleChange}
                            label="Email"
                            data={user}
                            errors={errors}
                            name="email"
                        ></FormInput>
                        <FormInput
                            onChange={handleChange}
                            label="Phone"
                            data={user}
                            errors={errors}
                            name="phone"
                        ></FormInput>
                        <FormRadio
                            onChange={handleChangeGender}
                            label="Gender"
                            user={user}
                        ></FormRadio>
                    </div>
                </div>
                <div style={styles.yourTickets}>
                    {tickets.map(ticket => (
                        <Ticket key={ticket.id} ticket={ticket}></Ticket>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AccountPage;
