export const validateMotive = (motive: string) => {
  const validMotives = ["login", "register"];
  return validMotives.includes(motive) ? true : false;
};