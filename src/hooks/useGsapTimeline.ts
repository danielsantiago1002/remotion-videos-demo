import { useEffect, useRef } from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { useGSAP } from "@gsap/react";

export const useGsapTimeline = <T extends HTMLElement>(
  gsapTimelineFactory: () => gsap.core.Timeline,
) => {
  const animationScopeRef = useRef<T>(null);
  const timelineRef = useRef<gsap.core.Timeline>(null);
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  useGSAP(
    () => {
      timelineRef.current = gsapTimelineFactory();
      timelineRef.current.pause();
    },
    { scope: animationScopeRef },
  );

  useEffect(() => {
    if (timelineRef.current) {
      timelineRef.current.seek(frame / fps);
    }
  }, [frame, fps]);

  return animationScopeRef;
};
