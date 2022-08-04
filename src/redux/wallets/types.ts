export interface IWalletsController {
  [userEmail: string]: IWallets;
}

export interface IWallets {
  wallets: {
    [walletId: string]: IWallet;
  };
  activeWalletId: string;
}

export interface IWallet {
  walletName: string;
  walletId: string;
  createdAt: string;
}
