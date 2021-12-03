require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski stove dash mirror clutch inside light army giggle'; 
let testAccounts = [
"0x4eb92d4e452900d3059a013bdc9ade190ca9a3be73919799d3898f01c17c47fa",
"0x40471607878ba0ff7aad09487254c53ea0d6ecba55ed41564589beac5792d7b8",
"0x4f4ae431b3eee4334573666738391fc905f23dc09b510228181c27312fb7622d",
"0x1718151683840cfa60bfa707ad4c11da018f90409e27c278d5b7b6c5a6085658",
"0x8f0b8d69afcc0fe068010ce58a9cfd1d87538a13a0f8da5981f316efd7900cca",
"0x613059a002a6ee47d10d49cfd205c524a25e1fdf940ee0620509e3387d0e111c",
"0x4c41dbf2f7009361ec455714dd28b8e63210effbab125babe69fdfb939cac5be",
"0xd2b37fafd50ad68648a3ddbf41e2e2826a01f6aa339448aeae338b3953ac57e4",
"0xc45fd1aeda0b015c7e887cfc0b4c022c46b3c661e695f578739410feae6a21a9",
"0x5a3b92dfcbd08928df076101c79b121319103fc5166639b24d9d3133b73a45dd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

