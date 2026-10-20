"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileDown, X, ShieldCheck, AlertCircle, Loader2 } from "lucide-react";

// Cloudflare's always-pass test site key, used only outside production when no key is configured.
const TEST_SITE_KEY = "1x00000000000000000000AA";
const SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
  (process.env.NODE_ENV === "production" ? "" : TEST_SITE_KEY);
const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

type Turnstile = {
  render: (
    el: HTMLElement,
    opts: {
      sitekey: string;
      theme?: "auto" | "light" | "dark";
      callback: (token: string) => void;
      "expired-callback"?: () => void;
      "error-callback"?: () => void;
    }
  ) => string;
  remove: (id: string) => void;
};

declare global {
  interface Window {
    turnstile?: Turnstile;
  }
}

function loadTurnstile(): Promise<Turnstile> {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  return new Promise((resolve, reject) => {
    let script = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      document.head.appendChild(script);
    }
    script.addEventListener("load", () =>
      window.turnstile ? resolve(window.turnstile) : reject(new Error("Turnstile unavailable"))
    );
    script.addEventListener("error", () => reject(new Error("Failed to load captcha")));
  });
}

type Status = "idle" | "verifying" | "downloading" | "done" | "error";

export default function ResumeDownload({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  const close = useCallback(() => {
    setOpen(false);
    setStatus("idle");
    setError(null);
  }, []);

  const download = useCallback(async (token: string) => {
    setStatus("downloading");
    setError(null);
    try {
      const res = await fetch("/api/resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Download failed.");
      }
      const url = URL.createObjectURL(await res.blob());
      const a = document.createElement("a");
      a.href = url;
      a.download = "Waleed-Ahmad-Resume.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      setStatus("done");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Download failed.");
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    if (!open || !SITE_KEY) return;
    let cancelled = false;
    loadTurnstile()
      .then((turnstile) => {
        if (cancelled || !widgetRef.current) return;
        widgetId.current = turnstile.render(widgetRef.current, {
          sitekey: SITE_KEY,
          theme: "auto",
          callback: download,
          "expired-callback": () => setStatus("verifying"),
          "error-callback": () => {
            setError("Captcha failed to load. Please retry.");
            setStatus("error");
          },
        });
      })
      .catch((e: Error) => {
        setError(e.message);
        setStatus("error");
      });
    return () => {
      cancelled = true;
      if (widgetId.current && window.turnstile) window.turnstile.remove(widgetId.current);
      widgetId.current = null;
    };
  }, [open, download]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          className ??
          "inline-flex h-12 items-center justify-center gap-2 border border-border bg-card px-6 font-mono text-xs font-semibold uppercase tracking-wider text-foreground rounded-sm hover-tactile"
        }
      >
        <FileDown size={16} />
        <span>Resume</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="resume-dialog-title"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm bg-card border border-zinc-300 dark:border-zinc-800 rounded-sm p-6 shadow-xl font-mono"
            >
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-zinc-200 dark:border-zinc-800">
                <h2
                  id="resume-dialog-title"
                  className="flex items-center gap-2 text-sm font-bold text-foreground tracking-tight"
                >
                  <ShieldCheck size={15} className="text-emerald-500" />
                  RESUME_DOWNLOAD
                </h2>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close"
                  className="text-zinc-500 hover:text-foreground transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
                Complete the human verification to download the PDF.
              </p>

              {SITE_KEY ? (
                <div ref={widgetRef} className="min-h-[65px] flex justify-center" />
              ) : (
                <p className="text-xs text-red-500">Captcha is not configured.</p>
              )}

              <div className="mt-4 min-h-[18px] text-[11px]">
                {status === "downloading" && (
                  <span className="flex items-center gap-1.5 text-zinc-500">
                    <Loader2 size={12} className="animate-spin" /> PREPARING_FILE...
                  </span>
                )}
                {status === "done" && (
                  <span className="text-emerald-600 dark:text-emerald-400">
                    DOWNLOAD STARTED. THANKS FOR YOUR INTEREST.
                  </span>
                )}
                {status === "error" && error && (
                  <span className="flex items-center gap-1.5 text-red-500">
                    <AlertCircle size={12} /> {error}
                  </span>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
