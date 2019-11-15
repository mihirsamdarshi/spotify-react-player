export const fakeSongsData = [
    {
        track: {
            id: 123456789,
            name: 'Test',
            artists: [
                {
                    name: 'Testy McTestFace',
                },
            ],
            tracks: {
                total: 10,
            },
            external_ids: {
                isrc: 123456789,
            },
            album: {
                name: 'Test - The LP',
                images: [
                    {
                        url: 'test.com',
                    },
                ],
            },
        },
    },
];

export const fakePlaylistData = [
    {
        id: 123456789,
        name: 'Test',
        tracks: {
            total: 10,
        },
        images: [
            {
                url: 'test.com',
            },
        ],
    },
];

export const bodyPlaylistData = {
    href: 'https://api.spotify.com/v1/users/123411097/playlists?offset=0&limit=20',
    items: [
        {
            collaborative: false,
            external_urls: {
                spotify: 'https://open.spotify.com/playlist/4bof0ZfFsgSQ9A3519zfvC',
            },
            href: 'https://api.spotify.com/v1/playlists/4bof0ZfFsgSQ9A3519zfvC',
            id: '4bof0ZfFsgSQ9A3519zfvC',
            images: [
                {
                    height: 640,
                    url: 'https://mosaic.scdn.co/640/ab67616d0000b2733bf95eba9438388129c5abe8ab67616d0000b2738fdd144d8a8e57db60c5c29dab67616d0000b273acd9825c2d60ddee38f643b3ab67616d0000b273e04293bed7a0440e3eea2de1',
                    width: 640,
                },
                {
                    height: 300,
                    url: 'https://mosaic.scdn.co/300/ab67616d0000b2733bf95eba9438388129c5abe8ab67616d0000b2738fdd144d8a8e57db60c5c29dab67616d0000b273acd9825c2d60ddee38f643b3ab67616d0000b273e04293bed7a0440e3eea2de1',
                    width: 300,
                },
                {
                    height: 60,
                    url: 'https://mosaic.scdn.co/60/ab67616d0000b2733bf95eba9438388129c5abe8ab67616d0000b2738fdd144d8a8e57db60c5c29dab67616d0000b273acd9825c2d60ddee38f643b3ab67616d0000b273e04293bed7a0440e3eea2de1',
                    width: 60,
                },
            ],
            name: 'july_repeat_everything',
            owner: {
                display_name: 'Mihir Samdarshi',
                external_urls: {
                    spotify: 'https://open.spotify.com/user/123411097',
                },
                href: 'https://api.spotify.com/v1/users/123411097',
                id: '123411097',
                type: 'user',
                uri: 'spotify:user:123411097',
            },
            primary_color: null,
            public: true,
            snapshot_id: 'MTAsZmYwNTJlMDllN2VlY2RmNGVlNWU0NDBhYzIyY2RiMDdmZmEwMzY3YQ==',
            tracks: {
                href: 'https://api.spotify.com/v1/playlists/4bof0ZfFsgSQ9A3519zfvC/tracks',
                total: 37,
            },
            type: 'playlist',
            uri: 'spotify:playlist:4bof0ZfFsgSQ9A3519zfvC',
        },
    ],
};
