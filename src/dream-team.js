module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let result = '';
  members.forEach(element => {
    if (typeof element === 'string') {
      for (let i = 0; i < element.length; i += 1) {
        if (element[i] !== ' ') {
          result += element[i].toUpperCase();
          break;
        }
      }
    }
  });

  return result.split('').sort().join('');
}