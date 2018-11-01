setInterval(
  () => console.log('Hello every 3 seconds'),
  3000
);
setImmediate(setInterval);