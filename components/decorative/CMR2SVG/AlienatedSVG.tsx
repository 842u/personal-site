import { twMerge } from 'tailwind-merge';

import { SvgPathData } from '@/types';

import { CMR2SVG } from './CMR2SVG';

export const pathData: SvgPathData = {
  viewBox: '0 0 200 200',
  path: `M51 130c17 29 48 55 48 55s35-28 52-59c15-27 14-60 14-60s-3-24-19-38-46-13-46-13-31-1-47 13C36 42 35 69 35 69s0 34 16 61Zm21 12s14 18 27 18c15 0 28-18 28-18m-62 3s5-1 7-3c3-3 3-7 3-7m50 0s0 5 3 7c2 3 6 3 6 3m-74-30c11 10 31 11 31 11s-2-18-13-28c-10-9-30-9-30-9s2 17 12 26Zm78 2c-10 9-29 9-30 9 0 0 2-18 13-28 10-9 30-9 30-9s-2 19-13 28Z`,
  pathId: 'alienated',
};

type AlienatedSVGProps = {
  className?: string;
};

export function AlienatedSVG({ className }: AlienatedSVGProps) {
  return (
    <CMR2SVG
      instantStart
      animationDuration={15}
      characterRotation="0"
      characterSpacing={0.09}
      className={twMerge(
        'fill-dark-lighter text-[5px] dark:fill-light-darker',
        className,
      )}
      pathId={pathData.pathId}
      pathShape={pathData.path}
      text="kamil bażanow "
      textRepetition={12}
      viewBox={pathData.viewBox}
    />
  );
}
