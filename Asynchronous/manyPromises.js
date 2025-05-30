
const promises = Array.from({ length: 1000 }, (_, i) => fetch(`https://api.example.com/data/${i}`));

// Function to process promises in batches
async function processInBatches(promises, batchSize) {
  let results = [];

  for (let i = 0; i < promises.length; i += batchSize) {
    const batch = promises.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch);
    results = results.concat(batchResults);
  }

  return results;
}

// Process in batches of 100 promises at a time
processInBatches(promises, 100)
  .then(results => {
    console.log('All promises processed');
  })
  .catch(error => {
    console.log('Error processing promises:', error);
  });

