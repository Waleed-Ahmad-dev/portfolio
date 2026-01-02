# Sentinel's Journal

## 2025-02-18 - [React Hook Conditional Execution]
**Vulnerability:** Conditional execution of `useForm` hook in `ContactForm.tsx` based on environment variable presence.
**Learning:** React hooks must be called in the same order every render. Conditional returns before hook calls violate this and can lead to unstable application state or errors that might be exploitable or cause denial of service.
**Prevention:** Always call hooks at the top level of the component. Handle conditional logic (like missing env vars) inside the render return or useEffects, not by returning early before hook calls.
