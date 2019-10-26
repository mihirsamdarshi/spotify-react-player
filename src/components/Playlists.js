import React, { useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Image from 'react-bootstrap/Image';
import Typography from '@material-ui/core/Typography';
import { animated, useSpring } from 'react-spring';
import '../stylesheets/Playlists.scss';
import { GetSongDispatch } from '../scripts/callbacks';
import { createStore } from 'redux';

const PlaylistBox = (props) => {
    const animation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
    });

    function setSelected(state, action) {
        if (action.type === 'set') {
            state = action.id;
        }
    }

    const store = createStore(setSelected, null);

    const GetSongList = useContext(GetSongDispatch);

    const handleClick = (key) => {
        GetSongList;
        store.dispatch({
            id: key,
        });
    };

    return (
        <animated.div style={animation}>
            <Card className={} onClick={handleClick(props.key)}>
                <CardActionArea>
                    <Image
                        className="media"
                        src={props.img.url}
                    />
                    <CardContent className="details">
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.numTracks ? (`${props.numTracks} tracks available`) : 'No tracks available'}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </animated.div>
    );
};

const Playlists = (props) => {
    return (
        props.playlists.map((element) => (
            <PlaylistBox
                key={element.id}
                name={element.name}
                numTracks={element.tracks.total}
                img={element.images[0]}
            />
        ))
    );
};

export default Playlists;
