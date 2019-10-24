import React from 'react';
import PlaylistBox from './PlaylistBox';

const Playlists = (props) => {
    return (
        <div>
            {
                props.playlists.map((element) => (
                    <div onClick={() => props.getSongFunc(element.href)} key={element.id}>
                        <PlaylistBox
                            name={element.name}
                            numTracks={element.tracks.total}
                            img={element.images[0]}
                        />
                    </div>
                ))
            }
        </div>
    );
};

export default Playlists;
