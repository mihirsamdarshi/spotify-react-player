import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const NowPlaying = (props) => {
    const theme = useTheme();

    const returnArtistAlbumString = (args) => {
        const artistArray = args.artist;
        console.log(artistArray);

        /*
const albumName = args.album;
let returnString = '';
if (artistArray.length === 1) {
    returnString = artistArray[0].name;
    return returnString;
}

artistArray.forEach((element) => {
    if (element.name) {
        returnString += (`${element.name}, `);
    }
});

const len = returnString.length;
returnString = returnString.substring(0, len - 2);
return `${returnString} — ${albumName}`;
 */
    };

    return (
        <Card className="card">
            <div className="details">
                <CardContent className="content">
                    <Typography component="h5" variant="h5">
                        {props.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {returnArtistAlbumString(props)}
                    </Typography>
                </CardContent>
                <div className="controls">
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon className="playIcon" />
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </div>
            </div>
        </Card>
    );
};

export default NowPlaying;
