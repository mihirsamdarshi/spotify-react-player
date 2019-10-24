import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {animated, useSpring} from 'react-spring';
import '../stylesheets/Playlists.scss';

const PlaylistBox = (props) => {
    const animation = useSpring({opacity: 1, from: {opacity: 0}});

    return (
        <animated.div style={animation}>
            <Card className="card">
                <CardActionArea>
                    <CardMedia
                        className="media"
                        image={props.img.url}
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

const Playlists = (props) => (
    <div>
        {
            props.playlists.map((element) => (
                <div onClick={() => props.getSongFunc(element.href)} key={element.id}>
                    <PlaylistBox
                        name={element.name}
                        numTracks={element.tracks.total}
                        img={element.images[0]}
                    />
                </div>
            ))
        }
    </div>
);

export default Playlists;
