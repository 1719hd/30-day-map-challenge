// src/components/Breadcrumbs.ts
import { MarathonRouter } from '../router';

export function renderBreadcrumbs(year?: number, dayNumber?: number): string {
  const basePath = MarathonRouter.getBasePath();
  
  let html = `<nav class="breadcrumbs"><a href="${basePath}">Home</a>`;
  
  if (year) {
    html += ` <span class="sep">/</span> <a href="${basePath}${year}">${year}</a>`;
  }
  
  if (dayNumber) {
    const formattedDay = `Day ${String(dayNumber).padStart(2, '0')}`;
    html += ` <span class="sep">/</span> <span class="current">${formattedDay}</span>`;
  }
  
  html += `</nav>`;
  return html;
}