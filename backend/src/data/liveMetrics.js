/**
 * Metric definitions used by the live operations simulator.
 */
export const liveMetrics = [
  { id: "uptime", label: "Platform Uptime", unit: "%", min: 98.9, max: 99.99, precision: 2 },
  { id: "pipelines", label: "Active Pipelines", unit: "", min: 118, max: 164, precision: 0 },
  { id: "latency", label: "Inference Latency", unit: "ms", min: 78, max: 125, precision: 0 },
  { id: "alerts", label: "Resolved Alerts", unit: "", min: 8, max: 24, precision: 0 }
];
