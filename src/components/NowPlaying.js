import React, { useState } from 'react';
import { Card, CardContent, IconButton, Typography } from '@material-ui/core';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PauseIcon from '@material-ui/icons/Pause';
import '../stylesheets/NowPlaying.scss';
import { nextSong, pauseSong } from '../scripts/api';
import { returnArtistAlbumString } from '../scripts/helpers';

const NowPlaying = (props) => {
    const nowPlayingCard = {
        backgroundImage: `url(${props.nowPlaying.img.url})`,
        backgroundPosition: 'center',
        maxWidth: '100%',
        height: 'auto',
    };

    const [songPlaying, setSongPlaying] = useState(false);

    const handlePlay = () => {
        if (songPlaying) {
            pauseSong();
            setSongPlaying(false);
        } else {
            console.log('play func here');
            setSongPlaying(true);
        }
    };

    const handlePrevious = () => {
        previousSong()
    };

    const handleNext = () => {
        nextSong();
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
                    <IconButton aria-label="previous" onClick={handlePrevious}>
                        {<SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause" onClick={handlePlay}>
                        {songPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                    </IconButton>
                    <IconButton aria-label="next" onClick={handleNext}>
                        {<SkipNextIcon />}
                    </IconButton>
                </div>
            </div>
        </Card>
    );
};

export default NowPlaying;
