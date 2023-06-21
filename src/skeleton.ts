/**
 * Returns the sum of following series up to n-th term: 1, 1/4, 1/7, 1/10...
 * @param n - the number describing the n-th term
 * @returns sum of the first nth terms of series as a string
 */
function seriesSum(n: number): string {
  const termNumerator = 1;
  let termDenominator = 1;
  let sum = 0.00;

  for (let i = 0; i < n; i++) {
    sum += termNumerator / termDenominator;
    termDenominator += 3;
  }

  return String(sum.toFixed(2));
}

export default seriesSum;
