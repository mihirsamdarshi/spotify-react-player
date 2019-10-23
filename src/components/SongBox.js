import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function SongBox(props) {
    const returnAllArtists = props => {
        let artistArray = props.artist;
        let albumName = props.album;
        let returnString = '';
        let editedString;
        if (artistArray.length === 1) {
            returnString = artistArray[0].name;
            return returnString
        } else {
            artistArray.forEach(function (element) {
                if (element.name) {
                    returnString += (element.name + ', ');
                }
            })
        }
        let len = returnString.length;
        returnString = returnString.substring(0, len - 2);
        editedString = returnString + ' — ' + albumName;
        return editedString;
    }

    return (
        <Card className='card'>
            <div className='details'>
                <CardContent className='content'>
                    <Typography component='h5' variant='h5'>
                        {props.name}
                    </Typography>
                    <Typography variant='subtitle1' color='textSecondary' noWrap='true'>
                        {returnAllArtists(props)}
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