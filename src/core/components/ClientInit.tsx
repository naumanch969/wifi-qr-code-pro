'use client';

import { adManager } from "@/core/ads/AdManager";
import { useEffect } from "react";

export const ClientInit = () => {
    useEffect(() => {
        adManager.initialize().catch(console.error);
    }, []);

    return null;
};
