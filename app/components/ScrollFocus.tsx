"use client";

import {
  ReactNode,
  useEffect,
  useRef,
} from "react";

type ScrollFocusProps = {
  children: ReactNode;
};

export default function ScrollFocus({
  children,
}: ScrollFocusProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const focusableElements = Array.from(
      container.querySelectorAll<HTMLElement>(
        "[data-scroll-focus]"
      )
    );

    const navLinks = Array.from(
      container.querySelectorAll<HTMLAnchorElement>(
        ".about-section-nav a[data-nav-target]"
      )
    );

    if (focusableElements.length === 0) {
      return;
    }

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let animationFrame = 0;

    const updateFocus = () => {
      if (reducedMotionQuery.matches) {
        focusableElements.forEach((element) => {
          element.classList.remove("is-focused");
          element.classList.add("is-visible");
        });

        navLinks.forEach((link) => {
          link.classList.remove("is-active");
        });

        return;
      }

      const viewportCenter = window.innerHeight / 2;

      let closestElement: HTMLElement | null = null;
      let closestDistance = Number.POSITIVE_INFINITY;

      focusableElements.forEach((element) => {
        const rect = element.getBoundingClientRect();

        const elementCenter =
          rect.top + rect.height / 2;

        const distance = Math.abs(
          elementCenter - viewportCenter
        );

        const isNearViewport =
          rect.bottom > 70 &&
          rect.top < window.innerHeight - 70;

        if (isNearViewport) {
          element.classList.add("is-visible");
        } else {
          element.classList.remove("is-visible");
        }

        if (
          isNearViewport &&
          distance < closestDistance
        ) {
          closestDistance = distance;
          closestElement = element;
        }
      });

      focusableElements.forEach((element) => {
        if (element === closestElement) {
          element.classList.add("is-focused");
        } else {
          element.classList.remove("is-focused");
        }
      });

      const activeSection =
        closestElement?.getAttribute(
          "data-scroll-section"
        );

      navLinks.forEach((link) => {
        const target =
          link.getAttribute("data-nav-target");

        if (
          activeSection &&
          target === activeSection
        ) {
          link.classList.add("is-active");
        } else {
          link.classList.remove("is-active");
        }
      });

      animationFrame = 0;
    };

    const requestUpdate = () => {
      if (animationFrame !== 0) {
        return;
      }

      animationFrame = window.requestAnimationFrame(
        updateFocus
      );
    };

    const handleReducedMotionChange = () => {
      requestUpdate();
    };

    window.addEventListener(
      "scroll",
      requestUpdate,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      requestUpdate
    );

    reducedMotionQuery.addEventListener(
      "change",
      handleReducedMotionChange
    );

    requestUpdate();

    return () => {
      window.removeEventListener(
        "scroll",
        requestUpdate
      );

      window.removeEventListener(
        "resize",
        requestUpdate
      );

      reducedMotionQuery.removeEventListener(
        "change",
        handleReducedMotionChange
      );

      if (animationFrame !== 0) {
        window.cancelAnimationFrame(
          animationFrame
        );
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="scroll-focus-root"
    >
      {children}
    </div>
  );
}