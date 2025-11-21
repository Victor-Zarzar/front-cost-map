'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import LinearProgress from '@mui/material/LinearProgress';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { NextAppProvider } from '@toolpad/core/nextjs';
import * as React from 'react';
import BRANDING from './branding';
import DashboardTheme from './dashboard-theme';
import NAVIGATION from './routes';

type LayoutProviderProps = {
    children: React.ReactNode;
};

export default function LayoutProvider({ children }: LayoutProviderProps) {
    return (
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <NextAppProvider navigation={NAVIGATION} branding={BRANDING} theme={DashboardTheme}>
                <React.Suspense fallback={<LinearProgress />}>
                    <DashboardLayout sidebarExpandedWidth={200}>{children}</DashboardLayout>
                </React.Suspense>
            </NextAppProvider>
        </AppRouterCacheProvider>
    );
}
