import Link from '@/components/link';
import type { ComponentProps } from 'react';
import { Button } from '@/components/ui';
// import type { AuroWalletState } from '../hooks';

// export const InstallAuroButton = () => (
//   <Link href="https://www.aurowallet.com/" target="_blank">
//     <Button>Install Auro Wallet</Button>
//   </Link>
// );

export const ConnectButton = (props: ComponentProps<typeof Button>) => {
  return <Button {...props}>Connect</Button>;
};

// export const GoToDashBoardButton = () => {
//   return (
//     <Link href="/dashboard" target="_self">
//       <Button>Go to Dashboard</Button>
//     </Link>
//   );
// };

// export const HeaderButtons = ({
//   state,
//   onConnectClick,
// }: {
//   state: AuroWalletState;
//   onConnectClick(): unknown;
// }) => {
//   if (!state.auroDetected) {
//     return <InstallAuroButton />;
//   } else {
//     return (
//       <ConnectButton
//         className="button-gd p-2 px-3 font-semibold text-white transition-all hover:brightness-105"
//         onClick={onConnectClick}
//       />
//     );
//   }
// };
