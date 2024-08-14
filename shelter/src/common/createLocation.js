import { createElement } from "./createElement";

export function createLocation(href, imgSrc, textContent, classes) {
  const link = createElement('a', [classes[0]], '', { href, target: '_blank' });
  const img = createElement('img', [classes[1]], '', { src: imgSrc });
  const text = createElement('p', [classes[2]], textContent);
  link.append(img, text);
  return link;
}