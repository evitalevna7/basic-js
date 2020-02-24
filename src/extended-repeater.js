module.exports = function repeater(str, options) {
    let result = '';
    let separ = '+';
    if (options.separator) {
        separ = options.separator;
    }
    if (options.repeatTimes) {
        result = (str + separ) * options.repeatTimes;
    }
    
    return result;
};
  