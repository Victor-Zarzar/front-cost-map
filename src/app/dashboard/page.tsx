'use client';

import { Box, Typography } from '@mui/material';

export default function DashboardPage() {
    return (
        <Box p={2}>
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>
            <Typography>Conteúdo do dashboard aqui...</Typography>
        </Box>
    );
}
