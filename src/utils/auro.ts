interface CustomWindow extends Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mina?: any;
}

export const detectAuro = () => {
  if (
    typeof window !== 'undefined' &&
    typeof (window as CustomWindow).mina !== 'undefined'
  ) {
    return true;
  } else {
    return false;
  }
};

export async function requestMinaAccounts() {
  const account: string[] = await (window as CustomWindow).mina
    .requestAccounts()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .catch((err: any) => err);
  return account;
}
