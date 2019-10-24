import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import '../stylesheets/Songs.scss';

const SongBox = (props) => {
    const returnAllArtists = (args) => {
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

    return (
        <Card className="card">
            <div className="details">
                <CardContent className="content">
                    <Typography component="h5" variant="h5" className="alignText">
                        {props.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" noWrap>
                        {returnAllArtists(props)}
                    </Typography>
                </CardContent>
            </div>
            <CardMedia
                className="cover"
                image={props.img.url}
            />
        </Card>
    );
};

const Songs = (props) => (
    <div>
        {
            props.songs.map((element) => (
                <SongBox
                    key={element.track.id}
                    name={element.track.name}
                    artist={element.track.artists}
                    album={element.track.album.name}
                    img={element.track.album.images[0]}
                    isrc={element.track.external_ids.isrc}
                />
            ))
        }
    </div>
);

export default Songs;
