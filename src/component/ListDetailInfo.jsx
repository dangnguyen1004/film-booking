import React from 'react';
import StarsBar from './StarsBar';

function ListDetailInfo({film, ...otherProps}) {
    const styles = {
        detailContainer: {
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 20,
        },
        detailKey: {
            width: 120,
            fontSize: 17,
            fontWeight: 600
        },
        detailValue: {
            fontSize: 17,
            fontWeight: 400,
        }
    }

    return (
        <div {...otherProps}>
            <div style={styles.detailContainer}>
                <div style={styles.detailKey}>Grade:</div>
                <div style={styles.detailValue}><StarsBar rate={film.rating} size={18} space={7} /></div>
            </div>
            <div style={styles.detailContainer}>
                <div style={styles.detailKey}>Genres:</div>
                <div style={styles.detailValue}>{film.genres.join(', ')}</div>
            </div>
            <div style={styles.detailContainer}>
                <div style={styles.detailKey}>Producer:</div>
                <div style={styles.detailValue}>{film.producer}</div>
            </div>
            <div style={styles.detailContainer}>
                <div style={styles.detailKey}>Format:</div>
                <div style={styles.detailValue}>{film.format}</div>
            </div>
            <div style={styles.detailContainer}>
                <div style={styles.detailKey}>Runtime:</div>
                <div style={styles.detailValue}>{film.run_time}</div>
            </div>
            <div style={styles.detailContainer}>
                <div style={styles.detailKey}>Release:</div>
                <div style={styles.detailValue}>{film.release}</div>
            </div>
            <div style={styles.detailContainer}>
                <div style={styles.detailKey}>Language:</div>
                <div style={styles.detailValue}>{film.language}</div>
            </div>
            <div style={styles.detailContainer}>
                <div style={styles.detailKey}>Subtitle:</div>
                <div style={styles.detailValue}>{film.subtitle}</div>
            </div>
            <div style={styles.detailContainer}>
                <div style={styles.detailKey}>Director:</div>
                <div style={styles.detailValue}>{film.director}</div>
            </div>
        </div>
    );
}

export default ListDetailInfo;