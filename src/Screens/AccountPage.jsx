import React from 'react';
import NavBar from '../component/NavBar/NavBar';
import color from '../config/color';
import { VscAccount } from 'react-icons/vsc'
import { BiLogOut } from 'react-icons/bi'
import LineBreak from '../component/LineBreak';
import FormInput from '../component/FormInput';
import { useState } from 'react';


function AccountPage(props) {
    const styles = {
        container: {
            width: '100%',
            maxWidth: 1216,
            marginTop: 175,
            display: 'flex',
            color: color.white,
        },
        infoContainer: {
            width: '50%',
        },
        info: {
            display: 'flex',
            marginBottom: 10,
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
            display: 'flex',
            alignItems: 'center',
        },
        form: {

        },
        yourTickets: {
            width: '50%',
        }
    }
    
    const [user, setUser] = useState(
        {
            name: '',
            email: '',
            phone: '',
        }
    )
    const [errors, setErrors] = useState()

    const handleSignOut= () => {
        console.log('sign out')
    }

    const handleChange = (e) => {
        console.log(e.target)
    }

    return (
        <div className='main' style={{ height: '100vh', overflow: 'hidden' }}>
            <NavBar></NavBar>
            <div style={styles.container}>
                <div style={styles.infoContainer}>
                    <div style={styles.info}>
                        <div style={styles.avatar}>
                            <VscAccount size={62}></VscAccount>
                        </div>
                        <div style={styles.nameContainer}>
                            <div style={styles.name}>
                                Dang Nguyen
                            </div>
                            <div style={{ fontSize: 15, fontWeight: 300 }}>
                                <span>10 tickets purchases</span>
                                <span style={{ marginLeft: 10 }}>Gold member</span>
                            </div>
                        </div>
                        <div style={styles.signOut}>
                            <BiLogOut onClick={handleSignOut} size={40}></BiLogOut>
                        </div>
                    </div>
                    <LineBreak length={608} color={color.lightGrey}></LineBreak>
                    <div style={styles.form}>
                        <FormInput onChange={handleChange} label='Name' data={user} errors={errors} name='name'></FormInput>
                        <FormInput onChange={handleChange} label='Email' data={user} errors={errors} name='email'></FormInput>
                        <FormInput onChange={handleChange} label='Phone' data={user} errors={errors} name='email'></FormInput>
                    </div>
                </div>
                <div style={styles.yourTickets}></div>
            </div>

        </div>
    );
}

export default AccountPage;