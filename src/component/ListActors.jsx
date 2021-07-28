import React from 'react';
import color from '../config/color';
import { BiSkipPreviousCircle, BiSkipNextCircle } from 'react-icons/bi'
import '../App.css'

function ListActors({ actors }) {
    const styles = {
        actorsContainer: {
            display: 'flex',
            flexDirection: 'row',
            overflowX: 'scroll'
        },
        actor: {
            width: 100,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: 25,
        },
        avatar: {
            width: 100,
            height: 100,
            borderRadius: 50,
        },
        name: {
            marginTop: 10,
            fontSize: 15,
            fontWeight: 300,
            color: color.white
        }
    }

    return (
        <div style={{width: 475}}>
            <div style={styles.actorsContainer} className="hidden-scrollbar">
                {actors.map((actor) => (
                    <div key={actor._id} style={styles.actor}>
                        <img style={styles.avatar} src={actor.avatar} alt="avatar" />
                        <div style={styles.name}>{actor.name}</div>
                    </div>
                ))}
            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 16}}>
                <BiSkipPreviousCircle size={25} />
                <BiSkipNextCircle size={25} />
            </div>
        </div>
    );
}

export default ListActors;