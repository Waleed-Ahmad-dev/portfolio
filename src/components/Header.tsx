'use client';

import React, { memo, useSyncExternalStore } from 'react';
import { Logo } from './header/Logo';
import { DesktopNav } from './header/DesktopNav';
import { MobileNav } from './header/MobileNav';

/** =======================
     *  Hoisted class strings
     *  =======================
*/
const BASE_HEADER_CLS = 'fixed top-0 left-0 z-50 w-full transition-all duration-500';
const SCROLLED_HEADER_CLS =
     `${BASE_HEADER_CLS} bg-background/90 backdrop-blur-lg border-b border-border/30 shadow-sm py-1`;
const TOP_HEADER_CLS =
     `${BASE_HEADER_CLS} bg-transparent py-3`;
const CONTAINER_CLS = 'container mx-auto px-4 flex items-center justify-between';

/** =======================
     *  Scroll subscription with uSES
     *  =======================
     *  - Passive listeners avoid blocking scrolling.
     *  - rAF batches callbacks to the next frame.
     *  - Only toggles when threshold crossing changes (boolean snapshot),
     *    so React bails out when the snapshot is identical.
*/
function useIsScrolled(threshold = 10) {
     const subscribe = (onStoreChange: () => void) => {
          let raf = 0;
          const schedule = () => {
               if (raf) return;
               raf = requestAnimationFrame(() => {
                    raf = 0;
                    onStoreChange();
               });
          };
          const opts = { passive: true } as AddEventListenerOptions;
          window.addEventListener('scroll', schedule, opts);
          window.addEventListener('resize', schedule, opts);

          return () => {
               window.removeEventListener('scroll', schedule);
               window.removeEventListener('resize', schedule);
               if (raf) cancelAnimationFrame(raf);
          };
     };

     const getSnapshot = () => (typeof window !== 'undefined' ? window.scrollY > threshold : false);
     const getServerSnapshot = () => false;

     return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/** Memoized leaves so they don't re-render when header class toggles */
const MemoLogo = memo(Logo);
const MemoDesktopNav = memo(DesktopNav);
const MemoMobileNav = memo(MobileNav);

/**
     * PERF NOTES:
     * - No object/array recreations in render path.
     * - Boolean snapshot + React.memo keeps re-renders minimal.
     * - Exact UI/markup preserved.
*/
const Header = () => {
     const scrolled = useIsScrolled(10); // tweak threshold if needed without affecting design
     const headerClass = scrolled ? SCROLLED_HEADER_CLS : TOP_HEADER_CLS;

     return (
          <header className={headerClass}>
               <div className={CONTAINER_CLS}>
                    <MemoLogo />
                    <MemoDesktopNav />
                    <MemoMobileNav />
               </div>
          </header>
     );
};

export default memo(Header);
