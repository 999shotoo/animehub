
import jsdom from 'jsdom';
import { NextRequest, NextResponse } from 'next/server';

interface Chapter {
  id: string;
  title: string;
  date: string;
}

export async function GET(req: NextRequest, res: NextResponse) {
  const url = 'https://mangasee123.com/manga/Solo-Leveling?LimitChapter=1000';
  const html = await fetch(url).then((res) => res.text());
  const { window } = new jsdom.JSDOM(html);
  const document = window.document;

  const chapters: Chapter[] = [];
  document.querySelectorAll('.ChapterLink').forEach((element) => {
    const id = element.getAttribute('href')?.split('-chapter-')?.[1]?.split('-page-')?.[0] || '';
    const titleElement = element.querySelector('span');
    const title = titleElement?.textContent?.trim() || '';
    const date = element.querySelector('.float-right')?.textContent?.trim() || '';

    chapters.push({
      id,
      title,
      date,
    });
  });

  return NextResponse.json(chapters);
}