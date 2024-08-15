import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider, Track } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

export default function Player1(props: any) {
    const data = props.data;
    const url = data.sources[0].url;
    const thumbnail = data.tracks.find((tracks: any) => tracks.kind === 'thumbnails');
    const captions = data.tracks.filter((track: any) => track.kind === 'captions');
    return (
        <>
            <MediaPlayer src={url} className='h-[80vh] mt-10 md:mt-0 md:h-[100vh]'>
                <MediaProvider />
                {captions.map((track: any, index: any) => (
                <Track
                    key={index}
                    src={track.file}
                    kind={track.kind}
                    label={track.label}
                />
                ))}
                <DefaultVideoLayout thumbnails={thumbnail.file} icons={defaultLayoutIcons} />
            </MediaPlayer>
        </>
    )
}