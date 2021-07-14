import {v4 as newId } from 'uuid';
export const createAccount = (type, balance, uuid) => {
  // we can add additional checks/validations on account creation here
  // these are model level checks and will most probably be consistent with DB constraints. ex: balance needs to be greater than 0
  if (balance < 0) throw new Error()

  return { type, balance, uuid, id: newId() };
}
