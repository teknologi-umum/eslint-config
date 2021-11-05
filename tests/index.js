console.log('hello world');

function foo(...args) {
  const collection = []
  for (let arg of args) {
    const x = arg + 2;
    collection.push(x)
    continue;
  }
  return collection;
}