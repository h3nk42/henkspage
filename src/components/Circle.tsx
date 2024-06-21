"use client";

import { FC } from "react";

export const Circle: FC<{ size?: number }> = (props) => {
  const { size = 24 } = props;
  return (
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`rounded-full bg-gradient-to-br from-red-200 to-blue-900`}
    />
  );
};
