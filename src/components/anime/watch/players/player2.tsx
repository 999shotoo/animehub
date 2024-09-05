import '@vidstack/react/player/styles/base.css';
import '@vidstack/react/player/styles/plyr/theme.css';
import { MediaPlayer, MediaProvider, Poster, Track } from '@vidstack/react';
import { PlyrLayout, plyrLayoutIcons } from '@vidstack/react/player/layouts/plyr';

export default function Player2(props: any) {
    const data = props.data;
    const url = data.sources.find((sources: any) => sources.quality === 'default');
    return (
        <>
           <div className="flex justify-center items-center h-[90vh] md:h-full">
            <MediaPlayer  className='h-[40vh] md:h-[100vh] w-full md:w-4/5' src={url.url}>
                <MediaProvider />
                <PlyrLayout icons={plyrLayoutIcons} />
            </MediaPlayer>
            </div>
        </>
    )
}