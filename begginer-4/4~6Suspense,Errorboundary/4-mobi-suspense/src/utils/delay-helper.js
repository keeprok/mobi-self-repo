export const createDelayedPromise = (value, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(value), delay));
