import
export const createAccount = (req, res) =>{
  // do request level validation: params etc. To make sure the request is valid for this route.
  // headers/auth/etc should be validated at middleware level
  // here uuid is a generic identifier to uniquely connect the account to a user/person (could be email, SSN, etc)
  const {type, balance, uuid} = req.body;

  try {
    if (isNan(balance)) throw new Error("AD");
    const account =  models.createAccount({type, balance, uuid});
    res.status(201).send(account)
  }
  catch (e) {

  }
}
