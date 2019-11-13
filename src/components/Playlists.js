import React, { useContext } from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core';
import Image from 'react-bootstrap/Image';
import { animated, useSpring } from 'react-spring';
import '../stylesheets/Playlists.scss';
import { GetSongListDispatch, GlobalToken } from '../scripts/helpers';

const PlaylistBox = (props) => {
    const animation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
    });

    const GetSongList = useContext(GetSongListDispatch);
    const token = useContext(GlobalToken);


    return (
        <animated.div style={animation}>
            <Card className="card playlist" onClick={() => GetSongList(props.playlistId, token)}>
                <div className="heightFix">
                    <Image
                        className="media"
                        src={props.imgSrc.url}
                    />
                </div>
                <CardActionArea>
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
    /*
    const [activeItem, setActiveItem] = useState(null);

    const handleClick = (key) => {
        setActiveItem(key);
    };
    */

    return (
        props.playlists.map((element) => (
            <PlaylistBox
                key={element.id}
                playlistId={element.id}
                name={element.name}
                numTracks={element.tracks.total}
                imgSrc={element.images[0]}
            />
        ))
    );
};

export default Playlists;
