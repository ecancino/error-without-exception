import * as React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Link } from "~/components";
import {
  formatDateString,
  formatNumberString,
  getPackageName,
} from "~/helpers/formatters";

import type { RangeDowload } from "~/helpers/types";

export type ChartProps = {
  data: RangeDowload;
};

export default function Chart({ data }: ChartProps) {
  const downloads = data?.downloads;
  const packageName = getPackageName(data?.package);

  if (!data) {
    return null;
  }

  return (
    <>
      <h1>
        <Link href={`https://www.npmjs.com/package/${data?.package}`}>
          {packageName}
        </Link>
      </h1>
      <figure>
        <LineChart
          width={1_200}
          height={400}
          data={downloads}
          margin={{ top: 5, right: 20, bottom: 5, left: 20 }}
        >
          <Line
            type="monotone"
            dataKey="downloads"
            stroke="#8884d8"
            legendType="plainline"
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Tooltip
            labelFormatter={formatDateString}
            formatter={formatNumberString}
          />
          <XAxis dataKey="day" tickFormatter={formatDateString} />
          <YAxis tickFormatter={formatNumberString} />
        </LineChart>
      </figure>
    </>
  );
}
