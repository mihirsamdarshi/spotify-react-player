import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import '../stylesheets/NowPlaying.scss';
import { returnArtistAlbumString } from '../scripts/helpers';

const NowPlaying = (props) => {
    const nowPlayingCard = {
        backgroundImage: `url(${props.nowPlaying.img.url})`,
        backgroundPosition: 'center',
        maxWidth: '100%',
        height: 'auto',
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
                {/*
                <div className="nowPlayingControls">
                    <IconButton aria-label="previous" onClick={handlePrevious}>
                        {<SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon />
                    </IconButton>
                    <IconButton aria-label="next" onClick={handleNext}>
                        {<SkipNextIcon />}
                    </IconButton>
                </div>
                */}
            </div>
        </Card>
    );
};

export default NowPlaying;
