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

    return (
        <div>
            {
                props.playlists.map((element, index) =>
                    <div onClick={() => props.getSongFunc(element.href)} key={index}>
                        <PlaylistBox
                            name={element.name}
                            numTracks={element.tracks.total}
                            img={element.images[0]}
                            className={classes.cardPad}
                        />
                    </div>
                )
            }
        </div>
    )
};

export default Playlists;

