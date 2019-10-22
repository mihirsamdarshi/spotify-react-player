import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    media: {
        height: 140,
    },
    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
});

let PlaylistBox;
PlaylistBox = props => {
    const classes = useStyles();

    let [state, setState] = useState(
        {
            link: props.link,
        }
    );
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.img.url}
                />
                <CardContent className={classes.details}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.numTracks ? props.numTracks : "0"} tracks available
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};

export default PlaylistBox