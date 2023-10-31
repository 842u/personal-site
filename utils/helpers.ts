import {
  ItemOffset,
  MediaBreakpoints,
  Project,
  ProjectSettings,
} from '@/types';

export function createSlug(text: string) {
  const segments = text
    .trim()
    .replace(/[^A-Za-z0-9\s]/g, ' ')
    .split(' ')
    .filter((part) => !!part);

  const lowerCaseParts = segments.map((part) => part.toLocaleLowerCase());

  const slug = lowerCaseParts.join('-');

  return slug;
}

export function extendArray<T>(array: T[], multiplier: number): T[] {
  if (!multiplier || multiplier === 1 || multiplier < 0) {
    return [...array];
  }

  const fillArray = Array(multiplier).fill(array);

  const extendedArray = fillArray.flat(Infinity);

  return extendedArray;
}

export function createProject(projectSettings: ProjectSettings): Project {
  const { name, description, image, tools } = projectSettings;

  const slug = createSlug(name);

  return { name, description, image, slug, tools };
}

export function scrollToElement(
  container: HTMLElement,
  item: Element,
  behavior: 'smooth' | 'instant',
  offset: ItemOffset,
) {
  if (typeof offset === 'number') {
    const itemXPosition = item?.getBoundingClientRect().x || 0;
    const itemLeftOffset =
      itemXPosition - (offset || 0) - container.getBoundingClientRect().x;

    container.scrollBy({
      behavior,
      left: itemLeftOffset,
    });
  } else if (offset === 'center') {
    item.scrollIntoView({
      behavior,
      block: 'nearest',
      inline: 'center',
    });
  }
}

export function getContainerElementsArray(
  container: HTMLElement,
  querySelector: string,
) {
  const itemsElementsNodeList = container.querySelectorAll(querySelector);

  const itemsElementsArray = Array.from(itemsElementsNodeList);

  return itemsElementsArray;
}

export function getMediaBreakpointOffset(mediaBreakpoints: MediaBreakpoints) {
  const screenWidth = window.innerWidth;
  let breakpointOffset: ItemOffset = 0;

  if (screenWidth < mediaBreakpoints.md.minWidth) {
    breakpointOffset = mediaBreakpoints.sm.offset;
  } else if (
    screenWidth >= mediaBreakpoints.md.minWidth &&
    screenWidth < mediaBreakpoints.lg.minWidth
  ) {
    breakpointOffset = mediaBreakpoints.md.offset;
  } else if (screenWidth >= mediaBreakpoints.lg.minWidth) {
    breakpointOffset = mediaBreakpoints.lg.offset;
  }

  return breakpointOffset;
}

export function getSectorElementsWidth(sectorElements: Element[]) {
  const sectorWidth = sectorElements.reduce(
    (previousWidth, currentElement) =>
      previousWidth + currentElement.getBoundingClientRect().width,

    0,
  );

  return sectorWidth;
}

export function calculateSectorMultiplier(
  container: HTMLElement,
  sectorWidth: number,
) {
  const containerWidth = (container?.getBoundingClientRect().width || 0) * 5;

  const multiplier = Math.ceil(containerWidth / sectorWidth) || 0;

  return multiplier;
}
