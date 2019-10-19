import React from 'react';
import PlaylistBox from "./PlaylistBox";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    cardPad: {
        marginBottom: 2000,
    }
})

const Playlists = props => {
    const classes = useStyles();
    const getIndividualItems = data => {
        console.log(data)
    };

    return (
        <div>
            {
                props.playlists.map(element =>
                    <PlaylistBox
                        name={element.name}
                        link={element.href}
                        numTracks={element.tracks.total}
                        img={element.images[0]}
                        className={classes.cardPad}
                    />
                )
            }
        </div>
    )
};

export default Playlists;

