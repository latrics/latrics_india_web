import { liveMetrics } from "../data/liveMetrics.js";

/**
 * Builds the simulated live payload used by both the API and socket layer.
 */
export function buildLivePayload() {
  return {
    generatedAt: new Date().toISOString(),
    metrics: liveMetrics.map((metric) => ({
      ...metric,
      value: randomBetween(metric.min, metric.max, metric.precision)
    })),
    activity: buildActivityFeed()
  };
}

function buildActivityFeed() {
  const events = [
    "Retail demand model recalibrated",
    "Predictive maintenance job completed",
    "Claims automation workflow retrained",
    "Executive dashboard synced across regions",
    "Supply chain anomaly resolved",
    "AI copilot knowledge base refreshed"
  ];

  return fisherYatesShuffle([...events])
    .slice(0, 4)
    .map((message, index) => ({
      id: `${Date.now()}-${index}`,
      message,
      secondsAgo: Math.floor(Math.random() * 45) + 3
    }));
}

/**
 * Unbiased Fisher-Yates shuffle. Mutates a copy of the input.
 *
 * @param {Array} array
 * @returns {Array}
 */
function fisherYatesShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function randomBetween(min, max, precision = 0) {
  const value = Math.random() * (max - min) + min;
  return Number(value.toFixed(precision));
}
