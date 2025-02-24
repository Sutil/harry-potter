import React, { ReactNode } from "react";

export const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full md:w-1/2 mx-auto">{children}</div>
    </div>
  );
};
