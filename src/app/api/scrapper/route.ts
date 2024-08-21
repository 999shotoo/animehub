import { NextRequest, NextResponse } from 'next/server';
import { JSDOM } from 'jsdom';

export async function GET(req: NextRequest) {
  const ress = await fetch("https://hianime.to/home");
  const html = await ress.text();

  const dom = new JSDOM(html);
  const document = dom.window.document;
  const swiperSlides = Array.from(document.querySelectorAll(".swiper-slide.item-qtip"));
  const data = swiperSlides.map((slide) => ({
    id: slide.querySelector("a")?.getAttribute("href")?.split("/").pop(),
    title: slide.querySelector(".film-title")?.textContent,
    image: slide.querySelector("img")?.getAttribute("data-src"),
  }));
  return NextResponse.json({ data });
}