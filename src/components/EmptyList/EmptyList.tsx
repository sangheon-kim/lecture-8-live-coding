import React from "react";

type EmptyListProps = {
  message?: string;
};

export const EmptyList = (props: EmptyListProps) => {
  const { message } = props;
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
      }}
    >
      {message ?? "데이터가 없습니다."}
    </li>
  );
};
