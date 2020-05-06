"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
class ChainlinkedFactory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy() {
        return super.deploy();
    }
    getDeployTransaction() {
        return super.getDeployTransaction();
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ChainlinkedFactory = ChainlinkedFactory;
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "id",
                type: "bytes32"
            }
        ],
        name: "ChainlinkRequested",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "id",
                type: "bytes32"
            }
        ],
        name: "ChainlinkFulfilled",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "id",
                type: "bytes32"
            }
        ],
        name: "ChainlinkCancelled",
        type: "event"
    }
];
const _bytecode = "0x60806040526001600455348015601457600080fd5b5060358060226000396000f3006080604052600080fd00a165627a7a723058207c368a6de92a468506480614bf93f1f0ea2d70a7fb6584ab0bed77d506fd36a80029";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhaW5saW5rZWRGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2hhaW5saW5rZWRGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQ0FBMEM7QUFDMUMsb0JBQW9COztBQUVwQixtQ0FBMkQ7QUFNM0QsTUFBYSxrQkFBbUIsU0FBUSx3QkFBZTtJQUNyRCxZQUFZLE1BQWU7UUFDekIsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELE1BQU07UUFDSixPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQTBCLENBQUM7SUFDaEQsQ0FBQztJQUNELG9CQUFvQjtRQUNsQixPQUFPLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFDRCxNQUFNLENBQUMsT0FBZTtRQUNwQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFnQixDQUFDO0lBQzlDLENBQUM7SUFDRCxPQUFPLENBQUMsTUFBYztRQUNwQixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUF1QixDQUFDO0lBQ3JELENBQUM7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUNaLE9BQWUsRUFDZixnQkFBbUM7UUFFbkMsT0FBTyxJQUFJLGlCQUFRLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsQ0FBZ0IsQ0FBQztJQUN0RSxDQUFDO0NBQ0Y7QUF2QkQsZ0RBdUJDO0FBRUQsTUFBTSxJQUFJLEdBQUc7SUFDWDtRQUNFLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLE1BQU0sRUFBRTtZQUNOO2dCQUNFLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxTQUFTO2FBQ2hCO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLElBQUksRUFBRSxPQUFPO0tBQ2Q7SUFDRDtRQUNFLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLE1BQU0sRUFBRTtZQUNOO2dCQUNFLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxTQUFTO2FBQ2hCO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLElBQUksRUFBRSxPQUFPO0tBQ2Q7SUFDRDtRQUNFLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLE1BQU0sRUFBRTtZQUNOO2dCQUNFLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxTQUFTO2FBQ2hCO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLElBQUksRUFBRSxPQUFPO0tBQ2Q7Q0FDRixDQUFDO0FBRUYsTUFBTSxTQUFTLEdBQ2Isa0xBQWtMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHZW5lcmF0ZWQgYnkgdHMtZ2VuZXJhdG9yIHZlci4gMC4wLjggKi9cbi8qIHRzbGludDpkaXNhYmxlICovXG5cbmltcG9ydCB7IENvbnRyYWN0LCBDb250cmFjdEZhY3RvcnksIFNpZ25lciB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcImV0aGVycy9wcm92aWRlcnNcIjtcbmltcG9ydCB7IFVuc2lnbmVkVHJhbnNhY3Rpb24gfSBmcm9tIFwiZXRoZXJzL3V0aWxzL3RyYW5zYWN0aW9uXCI7XG5cbmltcG9ydCB7IENoYWlubGlua2VkIH0gZnJvbSBcIi4vQ2hhaW5saW5rZWRcIjtcblxuZXhwb3J0IGNsYXNzIENoYWlubGlua2VkRmFjdG9yeSBleHRlbmRzIENvbnRyYWN0RmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25lcj86IFNpZ25lcikge1xuICAgIHN1cGVyKF9hYmksIF9ieXRlY29kZSwgc2lnbmVyKTtcbiAgfVxuXG4gIGRlcGxveSgpOiBQcm9taXNlPENoYWlubGlua2VkPiB7XG4gICAgcmV0dXJuIHN1cGVyLmRlcGxveSgpIGFzIFByb21pc2U8Q2hhaW5saW5rZWQ+O1xuICB9XG4gIGdldERlcGxveVRyYW5zYWN0aW9uKCk6IFVuc2lnbmVkVHJhbnNhY3Rpb24ge1xuICAgIHJldHVybiBzdXBlci5nZXREZXBsb3lUcmFuc2FjdGlvbigpO1xuICB9XG4gIGF0dGFjaChhZGRyZXNzOiBzdHJpbmcpOiBDaGFpbmxpbmtlZCB7XG4gICAgcmV0dXJuIHN1cGVyLmF0dGFjaChhZGRyZXNzKSBhcyBDaGFpbmxpbmtlZDtcbiAgfVxuICBjb25uZWN0KHNpZ25lcjogU2lnbmVyKTogQ2hhaW5saW5rZWRGYWN0b3J5IHtcbiAgICByZXR1cm4gc3VwZXIuY29ubmVjdChzaWduZXIpIGFzIENoYWlubGlua2VkRmFjdG9yeTtcbiAgfVxuICBzdGF0aWMgY29ubmVjdChcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgc2lnbmVyT3JQcm92aWRlcjogU2lnbmVyIHwgUHJvdmlkZXJcbiAgKTogQ2hhaW5saW5rZWQge1xuICAgIHJldHVybiBuZXcgQ29udHJhY3QoYWRkcmVzcywgX2FiaSwgc2lnbmVyT3JQcm92aWRlcikgYXMgQ2hhaW5saW5rZWQ7XG4gIH1cbn1cblxuY29uc3QgX2FiaSA9IFtcbiAge1xuICAgIGFub255bW91czogZmFsc2UsXG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGluZGV4ZWQ6IHRydWUsXG4gICAgICAgIG5hbWU6IFwiaWRcIixcbiAgICAgICAgdHlwZTogXCJieXRlczMyXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwiQ2hhaW5saW5rUmVxdWVzdGVkXCIsXG4gICAgdHlwZTogXCJldmVudFwiXG4gIH0sXG4gIHtcbiAgICBhbm9ueW1vdXM6IGZhbHNlLFxuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBpbmRleGVkOiB0cnVlLFxuICAgICAgICBuYW1lOiBcImlkXCIsXG4gICAgICAgIHR5cGU6IFwiYnl0ZXMzMlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBuYW1lOiBcIkNoYWlubGlua0Z1bGZpbGxlZFwiLFxuICAgIHR5cGU6IFwiZXZlbnRcIlxuICB9LFxuICB7XG4gICAgYW5vbnltb3VzOiBmYWxzZSxcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcbiAgICAgICAgbmFtZTogXCJpZFwiLFxuICAgICAgICB0eXBlOiBcImJ5dGVzMzJcIlxuICAgICAgfVxuICAgIF0sXG4gICAgbmFtZTogXCJDaGFpbmxpbmtDYW5jZWxsZWRcIixcbiAgICB0eXBlOiBcImV2ZW50XCJcbiAgfVxuXTtcblxuY29uc3QgX2J5dGVjb2RlID1cbiAgXCIweDYwODA2MDQwNTI2MDAxNjAwNDU1MzQ4MDE1NjAxNDU3NjAwMDgwZmQ1YjUwNjAzNTgwNjAyMjYwMDAzOTYwMDBmMzAwNjA4MDYwNDA1MjYwMDA4MGZkMDBhMTY1NjI3YTdhNzIzMDU4MjA3YzM2OGE2ZGU5MmE0Njg1MDY0ODA2MTRiZjkzZjFmMGVhMmQ3MGE3ZmI2NTg0YWIwYmVkNzdkNTA2ZmQzNmE4MDAyOVwiO1xuIl19