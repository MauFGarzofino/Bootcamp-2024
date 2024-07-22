export function validateFormula(formula) {
  const operators = /[*+/]{2,}/;
  const minusOperator = /-{2,}/;

  return !operators.test(formula) && !minusOperator.test(formula);
}
