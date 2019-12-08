import { isEmpty } from 'lodash';
import { emptySongsData, fakeSongsData } from './utils';
import { getHashParams, returnArtistAlbumString } from '../scripts/helpers';


describe('the getHashParams function', () => {
    it('should return null for hash params', () => {
        expect(isEmpty(getHashParams())).toBe(true);
    });

    it('should return a value for hash params', () => {
        const output = { access_token: 'helloworld', expires_in: '69', token_type: 'Bearer' };
        global.window = Object.create(window);
        const url = '#access_token=helloworld&token_type=Bearer&expires_in=69';
        Object.defineProperty(window, 'location', {
            value: {
                hash: url,
            },
            writable: true,
        });
        expect(getHashParams()).toStrictEqual(output);
    });
});

describe('the returnArtistAlbumString', () => {
    xit('should return an empty string', () => {
        expect(returnArtistAlbumString(emptySongsData)).toBe('');
    });

    xit('should return a string', () => {
        expect(returnArtistAlbumString(fakeSongsData)).toBe('');
    });
});
