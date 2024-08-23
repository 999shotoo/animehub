import { NextRequest, NextResponse } from 'next/server';
import { JSDOM } from 'jsdom';

export async function GET(req: NextRequest, res: NextResponse) {
  const url = new URL(req.url);
  const episodeId = url.searchParams.get('epid');

  if (!episodeId) {
    return NextResponse.json({ message: 'Missing episode ID' }, { status: 400 });
  }

  const response = await fetch(`https://hianime.to/ajax//v2/episode/servers?episodeId=${episodeId}`);
  const data = await response.json();
  const html = data.html;

  const dom = new JSDOM(html);
  const serverItems = dom.window.document.querySelectorAll('.server-item');

  const dubServers: { server: number; link: string; name: string }[] = [];
  const subServers: { server: number; link: string; name: string }[] = [];

  serverItems.forEach((item) => {
    const dataId = item.getAttribute('data-id') ?? '';
    const dataType = item.getAttribute('data-type') ?? '';
    const serverId = item.getAttribute('data-server-id') ?? '';
    const serverName = item.querySelector('a.btn')?.textContent ?? '';

    if (dataType === 'dub') {
      dubServers.push({ server: parseInt(serverId, 10), link: `https://hianime.to/ajax//v2/episode/sources?id=${dataId}`, name: serverName });
    } else if (dataType === 'sub') {
      subServers.push({ server: parseInt(serverId, 10), link: `https://hianime.to/ajax//v2/episode/sources?id=${dataId}`, name: serverName });
    }
  });

  const dubLinks = await Promise.all(dubServers.map(async (server) => {
    const response = await fetch(server.link);
    const { link } = await response.json();
    return { server: server.server, link, name: server.name };
  }));
  
  const subLinks = await Promise.all(subServers.map(async (server) => {
    const response = await fetch(server.link);
    const { link } = await response.json();
    return { server: server.server, link, name: server.name };
  }));

  return NextResponse.json({ dub: dubLinks, sub: subLinks });
}