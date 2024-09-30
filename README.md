# BlockChain-REC: Renewable Energy Certificates on Blockchain

A blockchain-powered platform for managing Renewable Energy Certificates (RECs), developed during the EDF CodeGreen Hackathon. This project uses **ERC721** Non-Fungible Tokens (NFTs) to securely track and trade Green Energy Tokens (GETs), representing renewable energy contributions.

## Key Technologies
- **Blockchain Framework:** Truffle
- **Token Standard:** ERC721 (Non-Fungible Token)
- **Front-end Development:** JavaScript, HTML, CSS
- **Smart Contract Interaction:** Web3.js
- **Development Environment:** Node.js, Webpack

## Features
1. **ERC721**-based smart contracts for secure minting, transferring, and retiring RECs.
2. Integration with **Metamask** for seamless blockchain interaction.
3. Frontend for real-time REC management with automated balance refresh.

## Quick Setup

### 1. Install Prerequisites
- Install **Truffle** globally:
  ```bash
  npm install -g truffle
### 2. Clone and Set Up Project

- Clone the repository and navigate to the project folder:
  ```bash
  git clone <repository-url>
  cd <project-folder>
### 3. Run the Development Console
- Start Truffle development console:
  ```bash
  truffle develop
### 4. Compile & Deploy Smart Contracts
- Inside the Truffle console:
  ```bash
  compile
  migrate

### 5.  Start the Frontend Server
- Start frontend:
  ```bash
   npm run dev
### 6. Configure Metamask
- Install the Metamask extension from metamask.io.
- Import the test account using the mnemonic phrase from Truffle.
- Switch to a Custom RPC and enter the Truffle development URL (e.g., http://127.0.0.1:9545).
- Select Account 1 or any test account to interact with the platform.

