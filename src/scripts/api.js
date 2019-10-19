const apiHost = () => { }; // No-op in our mock version.

const fetchUserPlaylists = () => Promise.resolve({
    "href": "https://api.spotify.com/v1/users/123411097/playlists?offset=0&limit=20",
    "items": [
        {
            "collaborative": false,
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/4bof0ZfFsgSQ9A3519zfvC"
            },
            "href": "https://api.spotify.com/v1/playlists/4bof0ZfFsgSQ9A3519zfvC",
            "id": "4bof0ZfFsgSQ9A3519zfvC",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d0000b2733bf95eba9438388129c5abe8ab67616d0000b2738fdd144d8a8e57db60c5c29dab67616d0000b273acd9825c2d60ddee38f643b3ab67616d0000b273e04293bed7a0440e3eea2de1",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d0000b2733bf95eba9438388129c5abe8ab67616d0000b2738fdd144d8a8e57db60c5c29dab67616d0000b273acd9825c2d60ddee38f643b3ab67616d0000b273e04293bed7a0440e3eea2de1",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d0000b2733bf95eba9438388129c5abe8ab67616d0000b2738fdd144d8a8e57db60c5c29dab67616d0000b273acd9825c2d60ddee38f643b3ab67616d0000b273e04293bed7a0440e3eea2de1",
                    "width": 60
                }
            ],
            "name": "july_repeat_everything",
            "owner": {
                "display_name": "Mihir Samdarshi",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/123411097"
                },
                "href": "https://api.spotify.com/v1/users/123411097",
                "id": "123411097",
                "type": "user",
                "uri": "spotify:user:123411097"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "MTAsZmYwNTJlMDllN2VlY2RmNGVlNWU0NDBhYzIyY2RiMDdmZmEwMzY3YQ==",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/4bof0ZfFsgSQ9A3519zfvC/tracks",
                "total": 37
            },
            "type": "playlist",
            "uri": "spotify:playlist:4bof0ZfFsgSQ9A3519zfvC"
        },
        {
            "collaborative": false,
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/03de8Phg9jBojkrhxQX9LE"
            },
            "href": "https://api.spotify.com/v1/playlists/03de8Phg9jBojkrhxQX9LE",
            "id": "03de8Phg9jBojkrhxQX9LE",
            "images": [
                {
                    "height": null,
                    "url": "https://pl.scdn.co/images/pl/default/d991a097a0d404f281cbbe494eb9065a56f82fda",
                    "width": null
                }
            ],
            "name": "B&L Fresh Batch",
            "owner": {
                "display_name": "browniesandlemonade",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/browniesandlemonade"
                },
                "href": "https://api.spotify.com/v1/users/browniesandlemonade",
                "id": "browniesandlemonade",
                "type": "user",
                "uri": "spotify:user:browniesandlemonade"
            },
            "primary_color": null,
            "public": false,
            "snapshot_id": "MTA0Niw5YjlkNGVlMGI2OTFmOWFmNWI5YTA1Njc0ZmI5ZGNmYjdiOWQ0MjNh",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/03de8Phg9jBojkrhxQX9LE/tracks",
                "total": 106
            },
            "type": "playlist",
            "uri": "spotify:playlist:03de8Phg9jBojkrhxQX9LE"
        },
        {
            "collaborative": false,
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/7zt6XcebGDPj9weCyjbcSf"
            },
            "href": "https://api.spotify.com/v1/playlists/7zt6XcebGDPj9weCyjbcSf",
            "id": "7zt6XcebGDPj9weCyjbcSf",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/34e349512b0e636fa3df4c2206969386cb92dc83ab67616d0000b273072e9faef2ef7b6db63834a3ab67616d0000b27313c40d09756d267c10dab09cab67616d0000b2734c79d5ec52a6d0302f3add25",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/34e349512b0e636fa3df4c2206969386cb92dc83ab67616d0000b273072e9faef2ef7b6db63834a3ab67616d0000b27313c40d09756d267c10dab09cab67616d0000b2734c79d5ec52a6d0302f3add25",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/34e349512b0e636fa3df4c2206969386cb92dc83ab67616d0000b273072e9faef2ef7b6db63834a3ab67616d0000b27313c40d09756d267c10dab09cab67616d0000b2734c79d5ec52a6d0302f3add25",
                    "width": 60
                }
            ],
            "name": "new new new",
            "owner": {
                "display_name": "Mihir Samdarshi",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/123411097"
                },
                "href": "https://api.spotify.com/v1/users/123411097",
                "id": "123411097",
                "type": "user",
                "uri": "spotify:user:123411097"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "MzEsMTQyOGVjZTkzMDc3ZTFmM2JmMDc5MGNkMWFmZTFkNTMyZGI4NGE0NA==",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/7zt6XcebGDPj9weCyjbcSf/tracks",
                "total": 1768
            },
            "type": "playlist",
            "uri": "spotify:playlist:7zt6XcebGDPj9weCyjbcSf"
        },
        {
            "collaborative": false,
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/3bdLrIgRSwO6q7x3cBDNkj"
            },
            "href": "https://api.spotify.com/v1/playlists/3bdLrIgRSwO6q7x3cBDNkj",
            "id": "3bdLrIgRSwO6q7x3cBDNkj",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/274280f8c875eadbd0c08bf6bf48bf41803c055eab67616d0000b2731dbcbe3d662ed70f27c1286bab67616d0000b273c5649add07ed3720be9d5526ab67616d0000b273f54b99bf27cda88f4a7403ce",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/274280f8c875eadbd0c08bf6bf48bf41803c055eab67616d0000b2731dbcbe3d662ed70f27c1286bab67616d0000b273c5649add07ed3720be9d5526ab67616d0000b273f54b99bf27cda88f4a7403ce",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/274280f8c875eadbd0c08bf6bf48bf41803c055eab67616d0000b2731dbcbe3d662ed70f27c1286bab67616d0000b273c5649add07ed3720be9d5526ab67616d0000b273f54b99bf27cda88f4a7403ce",
                    "width": 60
                }
            ],
            "name": "favorite artists",
            "owner": {
                "display_name": "Mihir Samdarshi",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/123411097"
                },
                "href": "https://api.spotify.com/v1/users/123411097",
                "id": "123411097",
                "type": "user",
                "uri": "spotify:user:123411097"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "MTAyMCwwOTkyMzM2YTEyZmRhYWFlMmE1NDFiZTBkYzI5ZDViMDI3MTQzMTdi",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/3bdLrIgRSwO6q7x3cBDNkj/tracks",
                "total": 905
            },
            "type": "playlist",
            "uri": "spotify:playlist:3bdLrIgRSwO6q7x3cBDNkj"
        },
        {
            "collaborative": false,
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/6G1wrNVfTlxYEW5gdzCsCg"
            },
            "href": "https://api.spotify.com/v1/playlists/6G1wrNVfTlxYEW5gdzCsCg",
            "id": "6G1wrNVfTlxYEW5gdzCsCg",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d0000b273072e9faef2ef7b6db63834a3ab67616d0000b27313c40d09756d267c10dab09cab67616d0000b27336335ee5c86feb6b1ea964c9ab67616d0000b2734c79d5ec52a6d0302f3add25",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d0000b273072e9faef2ef7b6db63834a3ab67616d0000b27313c40d09756d267c10dab09cab67616d0000b27336335ee5c86feb6b1ea964c9ab67616d0000b2734c79d5ec52a6d0302f3add25",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d0000b273072e9faef2ef7b6db63834a3ab67616d0000b27313c40d09756d267c10dab09cab67616d0000b27336335ee5c86feb6b1ea964c9ab67616d0000b2734c79d5ec52a6d0302f3add25",
                    "width": 60
                }
            ],
            "name": "shit i really like",
            "owner": {
                "display_name": "Mihir Samdarshi",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/123411097"
                },
                "href": "https://api.spotify.com/v1/users/123411097",
                "id": "123411097",
                "type": "user",
                "uri": "spotify:user:123411097"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "NDI1LDZlNzNmODBhMjI4ZDU5MzQ2MGVhZTc1MTEzYzZhMDg5NzcyZTQ1NzY=",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/6G1wrNVfTlxYEW5gdzCsCg/tracks",
                "total": 1275
            },
            "type": "playlist",
            "uri": "spotify:playlist:6G1wrNVfTlxYEW5gdzCsCg"
        },
        {
            "collaborative": false,
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/3qcApm9ubHd20znliLR2B8"
            },
            "href": "https://api.spotify.com/v1/playlists/3qcApm9ubHd20znliLR2B8",
            "id": "3qcApm9ubHd20znliLR2B8",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/96be0d7941fbafb03e457b23db5783f8a2929098ab67616d0000b2737f995c73858d8364e368b84dab67616d0000b2739f2439fb26af62ec95bddd4dab67616d0000b273dd7eaf261543814a6d715d67",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/96be0d7941fbafb03e457b23db5783f8a2929098ab67616d0000b2737f995c73858d8364e368b84dab67616d0000b2739f2439fb26af62ec95bddd4dab67616d0000b273dd7eaf261543814a6d715d67",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/96be0d7941fbafb03e457b23db5783f8a2929098ab67616d0000b2737f995c73858d8364e368b84dab67616d0000b2739f2439fb26af62ec95bddd4dab67616d0000b273dd7eaf261543814a6d715d67",
                    "width": 60
                }
            ],
            "name": "finals szn",
            "owner": {
                "display_name": "Natalie Waite",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/1251212195"
                },
                "href": "https://api.spotify.com/v1/users/1251212195",
                "id": "1251212195",
                "type": "user",
                "uri": "spotify:user:1251212195"
            },
            "primary_color": null,
            "public": false,
            "snapshot_id": "MTU5LDMwOTUwMDlhNjIzYTFlNWIzNjBmNmIzNjkxMDE1MTdhOTEwMmFmM2U=",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/3qcApm9ubHd20znliLR2B8/tracks",
                "total": 108
            },
            "type": "playlist",
            "uri": "spotify:playlist:3qcApm9ubHd20znliLR2B8"
        },
        {
            "collaborative": false,
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/3cG0NOvsCTAq0391ctZQqg"
            },
            "href": "https://api.spotify.com/v1/playlists/3cG0NOvsCTAq0391ctZQqg",
            "id": "3cG0NOvsCTAq0391ctZQqg",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d0000b2734c79d5ec52a6d0302f3add25ab67616d0000b2736112e0e28ab5dc12f4a4210eab67616d0000b273671e89ee252f87d5084f0d42ab67616d0000b273a7201678179a6e49570a3649",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d0000b2734c79d5ec52a6d0302f3add25ab67616d0000b2736112e0e28ab5dc12f4a4210eab67616d0000b273671e89ee252f87d5084f0d42ab67616d0000b273a7201678179a6e49570a3649",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d0000b2734c79d5ec52a6d0302f3add25ab67616d0000b2736112e0e28ab5dc12f4a4210eab67616d0000b273671e89ee252f87d5084f0d42ab67616d0000b273a7201678179a6e49570a3649",
                    "width": 60
                }
            ],
            "name": "how to get thruuuu finals",
            "owner": {
                "display_name": "Natalie Waite",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/1251212195"
                },
                "href": "https://api.spotify.com/v1/users/1251212195",
                "id": "1251212195",
                "type": "user",
                "uri": "spotify:user:1251212195"
            },
            "primary_color": null,
            "public": false,
            "snapshot_id": "MjAxLDk1MmIzNmNiMzhlOTZmYzIwZDJiMTM4MjA3ZGNjNmZiMjFkNWJhNzI=",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/3cG0NOvsCTAq0391ctZQqg/tracks",
                "total": 118
            },
            "type": "playlist",
            "uri": "spotify:playlist:3cG0NOvsCTAq0391ctZQqg"
        },
        {
            "collaborative": false,
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/37i9dQZEVXcHUjGPohFrdd"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZEVXcHUjGPohFrdd",
            "id": "37i9dQZEVXcHUjGPohFrdd",
            "images": [
                {
                    "height": null,
                    "url": "https://pl.scdn.co/images/pl/default/7dbfe2dc613bd7a9fec1a70407d2858513278231",
                    "width": null
                }
            ],
            "name": "Discover Weekly",
            "owner": {
                "display_name": "Spotify",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/spotify"
                },
                "href": "https://api.spotify.com/v1/users/spotify",
                "id": "spotify",
                "type": "user",
                "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": false,
            "snapshot_id": "MjYxNDMyMDAsMDAwMDAwMDAyZDBiZmZhZTVmYzA5YmJiMDM4MjM1NDkyYWNhYTk5YQ==",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/37i9dQZEVXcHUjGPohFrdd/tracks",
                "total": 30
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZEVXcHUjGPohFrdd"
        },
        {
            "collaborative": false,
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/0xt63vcfSFSZ4xcKRsdRFJ"
            },
            "href": "https://api.spotify.com/v1/playlists/0xt63vcfSFSZ4xcKRsdRFJ",
            "id": "0xt63vcfSFSZ4xcKRsdRFJ",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d0000b2732d86f76b4e373e312f3662b5ab67616d0000b273563fcb923f6da44177096a83ab67616d0000b273a8f891544f127f6b6ff9ea02ab67616d0000b273f5c584384450e0e01356a9ac",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d0000b2732d86f76b4e373e312f3662b5ab67616d0000b273563fcb923f6da44177096a83ab67616d0000b273a8f891544f127f6b6ff9ea02ab67616d0000b273f5c584384450e0e01356a9ac",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d0000b2732d86f76b4e373e312f3662b5ab67616d0000b273563fcb923f6da44177096a83ab67616d0000b273a8f891544f127f6b6ff9ea02ab67616d0000b273f5c584384450e0e01356a9ac",
                    "width": 60
                }
            ],
            "name": "chill w dat",
            "owner": {
                "display_name": "Natalie Waite",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/1251212195"
                },
                "href": "https://api.spotify.com/v1/users/1251212195",
                "id": "1251212195",
                "type": "user",
                "uri": "spotify:user:1251212195"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "Nzg3LGU0ZGIwZjgyNmI0MmMyNWRhZmMxMGM3YWUzN2Q2MmIwNGYyODg5NTU=",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/0xt63vcfSFSZ4xcKRsdRFJ/tracks",
                "total": 377
            },
            "type": "playlist",
            "uri": "spotify:playlist:0xt63vcfSFSZ4xcKRsdRFJ"
        },
        {
            "collaborative": false,
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/3jXQJ6HXUfbYxARyN2DaSZ"
            },
            "href": "https://api.spotify.com/v1/playlists/3jXQJ6HXUfbYxARyN2DaSZ",
            "id": "3jXQJ6HXUfbYxARyN2DaSZ",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d0000b2731ec783d9ef600486106be530ab67616d0000b273626745b3aa04899001a924adab67616d0000b273da5e3b0c88879a32dc3f23b7ca02625b4130d1ed5b7eaff215ab54c42db0c14a",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d0000b2731ec783d9ef600486106be530ab67616d0000b273626745b3aa04899001a924adab67616d0000b273da5e3b0c88879a32dc3f23b7ca02625b4130d1ed5b7eaff215ab54c42db0c14a",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d0000b2731ec783d9ef600486106be530ab67616d0000b273626745b3aa04899001a924adab67616d0000b273da5e3b0c88879a32dc3f23b7ca02625b4130d1ed5b7eaff215ab54c42db0c14a",
                    "width": 60
                }
            ],
            "name": "党",
            "owner": {
                "display_name": "Mihir Samdarshi",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/123411097"
                },
                "href": "https://api.spotify.com/v1/users/123411097",
                "id": "123411097",
                "type": "user",
                "uri": "spotify:user:123411097"
            },
            "primary_color": null,
            "public": false,
            "snapshot_id": "MTc5LGU3ZTAwMDJjODdiNTUxZDAzZDM1Y2NiYWNkYmJiNmYzMGRiMzkyOWU=",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/3jXQJ6HXUfbYxARyN2DaSZ/tracks",
                "total": 127
            },
            "type": "playlist",
            "uri": "spotify:playlist:3jXQJ6HXUfbYxARyN2DaSZ"
        },
        {
            "collaborative": false,
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/7Azn8R8udy7T4nVG1mC6yi"
            },
            "href": "https://api.spotify.com/v1/playlists/7Azn8R8udy7T4nVG1mC6yi",
            "id": "7Azn8R8udy7T4nVG1mC6yi",
            "images": [
                {
                    "height": null,
                    "url": "https://pl.scdn.co/images/pl/default/f84594de929a54df66117d8edc69b7a80953a4a7",
                    "width": null
                }
            ],
            "name": "Cashmere Cat Complete",
            "owner": {
                "display_name": "Cashmere Cat",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/hfinal"
                },
                "href": "https://api.spotify.com/v1/users/hfinal",
                "id": "hfinal",
                "type": "user",
                "uri": "spotify:user:hfinal"
            },
            "primary_color": null,
            "public": false,
            "snapshot_id": "MjQwOCwxMDkxNjA4Y2Q2MmYyMjg2MDYzYmFmMzFmMGFmMTdkYzIzNmY3ZmM0",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/7Azn8R8udy7T4nVG1mC6yi/tracks",
                "total": 33
            },
            "type": "playlist",
            "uri": "spotify:playlist:7Azn8R8udy7T4nVG1mC6yi"
        },
        {
            "collaborative": false,
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/2uhpfOIVrJIkl5kb4ujXHc"
            },
            "href": "https://api.spotify.com/v1/playlists/2uhpfOIVrJIkl5kb4ujXHc",
            "id": "2uhpfOIVrJIkl5kb4ujXHc",
            "images": [
                {
                    "height": null,
                    "url": "https://pl.scdn.co/images/pl/default/86109164688ee0d2bf1955e3bb85ca36e60febb6",
                    "width": null
                }
            ],
            "name": "Galantis FM",
            "owner": {
                "display_name": "Galantis",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/galantis"
                },
                "href": "https://api.spotify.com/v1/users/galantis",
                "id": "galantis",
                "type": "user",
                "uri": "spotify:user:galantis"
            },
            "primary_color": null,
            "public": false,
            "snapshot_id": "MTk1OCw4NmNjOTk2NzU2YmI2ZTRjNzM5OGNkZjdiMmJjZGExYmZjOGYyZDkx",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/2uhpfOIVrJIkl5kb4ujXHc/tracks",
                "total": 67
            },
            "type": "playlist",
            "uri": "spotify:playlist:2uhpfOIVrJIkl5kb4ujXHc"
        },
        {
            "collaborative": false,
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/6AvLNaeJ7qeF1Ur1kNoiXT"
            },
            "href": "https://api.spotify.com/v1/playlists/6AvLNaeJ7qeF1Ur1kNoiXT",
            "id": "6AvLNaeJ7qeF1Ur1kNoiXT",
            "images": [
                {
                    "height": null,
                    "url": "https://pl.scdn.co/images/pl/default/735b64173c646fcf5d170d237cc9c3dc35e73d3d",
                    "width": null
                }
            ],
            "name": "Diplo and Friends Radio",
            "owner": {
                "display_name": "Diplo",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/diplomaddecent"
                },
                "href": "https://api.spotify.com/v1/users/diplomaddecent",
                "id": "diplomaddecent",
                "type": "user",
                "uri": "spotify:user:diplomaddecent"
            },
            "primary_color": null,
            "public": false,
            "snapshot_id": "MzMyMSwxZTNhNWNjMDMyMmVhYWI0NmRjNDdlZThkMTVjZDg2OTI0ZDgyY2Nm",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/6AvLNaeJ7qeF1Ur1kNoiXT/tracks",
                "total": 158
            },
            "type": "playlist",
            "uri": "spotify:playlist:6AvLNaeJ7qeF1Ur1kNoiXT"
        },
        {
            "collaborative": false,
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWSfMe9z89s9B"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSfMe9z89s9B",
            "id": "37i9dQZF1DWSfMe9z89s9B",
            "images": [
                {
                    "height": null,
                    "url": "https://i.scdn.co/image/ab67706f00000002cf9db0004401dc5b13019381",
                    "width": null
                }
            ],
            "name": "Alternative R&B",
            "owner": {
                "display_name": "Spotify",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/spotify"
                },
                "href": "https://api.spotify.com/v1/users/spotify",
                "id": "spotify",
                "type": "user",
                "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": false,
            "snapshot_id": "MTU3MTQzNzU5OCwwMDAwMDBhMjAwMDAwMTZkZTBmYWQ2MGQwMDAwMDE2ZDAwYWVlMmU3",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSfMe9z89s9B/tracks",
                "total": 140
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWSfMe9z89s9B"
        },
        {
            "collaborative": false,
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX44t7uCdkV1A"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX44t7uCdkV1A",
            "id": "37i9dQZF1DX44t7uCdkV1A",
            "images": [
                {
                    "height": null,
                    "url": "https://i.scdn.co/image/ab67706f00000002d1ab7dab89e2ef6722f23e37",
                    "width": null
                }
            ],
            "name": "Viral Hits",
            "owner": {
                "display_name": "Spotify",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/spotify"
                },
                "href": "https://api.spotify.com/v1/users/spotify",
                "id": "spotify",
                "type": "user",
                "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": false,
            "snapshot_id": "MTU2NzY3NjM4OSwwMDAwMDA0YTAwMDAwMTY1N2JmNTkzZTkwMDAwMDE2ZDAwY2I1OGI5",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX44t7uCdkV1A/tracks",
                "total": 25
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX44t7uCdkV1A"
        }
    ],
    "limit": 20,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 15
});

export {
    apiHost,
    fetchUserPlaylists,
};
