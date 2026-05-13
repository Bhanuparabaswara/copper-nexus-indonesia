export function CopperVeinBackdrop() {
  return (
    <svg className="absolute inset-x-0 top-24 -z-10 mx-auto h-[56vh] w-full max-w-6xl opacity-80" viewBox="0 0 1200 560" aria-hidden>
      <defs>
        <linearGradient id="oreFace" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(124,74,30,.72)" />
          <stop offset="52%" stopColor="rgba(44,26,0,.74)" />
          <stop offset="100%" stopColor="rgba(14,8,4,.94)" />
        </linearGradient>
        <filter id="veinGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path d="M18 476 C190 306 254 330 348 182 C452 20 584 210 676 142 C796 54 886 240 992 198 C1082 162 1134 314 1184 476 Z" fill="url(#oreFace)" stroke="rgba(184,115,51,.38)" />
      <path d="M176 426 C326 294 386 300 486 230 C584 160 676 222 760 190 C878 146 928 306 1058 276" fill="none" stroke="rgba(255,215,0,.58)" strokeWidth="3" filter="url(#veinGlow)" style={{ animation: "vein-pulse 4.5s ease-in-out infinite" }} />
      <path d="M280 468 C402 354 496 348 620 282 C744 216 830 346 970 312" fill="none" stroke="rgba(0,191,255,.32)" strokeWidth="2" filter="url(#veinGlow)" style={{ animation: "vein-pulse 5.8s ease-in-out infinite" }} />
      <path d="M90 500 C210 420 316 470 440 388 C568 306 648 410 760 350 C890 282 1010 388 1130 330" fill="none" stroke="rgba(184,115,51,.36)" strokeWidth="1.5" />
    </svg>
  );
}
