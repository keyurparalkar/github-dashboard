import {
  Box,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import * as React from "react";
import { TooltipProps } from "recharts";

const CustomToolTip = ({ active, payload, label }: TooltipProps<(string|number)[], number>) => {
  if (active && payload && payload.length) {
    return (
      <Stat>
        <Box
          borderRadius="5px"
          borderWidth="1px"
          boxShadow="xs"
          backgroundColor="white"
          p={3}
          pb={1}
        >
          <StatLabel>{dayjs(label).format("MMM D YYYY")}</StatLabel>
          <StatNumber>{payload[0].value}</StatNumber>
          <StatHelpText>Forks</StatHelpText>
        </Box>
      </Stat>
    );
  }

  return null;
};

export default CustomToolTip;
