import type { SxProps } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { createTheme, Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface TypeBackground {
        appbar?: string;
        accordionContent?: string;
        card?: string;
    }
}

type ThemedSx = (theme: Theme) => SxProps<Theme>;

const lightTheme: Theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: blue[700],
        },
        secondary: {
            main: blue[800],
        },
        background: {
            default: grey[50],
            paper: grey[50],
            appbar: grey[50],
            accordionContent: grey[50],
        },
    },
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: blue[700],
                    color: 'white',
                    border: '1px solid #ccc',
                },
            },
        },
    },
});

const darkTheme: Theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: grey[800],
        },
        secondary: {
            main: grey[700],
        },
        background: {
            default: grey[900],
            paper: grey[900],
            appbar: grey[900],
            card: grey[700],
            accordionContent: grey[800],
        },
    },
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: grey[900],
                    color: 'white',
                    border: '1px solid #444',
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: 'white',
                    '&.Mui-focused': {
                        color: 'white',
                    },
                },
            },
        },
    },
});

const cardBaseStyle: ThemedSx = (theme) => ({
    mb: 2,
    borderRadius: 3,
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: theme.palette.mode === 'dark' ? '0 0 25px rgba(255,255,255,0.05)' : 4,
    backdropFilter: 'blur(8px)',
    bgcolor: theme.palette.mode === 'dark' ? 'rgba(18,18,18,0.9)' : 'rgba(255,255,255,0.95)',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-1px)',
        boxShadow: theme.palette.mode === 'dark' ? '0 0 30px rgba(255,255,255,0.06)' : '0 4px 20px rgba(0,0,0,0.08)',
    },
});

const CardTableStyle: ThemedSx = (theme) => ({
    p: 3,
    boxShadow: theme.palette.mode === 'dark' ? '0 0 25px rgba(255,255,255,0.05)' : 4,
    borderRadius: 3,
    border: `1px solid ${theme.palette.divider}`,
    backdropFilter: 'blur(8px)',
    bgcolor: theme.palette.mode === 'dark' ? 'rgba(18,18,18,0.9)' : 'rgba(255,255,255,0.95)',
    transition: 'all 0.3s ease',
    '&:hover': {
        boxShadow: theme.palette.mode === 'dark' ? '0 0 30px rgba(255,255,255,0.06)' : '0 4px 20px rgba(0,0,0,0.08)',
        transform: 'translateY(-1px)',
    },
});

const CardGraphicStyle: ThemedSx = (theme) => ({
    p: 3,
    borderRadius: 3,
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: theme.palette.mode === 'dark' ? '0 0 25px rgba(255,255,255,0.05)' : 4,
    backdropFilter: 'blur(8px)',
    bgcolor: theme.palette.mode === 'dark' ? 'rgba(18,18,18,0.9)' : 'rgba(255,255,255,0.95)',
    transition: 'all 0.3s ease',
    '&:hover': {
        boxShadow: theme.palette.mode === 'dark' ? '0 0 30px rgba(255,255,255,0.06)' : '0 4px 20px rgba(0,0,0,0.08)',
        transform: 'translateY(-1px)',
    },
});

const CardConsumers: ThemedSx = (theme) => ({
    p: 1,
    width: '100%',
    minHeight: 160,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 3,
    boxShadow: 3,
    backdropFilter: 'blur(8px)',
    bgcolor: theme.palette.mode === 'dark' ? 'rgba(18,18,18,0.9)' : 'rgba(255,255,255,0.95)',
    transition: 'all 0.3s ease',
    '&:hover': {
        boxShadow: theme.palette.mode === 'dark' ? '0 0 30px rgba(255,255,255,0.06)' : '0 4px 20px rgba(0,0,0,0.08)',
        transform: 'translateY(-1px)',
    },
});

const containerPageStyle = (): SxProps<Theme> => ({
    width: { xs: '92%', md: '80%' },
    mx: 'auto',
    py: { xs: 2, md: 3 },
});

const formCardStyle: ThemedSx = (theme) => ({
    ...cardBaseStyle(theme),
    px: { xs: 2, sm: 3, md: 4 },
    py: { xs: 2.5, md: 3 },
    bgcolor: theme.palette.background.paper,
});

const sectionHeaderStyle = (): SxProps<Theme> => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mb: 3,
});

const buttonRowStyle = (): SxProps<Theme> => ({
    mt: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    flexDirection: { xs: 'column', sm: 'row' },
});

export {
    buttonRowStyle,
    cardBaseStyle,
    CardConsumers,
    CardGraphicStyle,
    CardTableStyle,
    containerPageStyle,
    darkTheme,
    formCardStyle,
    lightTheme,
    sectionHeaderStyle,
};
