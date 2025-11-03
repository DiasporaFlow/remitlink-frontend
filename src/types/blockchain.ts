/**
 * Blockchain-specific type definitions
 */

export interface BlockchainTransaction {
  hash: string
  from: string
  to: string
  value: string
  gasUsed: string
  blockNumber: number
  timestamp: number
  status: 'pending' | 'confirmed' | 'failed'
}

export interface WalletInfo {
  address: string
  balance: string
  network: string
  chainId: number
}

export interface BlockchainConfig {
  rpcUrl: string
  chainId: number
  networkName: string
  blockExplorerUrl: string
}
