// CardData.ts
import { SectionData } from '@/types/CardData';

export const data: SectionData[] = [
    {
        topUpGames: [
            { title: 'Top Up Games' },
            {
                items: [
                    { id: '1', title: 'Top Up', status: 'active', image: 'https://cdn.prod.website-files.com/65956e2711516206d2d1258f/666f43e449c093ea927ce13b_mobile%20legends%20-%20bang%20bang.webp', screen: 'game1' },
                    { id: '2', title: 'Coming Soon', status: 'close', image: 'https://wallpapers.com/images/featured/pubg-background-vgj7ute2hg0hp8ic.jpg', screen: 'game2' },
                    { id: '3', title: 'Coming Soon', status: 'close', image: 'https://dl.dir.freefiremobile.com/common/web_event/hash/54f31449f5f91cf0cc223cc635cd5952jpg', screen: 'game1' },
                    { id: '4', title: 'Coming Soon', status: 'close', image: 'https://i.ytimg.com/vi/H7NkmC4zY_w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBYFI0V5AeQkjpK-AdxA08FUTeKUQ', screen: 'game2' },
                ],
            },
        ],
    },
    {
        topUpMovies: [
            { title: 'Top Up Movies' },
            {
                items: [
                    { id: '1', title: 'Coming Soon', status: 'close', image: 'https://www.figma.com/community/resource/88692791-d615-4056-80f5-cb1d6f86ed57/thumbnail', screen: 'movie1' },
                    { id: '2', title: 'Coming Soon', status: 'close', image: 'https://cdn6.aptoide.com/imgs/a/f/8/af8a8b13af897c49d130ff240ae4fec1_icon.jpg', screen: 'movie2' },
                    { id: '3', title: 'Coming Soon', status: 'close', image: 'https://cccbic.org/businesses/844-logo.jpg', screen: 'movie1' },
                    { id: '4', title: 'Coming Soon', status: 'close', image: 'https://i.imgur.com/4gLcbSH.png', screen: 'movie2' },
                ],
            },
        ],
    },
];
