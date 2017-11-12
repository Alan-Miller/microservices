// module.exports = function (options) {
  const seneca = this;

  seneca.add({ role: 'process', cmd: 'sum' }, sum);

  function sum(args, done) {
    var numbers = args.numbers;
    var result = numbers.reduce((a, b) => a + b, 0);
    done(null, { result });
  }
// }