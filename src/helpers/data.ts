import { packageNames, periodNames } from "./constants";
import { getPeriodName, getPackageName } from "./formatters";
import type { PackageOption, PeriodOption } from "./types";

export const periods: PeriodOption[] = periodNames.map((value) => ({
  value,
  name: getPeriodName(value),
}));

export const packages: PackageOption[] = packageNames.map((value) => ({
  value,
  name: getPackageName(value),
}));
