import React from 'react';
import SongBox from './SongBox';

const Songs = (props) => {
    props.songs.forEach((element) => {
        console.log(element.track.name); // eslint-disable-line
    });

    return (
        <div>
            {
                props.songs.map((element) => (
                    <SongBox
                        key={element.track.external_ids.isrc}
                        name={element.track.name}
                        artist={element.track.artists}
                        album={element.track.album.name}
                        img={element.track.album.images[0]}
                    />
                ))
            }
        </div>
    );
};

export default Songs;
