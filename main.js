"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abi_json_1 = __importDefault(require("./abi.json"));
const mock_contract_1 = require("@ethereum-waffle/mock-contract");
const ethereum_waffle_1 = require("ethereum-waffle");
function mockTest() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Up and runnings");
        let [deployer] = new ethereum_waffle_1.MockProvider().getWallets();
        let tMock = yield (0, mock_contract_1.deployMockContract)(deployer, abi_json_1.default);
        yield tMock.mock.token.returns(4);
        let status = yield tMock.token();
        console.log(status);
    });
}
mockTest().then(process.exit(0)).catch(console.log);
