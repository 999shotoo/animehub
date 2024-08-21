import { NextRequest, NextResponse } from 'next/server';
import { JSDOM } from 'jsdom';
import { title } from 'process';

export async function GET(req: NextRequest) {

    const ress = await fetch("https://books.toscrape.com/");
    const html = await ress.text();

    const dom = new JSDOM(html);
    const document = dom.window.document;
    const books = Array.from(document.querySelectorAll(".product_pod"));
    const data = books.map((book) => ({
       title: book.querySelector("h3 a")?.getAttribute("title"),
    }));
    return NextResponse.json({data});
}