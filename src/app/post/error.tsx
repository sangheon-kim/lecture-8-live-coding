"use client";
import React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      에러가 발생했어요!!
      <button onClick={() => reset()}>새로고침</button>
    </div>
  );
}
