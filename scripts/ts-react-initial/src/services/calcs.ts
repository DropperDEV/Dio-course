export const soma = (num: number): number => {
  return num + 1;
};

export function multiplica(num: number, mult: number) {
  if (mult === 2 || mult === 3) return num * mult;
     return "Multiplicador deve ser dois ou tres"
}
