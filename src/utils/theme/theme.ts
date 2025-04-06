import React, { createContext, useContext, useState, ReactNode } from "react";

export const lightTheme = {
  background: "#ffffff",
  color: "#000000",
  primary: "#1d4ed8",
};

export const darkTheme = {
  background: "#1a1a1a",
  color: "#ffffff",
  primary: "#3b82f6",
};

export type ThemeType = typeof lightTheme;
