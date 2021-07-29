import React from 'react';
import color from '../config/color';
import { BiTimeFive } from 'react-icons/bi'
import { MdDateRange } from 'react-icons/md'
import LineBreak from './LineBreak'
import Button from '@material-ui/core/Button';

function Cart(props) {
    const styles = {
        container: {
            width: 483,
            height: 386,
            backgroundColor: color.grey,
            padding: '15px 15px',
        },
        title: {
            fontSize: 35,
            fontWeight: 700,
        },
        datetimeContainer: {
            margin: '15px 0px',
            display: 'flex'
        },
        datetime: {
            display: 'flex',
            alignItems: 'center',
            width: 90,
        },
        headerContainer: {
            width: '100%',
            backgroundColor: '#151515',
        },
        header: {
            height: 40,
            paddingLeft: 20,
            backgroundColor: '#151515',
        },
        column: {
            height: 40,
            paddingLeft: 20,
        },
        button: {
            width: 140,
            height: 50,
            borderRadius: 5,
            backgroundColor: color.white,
            border: 'none',
            fontSize: 20,
            fontWeight: 500,

        }
    }

    return (
        <div style={styles.container}>
            <div style={styles.title}>Harry Potter: Half-Blood Prince</div>
            <div style={styles.datetimeContainer}>
                <span style={styles.datetime}><BiTimeFive size={15} /> <span>13:15</span></span>
                <span style={styles.datetime}><MdDateRange size={15} /> <span>18.07.2021</span></span>
            </div>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <tbody>
                    <tr style={styles.headerContainer}>
                        <td style={styles.header}>No</td>
                        <td style={styles.header}>Hall</td>
                        <td style={styles.header}>Row</td>
                        <td style={styles.header}>Seat</td>
                        <td style={styles.header}>Price</td>
                    </tr>
                    <tr>
                        <td style={styles.column}>2221</td>
                        <td style={styles.column}>04</td>
                        <td style={styles.column}>C</td>
                        <td style={styles.column}>09</td>
                        <td style={styles.column}>110.000vnd</td>
                    </tr>
                    <tr>
                        <td colSpan="5">
                            <LineBreak length={483} color={color.lightGrey}></LineBreak>
                        </td>
                    </tr>
                    <tr>
                        <td style={styles.column}>2221</td>
                        <td style={styles.column}>04</td>
                        <td style={styles.column}>C</td>
                        <td style={styles.column}>09</td>
                        <td style={styles.column}>110.000vnd</td>
                    </tr>
                    <tr>
                        <td colSpan="5">
                            <LineBreak length={483} color={color.lightGrey}></LineBreak>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div style={{ display: 'flex' }}>
                <div style={{ width: '40%', display: 'flex', alignItems: 'center', height: 110 }}>
                    <Button variant="contained" size="large">Buy tickets</Button>
                </div>
                <div style={{ width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <span style={{ fontSize: 20, fontWeight: 500 }}>Grand total:</span> <span style={{ fontSize: 20, fontWeight: 500, color: color.primary, marginLeft: 10, }}>220.000vnd</span>
                </div>
            </div>

        </div>
    );
}

export default Cart;
