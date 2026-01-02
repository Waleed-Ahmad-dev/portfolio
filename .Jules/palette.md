## 2026-01-02 - Unifying Focus and Hover States
**Learning:** Custom hover effects (like Framer Motion layout animations) often leave keyboard users behind with default, unstyled focus rings.
**Action:** Always map `onFocus` to the same state setter as `onMouseEnter` when building custom interactive components. This gives keyboard users the same "delight" as mouse users.
