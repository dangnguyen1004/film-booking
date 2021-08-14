import React from 'react';
import color from '../config/color';
import ListActors from './ListActors';
import ListDetailInfo from './ListDetailInfo';

function InformationDetailSection({ film, actors, ...otherProps }) {
    const styles = {
        detailsContainer: {
            display: 'flex',
            flexDirection: 'row',
            with: '100%',
            color: color.white,
        },
        detailsContainerLeft: {
            width: '50%',
        },
        detailsContainerRight: {
            width: '50%',
            marginLeft: 130
        },
        mainTitle: {
            fontSize: 60,
            fontWeight: 800,
        },
        smallTitle: {
            fontSize: 24,
            fontWeight: 600,
            marginBottom: 27,
        },
        description: {
            fontSize: 15,
            fontWeight: 400,
        }
    }

    return (
        <div style={styles.detailsContainer} {...otherProps}>
            <div style={styles.detailsContainerLeft}>
                <div style={styles.mainTitle}>
                    {film.title}
                </div>
                <ListDetailInfo style={{ marginTop: 27 }} film={film}></ListDetailInfo>
            </div>
            <div style={styles.detailsContainerRight}>
                <div style={styles.smallTitle}>Starring:</div>
                <ListActors actors={actors}></ListActors>
                <div style={styles.smallTitle}>Storyline:</div>
                <div style={styles.description}>{film.description}</div>
            </div>
        </div>
    );
}

export default InformationDetailSection;