import React, { useContext, useState } from 'react';
import { Card, CardContent, IconButton, Typography } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import '../stylesheets/NowPlaying.scss';
import { nextSong, playSong, previousSong } from '../scripts/api';
import { GlobalToken, returnArtistAlbumString } from '../scripts/helpers';

const NowPlaying = (props) => {
    const nowPlayingCard = {
        backgroundImage: `url(${props.nowPlaying.img.url})`,
        backgroundPosition: 'center',
        maxWidth: '100%',
        height: 'auto',
    };

    const [songPlaying, setSongPlaying] = useState(false);
    const token = useContext(GlobalToken);

    const handlePlay = uri => {
        playSong(uri, token);
    };

    const handlePrevious = () => {
        previousSong(token)
    };

    const handleNext = () => {
        nextSong(token);
    };

    return (
        <Card>
            <div className="bg-image" style={nowPlayingCard} />
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
                    {/*
                    <IconButton aria-label="previous" onClick={handlePrevious}>
                        {<SkipPreviousIcon />}
                    </IconButton>
                    */}
                    <IconButton aria-label="play/pause" onClick={handlePlay(props.nowPlaying.uri)}>
                        <PlayArrowIcon />
                    </IconButton>
                    {/*
                    <IconButton aria-label="next" onClick={handleNext}>
                        {<SkipNextIcon />}
                    </IconButton>
                    */}
                </div>
            </div>
        </Card>
    );
};

export default NowPlaying;
