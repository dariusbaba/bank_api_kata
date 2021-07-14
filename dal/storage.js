import { createAccount } from './models/account';

const accounts = []; // in memory accounts storage

// these rules can be loaded from a separate service if needed
const accountCreationRules = [
  {
    name: 'isOneAccountTypePerUUID',
    // sample validation rule. Only one type of account per uuid is permited
    rule: (newAccount) => {
      const constraintMatch = accounts.find(a -> a.type === newAccount.type && a.uuid === newAccount.uuid)
      return !constraintMatch;
    }
  },
  {
    name: 'isAccountCreationEnabled',
    // sample validation rule. Maybe some users can't open an account as they have not yet passed all security checks
    rule:  (newAccount) => {
      return true;
    }
  }
];


export const saveAccount = account => {
  const ranRules = accountCreationRules.map(rule => { name: rule.name, result: rule(account)});

  const failedRules = ranRules.filter(rule => !rule.result);
  if(failedRules.length) {
    return {status: ErrorStatus, result: failedRules};
  }
  accounts.push(account); // simulate the save
  return account;
}
