import React from 'react';
import PlaylistBox from "./PlaylistBox";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {animated, useSpring} from 'react-spring'

const useStyles = makeStyles({
    cardPad: {
        marginBottom: 2000,
    }
})


const Playlists = props => {
    const classes = useStyles();
    const animation = useSpring({opacity: 1, from: {opacity: 0}});

    return (
        <div>
            {
                props.playlists.map(element =>
                    <animated.div style={animation}>
                        <PlaylistBox
                            name={element.name}
                            link={element.href}
                            numTracks={element.tracks.total}
                            img={element.images[0]}
                            key={element.id}
                            className={classes.cardPad}
                            onClick={props.getSongFunc}
                        />
                    </animated.div>
                )
            }
        </div>
    )
};

export default Playlists;

