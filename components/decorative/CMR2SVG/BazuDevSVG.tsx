'use client';

import { useEffect, useRef } from 'react';

import { defaultMediaBreakpoints } from '@/components/ui/HorizontalMenu/HorizontalMenu';

import { CMR2SVG } from './CMR2SVG';

const complexPath = {
  viewBox: '0 0 292 57',
  path: `M11 27.1c-2.3-.8-4-2-5-3.6a9.8 9.8 0 0 1-1.7-5.7c0-3.3 1.2-6.1 3.5-8.4C10 7.1 13.2 6 17 6c3.8 0 7 1.2 9.3 3.5 2.4 2.3 3.5 5.1 3.5 8.4 0 2.2-.5 4-1.6 5.6a9.3 9.3 0 0 1-4.9 3.6c2.7.9 4.8 2.3 6.2 4.3 1.4 2 2.1 4.4 2.1 7.1 0 3.8-1.3 7-4 9.6A14.6 14.6 0 0 1 17.1 52c-4.4 0-7.9-1.3-10.6-3.9a13 13 0 0 1-4-9.7c0-3 .7-5.3 2.2-7.3a11 11 0 0 1 6.2-4Zm-1.1-9.5c0 2.1.7 4 2 5.3a7 7 0 0 0 5.3 2.1 7 7 0 0 0 7.1-7.1c0-2.1-.7-3.9-2-5.3a7 7 0 0 0-5.2-2.1 7 7 0 0 0-7.2 7ZM8 38.4c0 1.6.4 3 1.1 4.5a7.8 7.8 0 0 0 3.3 3.4c1.5.8 3 1.2 4.7 1.2a8.6 8.6 0 0 0 9-9c0-2.5-.9-4.7-2.6-6.4a9 9 0 0 0-6.6-2.6 9 9 0 0 0-6.4 2.5A8.7 8.7 0 0 0 8 38.4ZM54 51V40H34.8v-5L55 6h4.4v29h6v5h-6v11H54Zm0-16V14.8L40 35h14Zm45.1 10.8V51H70c0-1.3.1-2.6.6-3.8.8-2 2-4 3.6-6s4-4.2 7.1-6.8c4.8-4 8.1-7.1 9.8-9.5 1.7-2.3 2.5-4.5 2.5-6.6 0-2.2-.7-4-2.3-5.6a8.3 8.3 0 0 0-6-2.2c-2.6 0-4.7.8-6.3 2.5a10 10 0 0 0-2.4 7l-5.6-.6c.4-4.4 1.8-7.7 4.3-10S81.1 6 85.3 6a14 14 0 0 1 10.1 3.6c2.5 2.3 3.8 5.3 3.8 8.8a14 14 0 0 1-1.1 5.3c-.8 1.8-2 3.6-3.7 5.5A90.2 90.2 0 0 1 86 37a93.6 93.6 0 0 0-6.3 5.6c-.9 1-1.7 2-2.3 3h21.8Zm28 5.2v-5.5c-2.5 3.7-6 5.5-10.3 5.5a13 13 0 0 1-5.3-1 8.8 8.8 0 0 1-3.6-2.8c-.8-1.2-1.4-2.5-1.7-4.1a28 28 0 0 1-.3-5.1V18h5.4v17.9c0 2.8.1 4.8.3 5.7a5.8 5.8 0 0 0 2.2 3.4 7 7 0 0 0 4.1 1.3c1.7 0 3.2-.5 4.6-1.3a7 7 0 0 0 3-3.4c.7-1.5 1-3.6 1-6.3V18h5.4v33h-4.8Zm31.4 0v-6h6.2v6h-6.2Zm53.3 0v-4c-2 2.6-5 4-9 4-2.5 0-4.9-.7-7-2a13.7 13.7 0 0 1-5-5.9 22.3 22.3 0 0 1-.2-17.2 12.5 12.5 0 0 1 12-7.9 10.8 10.8 0 0 1 8.9 4.6V6h5.4v45h-5Zm-17.2-16.5c0 4 .9 7 2.6 9a8 8 0 0 0 6.2 3 8 8 0 0 0 6-2.8c1.7-2 2.5-4.9 2.5-8.8 0-4.2-.8-7.4-2.5-9.4s-3.8-3-6.3-3c-2.4 0-4.4 1-6 2.9-1.7 2-2.5 5-2.5 9.1ZM247 40l5.6.7c-.9 3.3-2.5 5.8-5 7.6a14.9 14.9 0 0 1-9.1 2.7c-4.7 0-8.4-1.4-11.2-4.3a16.5 16.5 0 0 1-4.1-12c0-5.3 1.4-9.4 4.1-12.3 2.8-3 6.4-4.4 10.9-4.4 4.3 0 7.8 1.4 10.5 4.3 2.7 3 4.1 7 4.1 12.3V36h-24c.2 3.4 1.2 6 3 7.8a9 9 0 0 0 6.7 2.7c2 0 3.7-.5 5.1-1.5 1.5-1 2.6-2.7 3.4-5Zm-17.9-8.5h18c-.3-2.6-1-4.6-2.1-6-1.7-2-4-3-6.8-3-2.5 0-4.6.8-6.3 2.4a9.6 9.6 0 0 0-2.8 6.6ZM268 51l-12.2-33h5.8l6.8 19.9c.8 2.1 1.5 4.4 2.1 6.7l2-6.3 7.2-20.3h5.6L273 51h-5Z`,
  pathId: 'complex',
};

const simplePath = {
  viewBox: '0 0 960 243',
  path: 'M106.3 129c-7-9.3-38.5-13-38.5-13s29-5.2 34.2-13c4.9-7.3 4.3-17.5 4.3-17.5s-1.8-17.8-12-26.5C83.8 50.2 65 50.5 65 50.5s-19.4.7-30 10c-9.9 8.6-11 25.8-11 25.8s1 12.7 6.8 20.5C36 113.8 65 116 65 116s-32 3.6-38.3 11.5c-7.5 9.5-8.4 23.5-8.4 23.5S18 171.6 29 181.8C41.7 193.4 65.8 195 65.8 195s24.1-2.3 35.2-12.5c12.3-11.3 11.5-30.8 11.5-30.8s.1-14-6.3-22.7ZM242 90.7s1.6-20.8 13.5-31.2c11.2-9.8 32.8-9.3 32.8-9.3s22.6.5 32.7 9.3c11.8 10.3 11.3 29 11.3 29s-.7 16.3-7 24.3c-19.7 24.6-86.8 80.2-86.8 80.2h94m-129.3-.5L203 49.7l-80 109.5h99.8m133.4-70.7L356 163s0 16.5 9 24.5c8.8 7.8 26.8 7.3 26.8 7.3s12.2-.7 19.7-4.8c8.7-4.8 12.8-13.3 12.8-13.3L422.6 89l2 104.3M528.5 173v20.3h20L548 173h-19.5ZM701.8 49.7l2 88.5s0-20-3.3-33.4c-2.2-8.8-7.2-12.7-10-14-7.4-3.7-18-3.8-18-3.8s-21-.4-32.3 13.3c-10.8 13-11.7 40.2-11.7 40.2s1.3 27.9 11.8 40.5c11.9 14.4 33.2 13.8 33.2 13.8s12.5-1.2 17.8-3.8c3.3-1.7 7.7-4.3 9.7-13.3 3-13.5 2.8-34.7 2.8-34.7l-.8 49.8m39.3-49s93.5 0 93.5.2c0 .1 2-29-9.5-43-12-14.4-37.3-13.8-37.3-13.8s-25.6-1-36.5 11.5c-13.5 15.6-13 45.5-13 45.5s1.1 25.8 14.8 39.6c11 11.2 35.2 11 35.2 11s21.4-1.2 33.3-10.3c10.6-8.2 12-24.3 12-24.3m12-71.2 46.7 103.8 47-103.3',
  pathId: 'simple',
};

export default function BazuDevSVG() {
  const windowWidth = useRef(0);

  function windowResizeHandler(event: Event) {
    const windowTarget = event.target as Window;
    windowWidth.current = windowTarget.innerWidth;
  }

  useEffect(() => {
    window.addEventListener('resize', windowResizeHandler);
  }, []);

  const text = '842u.dev ';

  return (
    <>
      {windowWidth.current >= defaultMediaBreakpoints.lg.minWidth ? (
        <CMR2SVG
          animationDuration={30}
          characterRotation="0"
          characterSpacing={0.08}
          className="hidden fill-light-darker text-[3px] dark:text-dark-lighter md:hidden lg:block"
          pathId={complexPath.pathId}
          pathShape={complexPath.path}
          text={text}
          textRepetition={42}
          viewBox={complexPath.viewBox}
        />
      ) : null}
      {windowWidth.current <= defaultMediaBreakpoints.md.minWidth &&
      windowWidth.current >= defaultMediaBreakpoints.sm.minWidth ? (
        <CMR2SVG
          animationDuration={15}
          characterRotation="0"
          characterSpacing={0.1}
          className="hidden fill-light-darker text-2xl dark:text-dark-lighter md:block lg:hidden"
          pathId={`${simplePath.pathId}md`}
          pathShape={simplePath.path}
          text={text}
          textRepetition={17}
          viewBox={simplePath.viewBox}
        />
      ) : null}
      {windowWidth.current <= defaultMediaBreakpoints.sm.minWidth ? (
        <CMR2SVG
          animationDuration={13}
          characterRotation="0"
          characterSpacing={0.1}
          className="fill-light-darker text-3xl dark:text-dark-lighter md:hidden lg:hidden"
          pathId={`${simplePath.pathId}sm`}
          pathShape={simplePath.path}
          text={text}
          textRepetition={15}
          viewBox={simplePath.viewBox}
        />
      ) : null}
    </>
  );
}
