import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'COCswap',
  projectId: '8022f2a30a47f2d068330f436b50c4b9',
  chains: [
    mainnet,
    // polygon,
    // optimism,
    // arbitrum,
    // base,
    sepolia,

  ],
  ssr: true,
});