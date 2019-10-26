import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const NowPlaying = () => {
    const theme = useTheme();

    return (
        <Card className="card">
            <div className="details">
                <CardContent className="content">
                    <Typography component="h5" variant="h5">
                        Katana
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Ramriddlz, KILLY
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
