import { darkTheme, lightTheme } from '@/app/theme/theme';
import { createTheme } from '@mui/material';

export const DashboardTheme = createTheme({
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

export default DashboardTheme;
