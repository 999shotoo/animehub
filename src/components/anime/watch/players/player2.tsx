import '@vidstack/react/player/styles/base.css';
import '@vidstack/react/player/styles/plyr/theme.css';
import { MediaPlayer, MediaProvider, Poster, Track } from '@vidstack/react';
import { PlyrLayout, plyrLayoutIcons } from '@vidstack/react/player/layouts/plyr';

export default function Player2(props: any) {
    const data = props.data;
    const url = data.sources[0].url;
    const thumbnail = data.tracks.find((tracks: any) => tracks.kind === 'thumbnails');
    const captions = data.tracks.filter((track: any) => track.kind === 'captions');
    return (
        <>
            <MediaPlayer className='h-[90vh] mt-5 md:mt-0 md:h-[100vh]' src={url}>
                <MediaProvider />
                {captions.map((track: any, index: any) => (
                <Track
                    key={index}
                    src={track.file}
                    kind={track.kind}
                    label={track.label}
                />
                ))}
                <PlyrLayout thumbnails={thumbnail.file} icons={plyrLayoutIcons} />
            </MediaPlayer>
        </>
    )
}