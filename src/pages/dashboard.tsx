import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
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
  fill: {
    type: "gradient",
    opacity: 0.3,
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  },
  tooltip: {
    theme: "dark",
  }
};

const series = [
  { name: "Sensor 01", data: [321, 156, 789, 133, 158, 545, 133] },
  { name: "Sensor 02", data: [255, 278, 326, 454, 180, 454, 212] },
];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p="4" pb="2" bg="gray.700" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Temperatura
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box p="8" bg="gray.700" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Deformação
            </Text>
            <Chart options={options} series={series} type="area" height={160} />

          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
