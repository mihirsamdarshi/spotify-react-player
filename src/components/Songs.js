import React from 'react';
import SongBox from "./SongBox";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    cardPad: {
        marginBottom: 2000,
    }
})

const Songs = props => {
    const classes = useStyles();

    return (
        <div>
            {
                props.songs.map(element =>
                    <SongBox
                        name={element.track.name}
                        artist={element.track.artists}
                        album={element.track.album.name}
                        img={element.track.album.images[0]}
                        isrc={element.track.external_ids.isrc}
                        className={classes.cardPad}
                    />
                )
            }
        </div>
    )
};

export default Songs;

