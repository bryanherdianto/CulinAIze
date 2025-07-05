'use client';

import { usePathname } from 'next/navigation';
import { ThemeProvider } from '@/components/theme-provider';

const forceLightRoutes = ['/', '/about', '/contact', '/privacy', '/terms', '/team'];

export function ConditionalThemeWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const isForceLight = forceLightRoutes.includes(pathname);

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            forcedTheme={isForceLight ? 'light' : undefined}
        >
            {children}
        </ThemeProvider>
    );
}