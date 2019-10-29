import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import '../stylesheets/NowPlaying.scss';

const NowPlaying = (props) => {
    console.log(props);
    const returnArtistAlbumString = (args) => {
        const artistArray = args.artist;
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
    };

    const nowPlayingCard = {
        backgroundImage: `url(${props.nowPlaying.img.url})`,
        backgroundPosition: 'center',
        minHeight: '100%',
    };

    // load SDK after authentication token was created
    const loadSpotifySDK = () => {
        const sdk = document.createElement('script');
        sdk.src = 'https://sdk.scdn.co/spotify-player.js';
        document.body.appendChild(sdk);
    };

    useEffect(() => {
        loadSpotifySDK();
        window.onSpotifyWebPlaybackSDKReady = () => {
            console.log('Player Ready');
        };
    }, []);

    return (
        <Card>
            <div className="bg-image">
                <div style={nowPlayingCard} />
            </div>
            <div className="nowPlayingDetails">
                <CardContent className="nowPlayingContent">
                    <Typography component="h5" variant="h5">
                        {props.nowPlaying.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {returnArtistAlbumString(props.nowPlaying)}
                    </Typography>
                </CardContent>
                <div className="nowPlayingControls">
                    <IconButton aria-label="previous">
                        {<SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon />
                    </IconButton>
                    <IconButton aria-label="next">
                        {<SkipNextIcon />}
                    </IconButton>
                </div>
            </div>
        </Card>
    );
};

export default NowPlaying;
