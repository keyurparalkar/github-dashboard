import {
  Box,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import * as React from "react";
import { TCustomToolTip } from "../../types/types.charts";

const CustomToolTip = ({ active, payload, label, toolTipText}: TCustomToolTip) => {
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
          <StatHelpText>{toolTipText}</StatHelpText>
        </Box>
      </Stat>
    );
  }

  return null;
};

export default CustomToolTip;
