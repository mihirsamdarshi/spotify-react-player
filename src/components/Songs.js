import React, { useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Image from 'react-bootstrap/Image';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import '../stylesheets/Songs.scss';
import { GetNowPlayingDispatch, removeDuplicates, returnArtistAlbumString } from '../scripts/helpers';

const SongBox = (props) => {
    const GetNowPlaying = useContext(GetNowPlayingDispatch);

    return (
        <Card className="card" onClick={() => GetNowPlaying(props)}>
            <CardActionArea>
                <div className="songBox">
                    <Image
                        className="songCover"
                        src={props.img.url !== undefined ? props.img.url : ''}
                    />
                    <CardContent className="songContent">
                        <Typography component="h5" variant="h5" noWrap>
                            {props.name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" noWrap>
                            {returnArtistAlbumString(props)}
                        </Typography>
                    </CardContent>
                </div>
            </CardActionArea>
        </Card>
    );
};

const Songs = (props) => {
    const editedSongArray = removeDuplicates(props.songs);

    return (
        <div>
            {
                editedSongArray.map((element) => (
                    <SongBox
                        key={element.track.id}
                        name={element.track.name}
                        artist={element.track.artists}
                        album={element.track.album.name}
                        img={element.track.album.images[0]}
                        isrc={element.track.external_ids.isrc}
                        uri={element.track.uri}
                    />
                ))
            }
        </div>
    );
};

export default Songs;
