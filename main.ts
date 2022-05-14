import abi from "./abi.json";
import { deployMockContract } from "@ethereum-waffle/mock-contract";
import { MockProvider } from "ethereum-waffle";

async function mockTest() {
  console.log("Up and runnings");
  let [deployer] = new MockProvider().getWallets();
  let tMock = await deployMockContract(deployer, abi);
  await tMock.mock.token.returns(4);
  let status = await tMock.token();
  console.log(status);
}

mockTest().then(process.exit(0)).catch(console.log);
