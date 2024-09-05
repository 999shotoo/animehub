"use client";
import { useState } from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Player1 from './players/player1';
import Player2 from './players/player2';
import Link from 'next/link';

export default function PlayerSelector(props: { dubEnabled: boolean; sub: any; dub: any }) {
  const [dub, setDub] = useState(props.dubEnabled);
  const [server, setServer] = useState('Server 1');
  const subSrc = props.sub;
  const dubSrc = props.dub;
  let iframe;

  if (server === 'Server 1') {
    iframe = (
      <Player1 data={dub ? dubSrc : subSrc} />
    );
  } else if (server === 'Server 2') {
    iframe = (
      <Player2 data={dub ? dubSrc : subSrc} />
    );
  } else {
    const embeds = dub ? dubSrc.embeds : subSrc.embeds;
    const embed = embeds.find((embed: { name: string; }) => embed.name === server);
    if (embed) {
      iframe = (
        <iframe
          src={embed.url}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }
  }

  const handleDubChange = (value: boolean) => {
    setDub(value);
  };

  const handleServerChange = (value: string) => {
    setServer(value);
  };
  return (
    <div className="relative w-full ">
      <div className="absolute top-4 right-4 z-10 flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <span>{dub ? 'Dub' : 'Sub'}</span>
              <ChevronDownIcon className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Select Audio</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {props.dubEnabled && (
              <DropdownMenuItem onClick={() => handleDubChange(true)}>Dub</DropdownMenuItem>
            )}
            <DropdownMenuItem onClick={() => handleDubChange(false)}>Sub</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <span>{server}</span>
              <ChevronDownIcon className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Select Server</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleServerChange('Server 1')}>HD-1 (no ads)</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleServerChange('Server 2')}>HD-2 (no ads)</DropdownMenuItem>
            {(dub ? dubSrc.embeds : subSrc.embeds).map((embed: any)=> (
              <DropdownMenuItem key={embed.name} onClick={() => handleServerChange(embed.name)}>{embed.name}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href={dub ? dubSrc.download : subSrc.download} target="_blank" >
          <Button>
            Download
          </Button>
        </Link>

      </div>
      {iframe}
    </div>
  );
}

function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}