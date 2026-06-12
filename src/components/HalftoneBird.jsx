"use client";

import { useEffect, useState } from "react";

const frames = [
`                'zBB.
                 ,BBBBB.
              zBBBBBBBBBB
                vvBBBBB""BB.
                 \`BBBBBwwBBoo              .A,
A,                BBBBBBBBBBB,           dBBB!
BBo,.              'BBBBB  VBBo       dBBBBBP\`
VBBBBBo,            BBBBB.    '   dBBBBBBBBP\`
'VBBBBBBBBBBBo,.   ,BBBBBBBR.  dBBBBBBBBBP\`
 IBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBP\`
  'VBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBP\`
    'VBBBBBBBBBBBBBBBBBBBBBBBBBBBBBP\`
      'VBBBBBBBBBBBBBBBBBBBBBBBBBBP\`
         \`'BBBBBBBBBBBBBBBBBBBBBP\`
              \`'BBBBBBBBBBBBP'\`
                 \`BBBBBBBBP\`
                  >BBBB0P\`
             .oIBBBBBBP\`
          .oPPBBBBP'\`
       .zoBBBBBBBB\`
            \`ZBP\`
            '\``,

`                'zBB.
                 ,BBBBB.
              zBBBBBBBBBB
                vvBBBBB""BB.
                 \`BBBBBwwBBoo             .A,
A,                BBBBBBBBBBB,         dBBBB!
BBo,.              'BBBBB  VBBo      dBBBBBP\`
VBBBBBo,            BBBBB.      ' dBBBBBBBBP\`
'VBBBBBBBBBBBo,.   ,BBBBBBBR. dBBBBBBBBBP\`
 IBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBP\`
  'VBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBP\`
    'VBBBBBBBBBBBBBBBBBBBBBBBBBBBBBP\`
      'VBBBBBBBBBBBBBBBBBBBBBBBBBBP\`
         \`'BBBBBBBBBBBBBBBBBBBBBP\`
              \`'BBBBBBBBBBBBP'\`
                 \`BBBBBBBBP\`
                  >BBBB0P\`
             .oIBBBBBBP\`
          .oPPBBBBP'\`
       .zoBBBBBBBB\`
            \`ZBP\`
            '\``,

`                'zBB.
                 ,BBBBB.
              zBBBBBBBBBB
                vvBBBBB""BB.
                 \`BBBBBwwBBoo               .A,
A,                BBBBBBBBBBB,            dBBB!
BBo,.              'BBBBB  VBBo        dBBBBBP\`
VBBBBBo,            BBBBB.      '   dBBBBBBBBP\`
'VBBBBBBBBBBBo,.   ,BBBBBBBR. dBBBBBBBBBP\`
 IBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBP\`
  'VBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBP\`
    'VBBBBBBBBBBBBBBBBBBBBBBBBBBBBBP\`
      'VBBBBBBBBBBBBBBBBBBBBBBBBBBP\`
         \`'BBBBBBBBBBBBBBBBBBBBBP\`
              \`'BBBBBBBBBBBBP'\`
                 \`BBBBBBBBP\`
                  >BBBB0P\`
             .oIBBBBBBP\`
          .oPPBBBBP'\`
       .zoBBBBBBBB\`
            \`ZBP\`
            '\``,
];

export default function HalftoneBird() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % frames.length);
    }, 180);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex items-center justify-center bg-black py-20 overflow-hidden">
      <pre
        className="
          text-white
          text-[7px]
          md:text-[10px]
          leading-[0.8]
          font-mono
          select-none
          whitespace-pre
          animate-pulse
        "
      >
        {frames[frame]}
      </pre>
    </section>
  );
}