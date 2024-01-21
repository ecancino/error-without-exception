import { Option } from "~/components/Select/Select";
import { packageNames, periodNames } from "./constants";

export type Packages = (typeof packageNames)[number];
export type PackageOption = Option<Packages>;

export type Periods = (typeof periodNames)[number];
export type PeriodOption = Option<Periods>;

export type Download = {
  downloads: number;
  day: string;
};

export type Downloads = Download[];

export type RangeDowload = {
  downloads: Downloads;
  end: string;
  package: Packages;
  start: string;
};
