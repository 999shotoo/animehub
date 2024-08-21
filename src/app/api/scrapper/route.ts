import { NextRequest, NextResponse } from 'next/server';
import { JSDOM } from 'jsdom';

export async function GET(req: NextRequest) {

    const ress = await fetch("https://www.npmjs.com/package/shoto");
    const html = await ress.text();

    const dom = new JSDOM(html);
    const document = dom.window.document;

    const downloads = document.querySelector("._9ba9a726")?.textContent;
    return NextResponse.json({downloads: downloads});
}