import * as React from "react";
import { useDocumentTitle } from "@uidotdev/usehooks";
import { usePackageDownloads } from "./api";
import { Chart, Select, Spinner } from "./components";
import { getPeriodName, packages, periods } from "./helpers";
import styles from "./App.module.css";

import type { Packages, Periods } from "./helpers/types";

export default function App() {
  const [pack, setPack] = React.useState<Packages>("react");
  const [period, setPeriod] = React.useState<Periods>("last-day");
  const { data, isFetching } = usePackageDownloads(pack, period);
  const title = `Downloads for ${pack} in ${getPeriodName(period)}`;
  const loading = isFetching || !data;

  useDocumentTitle(title ?? "Package Downloads");

  return (
    <main className={styles.app}>
      <header>
        <label htmlFor="package">
          Package:{" "}
          <Select
            name="package"
            options={packages}
            defaultValue={pack}
            onChange={(value) => setPack(value as Packages)}
          />
        </label>

        <label htmlFor="period">
          Period:{" "}
          <Select
            name="period"
            options={periods}
            defaultValue={period}
            onChange={(value) => setPeriod(value as Periods)}
          />
        </label>
      </header>

      {loading ? <Spinner /> : <Chart data={data} />}
    </main>
  );
}
