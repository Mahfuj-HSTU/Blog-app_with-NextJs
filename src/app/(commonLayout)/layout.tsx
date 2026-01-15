import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>
        This is common layout
      </h1>
      {children}
    </div>
  );
};

export default CommonLayout;