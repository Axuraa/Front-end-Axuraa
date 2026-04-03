"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function LocaleSync() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    const segments = pathname.split("/");
    const locale = segments[1] || "en";
    const dir = locale === "ar" ? "rtl" : "ltr";

    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [pathname]);

  return null;
}
