'use client';

import DashboardIcon from '@mui/icons-material/Dashboard';
import { createTheme } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import LinearProgress from '@mui/material/LinearProgress';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { NextAppProvider } from '@toolpad/core/nextjs';
import * as React from 'react';
import { darkTheme, lightTheme } from '../theme/theme';

export const NAVIGATION = [
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon />,
    },
    {
        segment: 'costs',
        title: 'Costs',
        icon: <DashboardIcon />,
    },
];

const BRANDING = {
    logo: <span />,
    title: '',
    disabled: true,
};

const DashboardTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: {
        light: lightTheme,
        dark: darkTheme,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
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
