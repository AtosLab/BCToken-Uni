## Custome Barcelona Coin

Original Contract
https://etherscan.io/address/0xa77ecdec904751a594ff17fc99cb65bebfabe441#code

Result Contract
https://rinkeby.etherscan.io/address/0x2F893a254900D2dA68ce2E71AFaC67146e045951


## Setup

To install and run project, you must have NPM installed.

1. Clone this repository and move into the project directory:

    ```shell
    git clone https://github.com/polaris-labs/BCToken-Uni
    cd BCToken-Uni
    ```

1. Install the NPM dependencies:

    ```shell
    npm install


## Deploy & Verify the contract

1. Compile the project

    ```shell
    npx hardhat compile

1. Deploy the contract on rinkeby

    ```shell
    npx hardhat run --network rinkeby deploy/deploy.js

1. Verify the contract on rinkeby

    ```shell
    npx hardhat verify --network rinkeby 0x2F893a254900D2dA68ce2E71AFaC67146e045951 "CustomBarcelonaCoin" "CBLNC" "100000000000000000000000"
