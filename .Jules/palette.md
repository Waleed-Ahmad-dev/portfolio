## 2026-01-02 - Unifying Focus and Hover States
**Learning:** Custom hover effects (like Framer Motion layout animations) often leave keyboard users behind with default, unstyled focus rings.
**Action:** Always map `onFocus` to the same state setter as `onMouseEnter` when building custom interactive components. This gives keyboard users the same "delight" as mouse users.
## 2026-01-02 - Missing Skip Link
**Learning:** Even modern, polished sites often miss the most basic "Skip to content" link, forcing keyboard users to tab through entire navigations.
**Action:** Always check `layout.tsx` for a skip link as the very first accessibility check. It's a high-impact, low-effort win.
