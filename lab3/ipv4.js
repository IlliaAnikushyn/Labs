function ipToNumberOptimized(ip = '127.0.0.1') {
  return ip
    .split('.')
    .map(Number)
    .reduce((acc, part) => (acc << 8) + part);
}

// Примеры
console.log('127.0.0.1 ->', ipToNumberOptimized('127.0.0.1'));
console.log('10.0.0.1 ->', ipToNumberOptimized('10.0.0.1'));
console.log('192.168.1.10 ->', ipToNumberOptimized('192.168.1.10'));
console.log('165.225.133.150 ->', ipToNumberOptimized('165.225.133.150'));
console.log('0.0.0.0 ->', ipToNumberOptimized('0.0.0.0'));
console.log('8.8.8.8 ->', ipToNumberOptimized('8.8.8.8').toString(16)); // hex
