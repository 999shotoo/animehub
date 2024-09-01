import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider, Track } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { url } from 'inspector';

export default function Player1(props: any) {
    const data = props.data;
    const url = data.sources.find((sources: any) => sources.quality === 'default');
    return (
        <>
            <MediaPlayer src={url.url} className='h-[90vh] mt-8 md:mt-0 md:h-[100vh]'>
                <MediaProvider />
                <DefaultVideoLayout icons={defaultLayoutIcons} />
            </MediaPlayer>
        </>
    )
}