import ky, { Options } from "ky";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { Packages, Periods, RangeDowload } from "~/helpers/types";

// https://github.com/npm/registry/blob/master/docs/download-counts.md

const api = ky.create({
  prefixUrl: "https://api.npmjs.org/",
  timeout: 1000,
});

export const getDownloads = async (
  pkg: Packages,
  period: Periods,
  options?: Options
) => api.get(`downloads/range/${period}/${pkg}`, options).json<RangeDowload>();

export function usePackageDownloads(pkg: Packages, period: Periods) {
  const queryClient = useQueryClient();

  return useQuery<RangeDowload, Error, RangeDowload, string[]>({
    enabled: Boolean(pkg && period),
    queryKey: ["packages", pkg, period],
    queryFn: ({ signal }) => getDownloads(pkg, period, { signal }),
    initialData: () => {
      return queryClient.getQueryData<RangeDowload>([
        "packages",
        "react",
        "last-day",
      ]);
    },
  });
}
