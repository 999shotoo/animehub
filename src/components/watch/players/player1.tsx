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
            <div className="flex justify-center items-center h-[90vh] md:h-full">
                <MediaPlayer
                    src={url.url}
                    className='h-[40vh] md:h-[100vh] w-full md:w-4/5'
                >
                    <MediaProvider />
                    <DefaultVideoLayout icons={defaultLayoutIcons} />
                </MediaPlayer>
            </div>
        </>
    )
}