//usado para alterar estilos padrao dos components do chakra UI

import { extendTheme } from '@chakra-ui/react';


export const theme = extendTheme({
    colors: {
        "900": "#181b23",
        "800": "#1F2029",
        "700": "#353646",
        "600": "#4B4D63",
        "500": "#616480",
        "400": "#797D9A",
        "300": "#9699BB",
        "200": "#B3B5C6",
        "100": "#D2D2DC",
        "50": "EEEEF2"
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto',
    },
    styles: {
        global: {
            body: {
                bg: 'gray.900',
                color: 'gray.50'
            }
        }
    }
})