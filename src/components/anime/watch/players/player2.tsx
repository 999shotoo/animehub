import '@vidstack/react/player/styles/base.css';
import '@vidstack/react/player/styles/plyr/theme.css';
import { MediaPlayer, MediaProvider, Poster, Track } from '@vidstack/react';
import { PlyrLayout, plyrLayoutIcons } from '@vidstack/react/player/layouts/plyr';

export default function Player2(props: any) {
    const data = props.data;
    const url = data.sources.find((sources: any) => sources.quality === 'default');
    return (
        <>
            <MediaPlayer className='h-[90vh] mt-5 md:mt-0 md:h-[100vh]' src={url.url}>
                <MediaProvider />
                <PlyrLayout icons={plyrLayoutIcons} />
            </MediaPlayer>
        </>
    )
}