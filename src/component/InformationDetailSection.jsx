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
        },
        mainTitle: {
            fontSize: 60,
            fontWeight: 800,
        }
    }

    return (
        <div style={styles.detailsContainer} {...otherProps}>
            <div style={styles.detailsContainerLeft}>
                <div style={styles.mainTitle}>
                    Harry Potter: Half-Blood Prince
                </div>
                <ListDetailInfo style={{ marginTop: 27 }} film={film}></ListDetailInfo>
            </div>
            <div style={styles.detailsContainerRight}>
                <div>Starring</div>
                <ListActors actors={actors}></ListActors>
            </div>
        </div>
    );
}

export default InformationDetailSection;