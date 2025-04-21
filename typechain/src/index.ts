import crypto from 'crypto';

interface BlcokShape {
    hash: string
    prevHash: string;
    height: number;
    data: string
}

class Block implements BlcokShape {
    public hash: string;
    constructor(
        public prevHash: string,
        public height: number,
        public data: string
    ) {
        this.hash = Block.calculateHash(prevHash, height, data);
    }

    static calculateHash(prevHash: string, height: number, data: string) {
        const toHash = `${prevHash}${height}${data}`;
        return crypto.createHash("sha256").update(toHash).digest("hex");
    }
}

class BlockChain {
    private blocks: Block[];
    constructor() {
        this.blocks = [];
    }

    private getPrevHash() {
        if (this.blocks.length === 0) {
            return "";
        } else {
            return this.blocks[this.blocks.length - 1].hash;
        }
    }

    public addBlock(data: string) {
        const block = new Block(
            this.getPrevHash(),
            this.blocks.length + 1,
            data
        );
        this.blocks.push(block);
    }

    public getBlocks() {
        return this.blocks;
    }
}

const blockchain = new BlockChain();

blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");

console.log(blockchain.getBlocks());