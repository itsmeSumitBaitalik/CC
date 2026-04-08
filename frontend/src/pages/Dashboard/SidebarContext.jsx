import { createContext, useContext, useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export const SidebarContext = createContext(null);

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

/** Call this inside any dashboard page to set the topbar content on mount.
 *  @param {{ title: string, subtitle: string, extra?: React.ReactNode }} config
 */
export function useTopbar(config) {
  const { setTopbar } = useSidebar();
  useEffect(() => {
    setTopbar(config);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.title, config.subtitle]);
}

// Use this in any dashboard child page to get the logged-in user
export function useCurrentUser() {
  return useOutletContext();
}
