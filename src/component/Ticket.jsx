import React from 'react';

function Ticket(props) {
    const styles = {
        container: {
            width: 586,
            height: 400,
            padding: 20,
            display: 'flex',
        },
        background: {
            position: 'absolute',
            width: 568,
            height: 400,
            objectFit: 'cover',
        },
        coverBackground: {
            position: 'absolute',
            width: 568,
            height: 400,
            objectFit: 'cover',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }
    }
    
    return (
        <div style={styles.container}>
            <img src="https://picsum.photos/600/400" alt="ticket img" style={styles.background} />
            <div style={styles.coverBackground}></div>
        </div>
    );
}

export default Ticket;
