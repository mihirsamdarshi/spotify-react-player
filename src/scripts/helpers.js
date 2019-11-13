import { createContext } from 'react';

export const GetSongListDispatch = createContext(null);
export const SetLoginDispatch = createContext(null);
export const GetNowPlayingDispatch = createContext(null);

export const GlobalToken = createContext(null)

export const returnArtistAlbumString = (args) => {
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
