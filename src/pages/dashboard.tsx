import { Box, Flex, SimpleGrid, Text, theme  } from "@chakra-ui/react";
import dynamic from 'next/dynamic';
import { Header } from "../components/Form/Header";
import { Sidebar } from "../components/Form/Sidebar";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,    
});

const options = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false
    }


};

const series = [
    {name: 'series1', data: [31, 120, 18, 28, 51, 18, 109] }    
];


const series2 = [
    
    {name: 'series2', data: series[0]['data'].reverse() }    
];

export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
                <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth="328px" text-align="flex-start">
                    <Box
                      p="8"
                      bg="gray.800"
                      borderRadius={8}>
                        <Text fontSize="lg" mb="4">Inscritos da Semana</Text>
                        <Chart options={options} series={series} type="area" height={168} />
                    </Box>

                    <Box
                      p="8"
                      bg="gray.800"
                      borderRadius={8}>
                        <Text fontSize="lg" mb="4">Taxa de Abertura</Text>
                        <Chart options={options} series={series} type="area" height={168} />
                    </Box>
                    
                </SimpleGrid>
            </Flex>
        </Flex>
       
       
    )
}