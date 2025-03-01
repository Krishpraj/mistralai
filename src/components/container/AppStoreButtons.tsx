"use client";
import React from "react";
import AppStoreButton from "./AppStoreButton";
import PlayStoreButton from "./PlayStoreButton";

const AppStoreButtons: React.FC = () => {
  return (
    <div className="flex gap-4 max-md:gap-2 max-sm:flex-col max-sm:gap-2 max-sm:w-full">
      <AppStoreButton />
      <PlayStoreButton />
    </div>
  );
};

export default AppStoreButtons;
