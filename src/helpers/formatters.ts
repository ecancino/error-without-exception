import type { Periods } from "~/helpers/types";

export const formatDateString = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

export const formatNumberString = (number: number) =>
  number.toLocaleString("en-US", {
    notation: "compact",
    compactDisplay: "short",
    minimumFractionDigits: 1,
  });

const periodNames: Record<Periods, string> = {
  "last-day": "Last Day",
  "last-week": "Last Week",
  "last-month": "Last Month",
};

export const getPeriodName = (period: Periods) =>
  periodNames[period] ?? "Unknown";

const replaceChars = (str: string) => str.replace(/@|-|\//g, " ");
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
const capitalizeWords = (str: string) =>
  str.split(" ").map(capitalize).join(" ");

export const getPackageName = (value: string) =>
  capitalizeWords(replaceChars(value));
