"use client";
import { useState } from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Player1 from './players/player1';
import Player2 from './players/player2';
import Link from 'next/link';
import { Download } from 'lucide-react';

export default function PlayerSelector(props: { dubEnabled: boolean; sub: any; dub: any }) {
  const [dub, setDub] = useState(props.dubEnabled);
  const [server, setServer] = useState('HD-1 (no ads)');
  const subSrc = props.sub;
  const dubSrc = props.dub;
  let iframe;

  if (server === 'HD-1 (no ads)') {
    iframe = (
      <Player1 data={dub ? dubSrc : subSrc} />
    );
  } else if (server === 'HD-2 (no ads)') {
    iframe = (
      <Player2 data={dub ? dubSrc : subSrc} />
    );
  } else {
    const embeds = dub ? dubSrc.embeds : subSrc.embeds;
    const embed = embeds.find((embed: { name: string; }) => embed.name === server);
    if (embed) {
      iframe = (
        <div className="flex justify-center items-center h-[90vh] md:h-full ">
          <iframe
            src={embed.url}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full md:w-4/5 h-4/5 md:h-full border-none rounded-none mt-10 bg-black"
          />
        </div>
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
            <DropdownMenuItem onClick={() => handleServerChange('HD-1 (no ads)')}>HD-1 (no ads)</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleServerChange('HD-2 (no ads)')}>HD-2 (no ads)</DropdownMenuItem>
            {(dub ? dubSrc.embeds : subSrc.embeds).map((embed: any) => (
              <DropdownMenuItem key={embed.name} onClick={() => handleServerChange(embed.name)}>{embed.name}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {iframe}
      <div className="absolute top-16 right-4 z-10 flex items-center gap-4">
        <Link href={dub ? dubSrc.download : subSrc.download} target="_blank" >
          <Button>
            <Download />
          </Button>
        </Link>
      </div>
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