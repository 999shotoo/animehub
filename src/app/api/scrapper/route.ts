import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function GET(req: NextRequest) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://books.toscrape.com/');
  const data = await page.evaluate(() => {
    // Extract data from the page
    const elements = Array.from(document.querySelectorAll('.product_pod'));
    const responsse = elements.map((element: any) => ({
        title: element.querySelector('h3 a').getAttribute('title'),
    }));
    return responsse;
  });
  await browser.close();
  return NextResponse.json(data);
}