require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope enroll sure trophy name repeat night uncover include clog suspect genius'; 
let testAccounts = [
"0x1b9e335161caa11b1d36713e007f974f5c942b2e23fd8ef0018315185f5941c3",
"0x437ed2b79ae4e48a58be9275e55f0ac55f307f14ced9846208e7ac04e91cb6bb",
"0x61109758f3284bc3ca0ebff7402778f77641a8d363b9110d0c868f246864bcb6",
"0x5d1859c0352dce4ff149a7c4c264d64d790ede3f4c4831d748f0c1290e60bccd",
"0xf27c265fd7675c445da0c144de4ec19800ed6a978d58026ae80e5103c0e37a1b",
"0x72321f3b2d2ccad66246bc6428a02b3d1d763986fe9970f2281f4d54df1b93eb",
"0xed137d338f5ab343221a0330b660a654e5423894fde1e4903f642b2cc9bd80b7",
"0x9516a3d22a2f675e0af71f0d6a4d44ce443dc293cac0539157ddf1613f7ebb50",
"0x66e39a286d84e776c065289d1aed183fd76915c68c1abef3e47f9a3c4ba25d5d",
"0x99827fc953e669449e585e1d540326ccc9b9059556d87760093a583f158eb5b0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

