"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
class ERC20BasicFactory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ERC20BasicFactory = ERC20BasicFactory;
const _abi = [
    {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "who",
                type: "address"
            }
        ],
        name: "balanceOf",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "to",
                type: "address"
            },
            {
                name: "value",
                type: "uint256"
            }
        ],
        name: "transfer",
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                name: "to",
                type: "address"
            },
            {
                indexed: false,
                name: "value",
                type: "uint256"
            }
        ],
        name: "Transfer",
        type: "event"
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRVJDMjBCYXNpY0ZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFUkMyMEJhc2ljRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMENBQTBDO0FBQzFDLG9CQUFvQjs7QUFFcEIsbUNBQTBDO0FBSzFDLE1BQWEsaUJBQWlCO0lBQzVCLE1BQU0sQ0FBQyxPQUFPLENBQ1osT0FBZSxFQUNmLGdCQUFtQztRQUVuQyxPQUFPLElBQUksaUJBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixDQUFlLENBQUM7SUFDckUsQ0FBQztDQUNGO0FBUEQsOENBT0M7QUFFRCxNQUFNLElBQUksR0FBRztJQUNYO1FBQ0UsUUFBUSxFQUFFLElBQUk7UUFDZCxNQUFNLEVBQUUsRUFBRTtRQUNWLElBQUksRUFBRSxhQUFhO1FBQ25CLE9BQU8sRUFBRTtZQUNQO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLElBQUksRUFBRSxTQUFTO2FBQ2hCO1NBQ0Y7UUFDRCxPQUFPLEVBQUUsS0FBSztRQUNkLGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLElBQUksRUFBRSxVQUFVO0tBQ2pCO0lBQ0Q7UUFDRSxRQUFRLEVBQUUsSUFBSTtRQUNkLE1BQU0sRUFBRTtZQUNOO2dCQUNFLElBQUksRUFBRSxLQUFLO2dCQUNYLElBQUksRUFBRSxTQUFTO2FBQ2hCO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsV0FBVztRQUNqQixPQUFPLEVBQUU7WUFDUDtnQkFDRSxJQUFJLEVBQUUsRUFBRTtnQkFDUixJQUFJLEVBQUUsU0FBUzthQUNoQjtTQUNGO1FBQ0QsT0FBTyxFQUFFLEtBQUs7UUFDZCxlQUFlLEVBQUUsTUFBTTtRQUN2QixJQUFJLEVBQUUsVUFBVTtLQUNqQjtJQUNEO1FBQ0UsUUFBUSxFQUFFLEtBQUs7UUFDZixNQUFNLEVBQUU7WUFDTjtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUzthQUNoQjtZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLElBQUksRUFBRSxTQUFTO2FBQ2hCO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsVUFBVTtRQUNoQixPQUFPLEVBQUU7WUFDUDtnQkFDRSxJQUFJLEVBQUUsRUFBRTtnQkFDUixJQUFJLEVBQUUsTUFBTTthQUNiO1NBQ0Y7UUFDRCxPQUFPLEVBQUUsS0FBSztRQUNkLGVBQWUsRUFBRSxZQUFZO1FBQzdCLElBQUksRUFBRSxVQUFVO0tBQ2pCO0lBQ0Q7UUFDRSxTQUFTLEVBQUUsS0FBSztRQUNoQixNQUFNLEVBQUU7WUFDTjtnQkFDRSxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsU0FBUzthQUNoQjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxTQUFTO2FBQ2hCO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsSUFBSSxFQUFFLFNBQVM7YUFDaEI7U0FDRjtRQUNELElBQUksRUFBRSxVQUFVO1FBQ2hCLElBQUksRUFBRSxPQUFPO0tBQ2Q7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogR2VuZXJhdGVkIGJ5IHRzLWdlbmVyYXRvciB2ZXIuIDAuMC44ICovXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuXG5pbXBvcnQgeyBDb250cmFjdCwgU2lnbmVyIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwiZXRoZXJzL3Byb3ZpZGVyc1wiO1xuXG5pbXBvcnQgeyBFUkMyMEJhc2ljIH0gZnJvbSBcIi4vRVJDMjBCYXNpY1wiO1xuXG5leHBvcnQgY2xhc3MgRVJDMjBCYXNpY0ZhY3Rvcnkge1xuICBzdGF0aWMgY29ubmVjdChcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgc2lnbmVyT3JQcm92aWRlcjogU2lnbmVyIHwgUHJvdmlkZXJcbiAgKTogRVJDMjBCYXNpYyB7XG4gICAgcmV0dXJuIG5ldyBDb250cmFjdChhZGRyZXNzLCBfYWJpLCBzaWduZXJPclByb3ZpZGVyKSBhcyBFUkMyMEJhc2ljO1xuICB9XG59XG5cbmNvbnN0IF9hYmkgPSBbXG4gIHtcbiAgICBjb25zdGFudDogdHJ1ZSxcbiAgICBpbnB1dHM6IFtdLFxuICAgIG5hbWU6IFwidG90YWxTdXBwbHlcIixcbiAgICBvdXRwdXRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwidWludDI1NlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgY29uc3RhbnQ6IHRydWUsXG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwid2hvXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiXG4gICAgICB9XG4gICAgXSxcbiAgICBuYW1lOiBcImJhbGFuY2VPZlwiLFxuICAgIG91dHB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCJcbiAgICAgIH1cbiAgICBdLFxuICAgIHBheWFibGU6IGZhbHNlLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH0sXG4gIHtcbiAgICBjb25zdGFudDogZmFsc2UsXG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwidG9cIixcbiAgICAgICAgdHlwZTogXCJhZGRyZXNzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwidmFsdWVcIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwidHJhbnNmZXJcIixcbiAgICBvdXRwdXRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwiYm9vbFwiXG4gICAgICB9XG4gICAgXSxcbiAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgYW5vbnltb3VzOiBmYWxzZSxcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcbiAgICAgICAgbmFtZTogXCJmcm9tXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbmRleGVkOiB0cnVlLFxuICAgICAgICBuYW1lOiBcInRvXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbmRleGVkOiBmYWxzZSxcbiAgICAgICAgbmFtZTogXCJ2YWx1ZVwiLFxuICAgICAgICB0eXBlOiBcInVpbnQyNTZcIlxuICAgICAgfVxuICAgIF0sXG4gICAgbmFtZTogXCJUcmFuc2ZlclwiLFxuICAgIHR5cGU6IFwiZXZlbnRcIlxuICB9XG5dO1xuIl19