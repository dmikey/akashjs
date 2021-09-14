import { registry } from "../stargate";
import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, SigningStargateClient } from "@cosmjs/stargate";

export * from "./index";

export async function get(chain: any, signer: any) {
  const myRegistry = new Registry([
    ...defaultRegistryTypes,
    ...(registry as any),
  ]);
  return await SigningStargateClient.connectWithSigner(
    `https://bridge.testnet.akash.network/akashnetwork`,
    signer,
    {
      registry: myRegistry,
    } as any
  );
}