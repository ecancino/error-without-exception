import * as Sentry from "@sentry/react";

export function initSentry() {
  Sentry.init({
    dsn: "https://c3937e054b66d4b0de7ad661488e7481@o4504195508535296.ingest.sentry.io/4506607978348544",
    integrations: [
      new Sentry.BrowserTracing({
        tracePropagationTargets: [
          "localhost",
          /^https:\/\/yourserver\.io\/api/,
        ],
      }),
      new Sentry.Replay({
        maskAllText: false,
        blockAllMedia: false,
      }),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0,
    // Session Replay
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });
}
