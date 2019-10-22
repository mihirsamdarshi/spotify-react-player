import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
}));

export default function SongBox(props) {
    const classes = useStyles();
    const theme = useTheme();
    console.log(props.img);

    return (
        <Card className={classes.card}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {props.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {props.artist}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                        {props.album}
                    </Typography>
                </CardContent>
            </div>
            <CardMedia
                className={classes.cover}
                image={props.img}
                title="Live from space album cover"
            />
        </Card>
    );
}