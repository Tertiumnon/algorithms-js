function staircase(n) {
  const s = ' ';
  const q = '#';
  for (let i = 0; i < n; i += 1) {
    console.log(`${s.repeat(n - i - 1)}${q.repeat(i + 1)}`);
  }
}

staircase(6);
