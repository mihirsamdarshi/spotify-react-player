import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

export default Playlist = props => {

    const getIndividualItems = data => {
        data.forEach(function (element) {
            return <PlaylistBox
                name={element.name}
                link={element.link}

            />
        })
    }
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {getIndividualItems}
        </div>
    )
}

const PlaylistBox = props => {
    let [state, setState] = useState(
        {
            link: props.link,
        }
    )
    return (
        <div onClick={}>
            {props.name}
        </div>
    )
}

