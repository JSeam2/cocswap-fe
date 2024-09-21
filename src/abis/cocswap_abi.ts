export const cocswap_abi = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "_token0",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_token1",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_verifier",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "addLiquidity",
        "inputs": [
            {
                "name": "_amount0",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_amount1",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "proof",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "instances",
                "type": "uint256[]",
                "internalType": "uint256[]"
            }
        ],
        "outputs": [
            {
                "name": "shares",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "addLiquidityInit",
        "inputs": [
            {
                "name": "_amount0",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_amount1",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "shares",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "balanceOf",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "removeLiquidity",
        "inputs": [
            {
                "name": "_shares",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "proof",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "instances",
                "type": "uint256[]",
                "internalType": "uint256[]"
            }
        ],
        "outputs": [
            {
                "name": "amount0",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "amount1",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "reserve0",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "reserve1",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "swap",
        "inputs": [
            {
                "name": "tokenIn",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "amountIn",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "proof",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "instances",
                "type": "uint256[]",
                "internalType": "uint256[]"
            }
        ],
        "outputs": [
            {
                "name": "amountOut",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "token0",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract IERC20"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "token1",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract IERC20"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "totalSupply",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "verifier",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract Halo2Veriifer"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "error",
        "name": "Initialized",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidAmounts",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidReserve0",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidReserve1",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidShares",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotInitialized",
        "inputs": []
    },
    {
        "type": "error",
        "name": "VerificationFailed",
        "inputs": []
    }
] as const