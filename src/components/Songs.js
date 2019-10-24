import React from 'react';
import SongBox from "./SongBox";

const Songs = props => {
    return (
        <div>
            {
                props.songs.map((element, index) =>
                    <SongBox
                        key={index}
                        name={element.track.name}
                        artist={element.track.artists}
                        album={element.track.album.name}
                        img={element.track.album.images[0]}
                        isrc={element.track.external_ids.isrc}
                    />
                )
            }
        </div>
    )
};

export default Songs;

