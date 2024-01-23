function checkIsValidCopy(original: string, copy: string) {
  let regexVariable = `(^${original}$)`
  regexVariable = regexVariable.replace(/(\.)/g,"[$1 ]")
  regexVariable = regexVariable.replace(/(:)/g,"[$1\\\\. ]")
  regexVariable = regexVariable.replace(/(\+)/g,"[$1:\\\\. ]")
  regexVariable = regexVariable.replace(/(#)/g,"[$1\\\\+:\\\\. ]")
  regexVariable = regexVariable.replace(/([a-z])/g,"[$1#\\\\+:\\\\. ]")
  regexVariable = regexVariable.replace(/([A-Z])/g, (v) => "["+ v + v.toLowerCase() + "#\\\\+:\\\\.\\\ ]")
  let re = new RegExp(regexVariable)
  return re.test(copy)
}
