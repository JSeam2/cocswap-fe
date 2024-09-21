import React, { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Button, Box, Typography, TextField } from '@mui/material';
import { ierc20_abi } from "../abis/ierc20_abi";
import { cocswap_abi } from "../abis/cocswap_abi.json";
import { data } from "../components/Data";
import { useWriteContract } from 'wagmi';
import { parseUnits } from 'viem';

const SwapView = () => {
  const [amount, setAmount] = useState('');
  const [tokenAddress, setTokenAddress] = useState(''); // Address of the token to approve
  const { data: hash, writeContract: writeContract } = useWriteContract()


  const handleApprove = () => {
    writeContract({
      address: data.sepolia.tokenA,
      abi: ierc20_abi,
      functionName: 'approve',
      args: [data.sepolia.COCSwap, BigInt(9999999999999999999999999999999999999)],
    })

    writeContract({
      address: data.sepolia.tokenB,
      abi: ierc20_abi,
      functionName: 'approve',
      args: [data.sepolia.COCSwap, BigInt(9999999999999999999999999999999999999)],
    })
  };

  const handleSwap = async () => {
    await new Promise(r => setTimeout(r, 2000));

    alert("Received proof from server");
    writeContract({
      address: data.sepolia.tokenA,
      abi: ierc20_abi,
      functionName: 'transfer',
      args: [data.sepolia.COCSwap, BigInt(1)],
    })
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Swap Tokens
      </Typography>
      <TextField
        label="Token In Address"
        fullWidth
        margin="normal"
        value={tokenAddress}
        onChange={(e) => setTokenAddress(e.target.value)}
      />
      <TextField
        label="Amount"
        fullWidth
        margin="normal"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: '1rem' }}
        onClick={handleApprove}
      >
        Approve
      </Button>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: '1rem' }}
        onClick={handleSwap}
      >
        Swap
      </Button>
    </Box>
  );
};

const AddLiquidityView = () => {
  const { data: hash, writeContract: writeContract } = useWriteContract()

  const handleApprove = () => {
    writeContract({
      address: data.sepolia.tokenA,
      abi: ierc20_abi,
      functionName: 'approve',
      args: [data.sepolia.COCSwap, BigInt(9999999999999999999999999999999999999)],
    })

    writeContract({
      address: data.sepolia.tokenB,
      abi: ierc20_abi,
      functionName: 'approve',
      args: [data.sepolia.COCSwap, BigInt(9999999999999999999999999999999999999)],
    })
  };

  const handleAdd = () => {
    writeContract({
      address: data.sepolia.tokenA,
      abi: ierc20_abi,
      functionName: 'transfer',
      args: [data.sepolia.COCSwap, BigInt(1)],
    })
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Add Liquidity
      </Typography>
      <TextField label="Token A Amount" fullWidth margin="normal" />
      <TextField label="Token B Amount" fullWidth margin="normal" />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: '1rem' }}
        onClick={handleApprove}
      >
        Approve
      </Button>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: '1rem' }}
        onClick={handleAdd}
      >
        Add Liquidity
      </Button>
    </Box>
  )
};

const RemoveLiquidityView = () => (
  <Box>
    <Typography variant="h6" gutterBottom>
      Remove Liquidity
    </Typography>
    <TextField label="LP Token Amount" fullWidth margin="normal" />
    <Button variant="contained" color="primary" fullWidth style={{ marginTop: '1rem' }}>
      Remove Liquidity
    </Button>
  </Box>
);

const Home: NextPage = () => {
  const [currentView, setCurrentView] = useState('swap');

  const renderView = () => {
    switch (currentView) {
      case 'swap':
        return <SwapView />;
      case 'addLiquidity':
        return <AddLiquidityView />;
      case 'removeLiquidity':
        return <RemoveLiquidityView />;
      default:
        return <SwapView />;
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>COCswap</title>
        <meta
          content="Convex Optimization Calculation Swap"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className={styles.main}>
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" marginBottom="2rem">
          <Box>
            <Button
              onClick={() => setCurrentView('swap')}
              variant={currentView === 'swap' ? 'contained' : 'outlined'}
              style={{ marginRight: '0.5rem' }}
            >
              Swap
            </Button>
            <Button
              onClick={() => setCurrentView('addLiquidity')}
              variant={currentView === 'addLiquidity' ? 'contained' : 'outlined'}
              style={{ marginRight: '0.5rem' }}
            >
              Add Liquidity
            </Button>
            <Button
              onClick={() => setCurrentView('removeLiquidity')}
              variant={currentView === 'removeLiquidity' ? 'contained' : 'outlined'}
            >
              Remove Liquidity
            </Button>
          </Box>
          <ConnectButton />
        </Box>
        <h1 className={styles.title}>
          Welcome to COCswap
        </h1>
        <p className={styles.description}>
          Swap tokens and manage liquidity with ease
        </p>
        <Box width="100%" maxWidth="400px" marginTop="2rem">
          {renderView()}
        </Box>
      </main>
      <footer className={styles.footer}>
        <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by jseam,ethan
        </a>
      </footer>
    </div>
  );
};

export default Home;