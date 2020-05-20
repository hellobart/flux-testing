"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
class ConcreteSignedSafeMathFactory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides);
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides);
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
exports.ConcreteSignedSafeMathFactory = ConcreteSignedSafeMathFactory;
const _abi = [
    {
        inputs: [
            {
                internalType: "int256",
                name: "_a",
                type: "int256"
            },
            {
                internalType: "int256",
                name: "_b",
                type: "int256"
            }
        ],
        name: "testAdd",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "_a",
                type: "int256"
            },
            {
                internalType: "int256",
                name: "_b",
                type: "int256"
            }
        ],
        name: "testAvg",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256"
            }
        ],
        stateMutability: "pure",
        type: "function"
    }
];
const _bytecode = "0x608060405234801561001057600080fd5b50610200806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806347037c901461003b5780634c64959614610070575b600080fd5b61005e6004803603604081101561005157600080fd5b5080359060200135610093565b60408051918252519081900360200190f35b61005e6004803603604081101561008657600080fd5b50803590602001356100a8565b600061009f83836100b4565b90505b92915050565b600061009f8383610133565b60008282018183128015906100c95750838112155b806100de57506000831280156100de57508381125b61009f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806101aa6021913960400191505060405180910390fd5b600080831280156101445750600082135b8061015a575060008313801561015a5750600082125b1561017a57600261016b84846100b4565b8161017257fe5b0590506100a2565b60006002808507818507010590506101a161019b60028605600286056100b4565b826100b4565b94935050505056fe5369676e6564536166654d6174683a206164646974696f6e206f766572666c6f77a2646970667358221220b688b144c4014b74f7ac370f44a0057f7b6ad0480cf0c07e3e5c8887a5c51c6464736f6c63430006020033";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uY3JldGVTaWduZWRTYWZlTWF0aEZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb25jcmV0ZVNpZ25lZFNhZmVNYXRoRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMENBQTBDO0FBQzFDLG9CQUFvQjs7QUFFcEIsbUNBQTJEO0FBTzNELE1BQWEsNkJBQThCLFNBQVEsd0JBQWU7SUFDaEUsWUFBWSxNQUFlO1FBQ3pCLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxNQUFNLENBQUMsU0FBZ0M7UUFDckMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBb0MsQ0FBQztJQUNwRSxDQUFDO0lBQ0Qsb0JBQW9CLENBQUMsU0FBZ0M7UUFDbkQsT0FBTyxLQUFLLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELE1BQU0sQ0FBQyxPQUFlO1FBQ3BCLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQTJCLENBQUM7SUFDekQsQ0FBQztJQUNELE9BQU8sQ0FBQyxNQUFjO1FBQ3BCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQWtDLENBQUM7SUFDaEUsQ0FBQztJQUNELE1BQU0sQ0FBQyxPQUFPLENBQ1osT0FBZSxFQUNmLGdCQUFtQztRQUVuQyxPQUFPLElBQUksaUJBQVEsQ0FDakIsT0FBTyxFQUNQLElBQUksRUFDSixnQkFBZ0IsQ0FDUyxDQUFDO0lBQzlCLENBQUM7Q0FDRjtBQTNCRCxzRUEyQkM7QUFFRCxNQUFNLElBQUksR0FBRztJQUNYO1FBQ0UsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxRQUFRO2FBQ2Y7WUFDRDtnQkFDRSxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFFBQVE7YUFDZjtTQUNGO1FBQ0QsSUFBSSxFQUFFLFNBQVM7UUFDZixPQUFPLEVBQUU7WUFDUDtnQkFDRSxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFFBQVE7YUFDZjtTQUNGO1FBQ0QsZUFBZSxFQUFFLE1BQU07UUFDdkIsSUFBSSxFQUFFLFVBQVU7S0FDakI7SUFDRDtRQUNFLE1BQU0sRUFBRTtZQUNOO2dCQUNFLFlBQVksRUFBRSxRQUFRO2dCQUN0QixJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsUUFBUTthQUNmO1lBQ0Q7Z0JBQ0UsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxRQUFRO2FBQ2Y7U0FDRjtRQUNELElBQUksRUFBRSxTQUFTO1FBQ2YsT0FBTyxFQUFFO1lBQ1A7Z0JBQ0UsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLElBQUksRUFBRSxFQUFFO2dCQUNSLElBQUksRUFBRSxRQUFRO2FBQ2Y7U0FDRjtRQUNELGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLElBQUksRUFBRSxVQUFVO0tBQ2pCO0NBQ0YsQ0FBQztBQUVGLE1BQU0sU0FBUyxHQUNiLG9rQ0FBb2tDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHZW5lcmF0ZWQgYnkgdHMtZ2VuZXJhdG9yIHZlci4gMC4wLjggKi9cbi8qIHRzbGludDpkaXNhYmxlICovXG5cbmltcG9ydCB7IENvbnRyYWN0LCBDb250cmFjdEZhY3RvcnksIFNpZ25lciB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcImV0aGVycy9wcm92aWRlcnNcIjtcbmltcG9ydCB7IFVuc2lnbmVkVHJhbnNhY3Rpb24gfSBmcm9tIFwiZXRoZXJzL3V0aWxzL3RyYW5zYWN0aW9uXCI7XG5cbmltcG9ydCB7IFRyYW5zYWN0aW9uT3ZlcnJpZGVzIH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IENvbmNyZXRlU2lnbmVkU2FmZU1hdGggfSBmcm9tIFwiLi9Db25jcmV0ZVNpZ25lZFNhZmVNYXRoXCI7XG5cbmV4cG9ydCBjbGFzcyBDb25jcmV0ZVNpZ25lZFNhZmVNYXRoRmFjdG9yeSBleHRlbmRzIENvbnRyYWN0RmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25lcj86IFNpZ25lcikge1xuICAgIHN1cGVyKF9hYmksIF9ieXRlY29kZSwgc2lnbmVyKTtcbiAgfVxuXG4gIGRlcGxveShvdmVycmlkZXM/OiBUcmFuc2FjdGlvbk92ZXJyaWRlcyk6IFByb21pc2U8Q29uY3JldGVTaWduZWRTYWZlTWF0aD4ge1xuICAgIHJldHVybiBzdXBlci5kZXBsb3kob3ZlcnJpZGVzKSBhcyBQcm9taXNlPENvbmNyZXRlU2lnbmVkU2FmZU1hdGg+O1xuICB9XG4gIGdldERlcGxveVRyYW5zYWN0aW9uKG92ZXJyaWRlcz86IFRyYW5zYWN0aW9uT3ZlcnJpZGVzKTogVW5zaWduZWRUcmFuc2FjdGlvbiB7XG4gICAgcmV0dXJuIHN1cGVyLmdldERlcGxveVRyYW5zYWN0aW9uKG92ZXJyaWRlcyk7XG4gIH1cbiAgYXR0YWNoKGFkZHJlc3M6IHN0cmluZyk6IENvbmNyZXRlU2lnbmVkU2FmZU1hdGgge1xuICAgIHJldHVybiBzdXBlci5hdHRhY2goYWRkcmVzcykgYXMgQ29uY3JldGVTaWduZWRTYWZlTWF0aDtcbiAgfVxuICBjb25uZWN0KHNpZ25lcjogU2lnbmVyKTogQ29uY3JldGVTaWduZWRTYWZlTWF0aEZhY3Rvcnkge1xuICAgIHJldHVybiBzdXBlci5jb25uZWN0KHNpZ25lcikgYXMgQ29uY3JldGVTaWduZWRTYWZlTWF0aEZhY3Rvcnk7XG4gIH1cbiAgc3RhdGljIGNvbm5lY3QoXG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIHNpZ25lck9yUHJvdmlkZXI6IFNpZ25lciB8IFByb3ZpZGVyXG4gICk6IENvbmNyZXRlU2lnbmVkU2FmZU1hdGgge1xuICAgIHJldHVybiBuZXcgQ29udHJhY3QoXG4gICAgICBhZGRyZXNzLFxuICAgICAgX2FiaSxcbiAgICAgIHNpZ25lck9yUHJvdmlkZXJcbiAgICApIGFzIENvbmNyZXRlU2lnbmVkU2FmZU1hdGg7XG4gIH1cbn1cblxuY29uc3QgX2FiaSA9IFtcbiAge1xuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiaW50MjU2XCIsXG4gICAgICAgIG5hbWU6IFwiX2FcIixcbiAgICAgICAgdHlwZTogXCJpbnQyNTZcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImludDI1NlwiLFxuICAgICAgICBuYW1lOiBcIl9iXCIsXG4gICAgICAgIHR5cGU6IFwiaW50MjU2XCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwidGVzdEFkZFwiLFxuICAgIG91dHB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImludDI1NlwiLFxuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcImludDI1NlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwicHVyZVwiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJpbnQyNTZcIixcbiAgICAgICAgbmFtZTogXCJfYVwiLFxuICAgICAgICB0eXBlOiBcImludDI1NlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiaW50MjU2XCIsXG4gICAgICAgIG5hbWU6IFwiX2JcIixcbiAgICAgICAgdHlwZTogXCJpbnQyNTZcIlxuICAgICAgfVxuICAgIF0sXG4gICAgbmFtZTogXCJ0ZXN0QXZnXCIsXG4gICAgb3V0cHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiaW50MjU2XCIsXG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwiaW50MjU2XCJcbiAgICAgIH1cbiAgICBdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJwdXJlXCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH1cbl07XG5cbmNvbnN0IF9ieXRlY29kZSA9XG4gIFwiMHg2MDgwNjA0MDUyMzQ4MDE1NjEwMDEwNTc2MDAwODBmZDViNTA2MTAyMDA4MDYxMDAyMDYwMDAzOTYwMDBmM2ZlNjA4MDYwNDA1MjM0ODAxNTYxMDAxMDU3NjAwMDgwZmQ1YjUwNjAwNDM2MTA2MTAwMzY1NzYwMDAzNTYwZTAxYzgwNjM0NzAzN2M5MDE0NjEwMDNiNTc4MDYzNGM2NDk1OTYxNDYxMDA3MDU3NWI2MDAwODBmZDViNjEwMDVlNjAwNDgwMzYwMzYwNDA4MTEwMTU2MTAwNTE1NzYwMDA4MGZkNWI1MDgwMzU5MDYwMjAwMTM1NjEwMDkzNTY1YjYwNDA4MDUxOTE4MjUyNTE5MDgxOTAwMzYwMjAwMTkwZjM1YjYxMDA1ZTYwMDQ4MDM2MDM2MDQwODExMDE1NjEwMDg2NTc2MDAwODBmZDViNTA4MDM1OTA2MDIwMDEzNTYxMDBhODU2NWI2MDAwNjEwMDlmODM4MzYxMDBiNDU2NWI5MDUwNWI5MjkxNTA1MDU2NWI2MDAwNjEwMDlmODM4MzYxMDEzMzU2NWI2MDAwODI4MjAxODE4MzEyODAxNTkwNjEwMGM5NTc1MDgzODExMjE1NWI4MDYxMDBkZTU3NTA2MDAwODMxMjgwMTU2MTAwZGU1NzUwODM4MTEyNWI2MTAwOWY1NzYwNDA1MTdmMDhjMzc5YTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDgxNTI2MDA0MDE4MDgwNjAyMDAxODI4MTAzODI1MjYwMjE4MTUyNjAyMDAxODA2MTAxYWE2MDIxOTEzOTYwNDAwMTkxNTA1MDYwNDA1MTgwOTEwMzkwZmQ1YjYwMDA4MDgzMTI4MDE1NjEwMTQ0NTc1MDYwMDA4MjEzNWI4MDYxMDE1YTU3NTA2MDAwODMxMzgwMTU2MTAxNWE1NzUwNjAwMDgyMTI1YjE1NjEwMTdhNTc2MDAyNjEwMTZiODQ4NDYxMDBiNDU2NWI4MTYxMDE3MjU3ZmU1YjA1OTA1MDYxMDBhMjU2NWI2MDAwNjAwMjgwODUwNzgxODUwNzAxMDU5MDUwNjEwMWExNjEwMTliNjAwMjg2MDU2MDAyODYwNTYxMDBiNDU2NWI4MjYxMDBiNDU2NWI5NDkzNTA1MDUwNTA1NmZlNTM2OTY3NmU2NTY0NTM2MTY2NjU0ZDYxNzQ2ODNhMjA2MTY0NjQ2OTc0Njk2ZjZlMjA2Zjc2NjU3MjY2NmM2Zjc3YTI2NDY5NzA2NjczNTgyMjEyMjBiNjg4YjE0NGM0MDE0Yjc0ZjdhYzM3MGY0NGEwMDU3ZjdiNmFkMDQ4MGNmMGMwN2UzZTVjODg4N2E1YzUxYzY0NjQ3MzZmNmM2MzQzMDAwNjAyMDAzM1wiO1xuIl19