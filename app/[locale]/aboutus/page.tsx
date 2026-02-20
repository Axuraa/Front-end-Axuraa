'use client';

import React, { useEffect } from 'react';
import AboutUs from "@/components/pages/AboutUs/AboutUs"
import { getCurrentLanguage } from "@/service/ReadLanguages/ReadLanguages"

export default function AboutUsPage() {
    useEffect(() => {
        const langInfo = getCurrentLanguage();
        console.log('AboutUs Page - Detected Language:', langInfo.language);
        console.log('AboutUs Page - Language Info:', langInfo);
    }, []);

    return (
        <AboutUs />
    );
}