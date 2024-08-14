import { createElement } from "./createElement";

export function createContact(tag, href, imgSrc, textContent, classes) {
  const link = createElement(tag, [classes[0]], '', { href });
  const img = createElement('img', [classes[1]], '', { src: imgSrc });
  const text = createElement('h4', [classes[2]], textContent);
  link.append(img, text);
  return link;
}