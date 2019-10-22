import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function SongBox(props) {
    return (
        <Card className='card'>
            <div className='details'>
                <CardContent className='content'>
                    <Typography component="h5" variant="h5">
                        {props.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {props.artist.name}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                        {props.album}
                    </Typography>
                </CardContent>
            </div>
            <CardMedia
                className='cover'
                image={props.img.url}
            />
        </Card>
    );
}