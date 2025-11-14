import React, { useState, useEffect, useCallback } from "react";

export default function Gallery({ images = [] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = useCallback((i) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  const prev = useCallback((e) => {
    if (e) e.stopPropagation();
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback((e) => {
    if (e) e.stopPropagation();
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, prev, next]);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-xl shadow-lg">
            <button
              onClick={() => openAt(i)}
              aria-label={`Open image ${i + 1}`}
              className="w-full p-0 bg-transparent text-left"
            >
              <img
                src={src}
                alt={`Screenshot ${i + 1}`}
                className="w-full h-[70vh] md:h-[80vh] object-contain"
                loading="eager"
              />
            </button>
          </div>
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85"
          onClick={close}
        >
          <button
            onClick={(e) => prev(e)}
            aria-label="Previous image"
            className="absolute left-4 text-white text-3xl p-3"
          >
            ‹
          </button>

          <img
            src={images[index]}
            alt={`Screenshot ${index + 1}`}
            style={{ maxHeight: "100vh", maxWidth: "100%", objectFit: "contain", touchAction: "none" }}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => next(e)}
            aria-label="Next image"
            className="absolute right-4 text-white text-3xl p-3"
          >
            ›
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Close viewer"
            className="absolute top-4 right-4 text-white text-xl p-2"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
