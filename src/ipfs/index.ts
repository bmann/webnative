import getIpfsWithCfg from 'get-ipfs'
import { IPFS } from './types'

const IPFS_CFG = { browserPeers: [  "/dns4/node.runfission.com/tcp/4003/wss/ipfs/QmVLEz2SxoNiFnuyLpbXsH6SvjPTrHNMU88vCQZyhgBzgw"] }
let ipfs: IPFS | null = null 

// TODO: There is funky type stuff going on here with `any`s
// This is because we need to redo the types for js-ipfs.
// get-ipfs is still on old types, and this pkg is progressively creating the new types

export function setIpfs(userIpfs: any) {
  ipfs = userIpfs as IPFS
}

export async function getIpfs() {
  if(ipfs){
    return ipfs
  }
  ipfs = (await getIpfsWithCfg(IPFS_CFG)) as any as IPFS
  return ipfs
}

export * from './types'

export default {
  setIpfs,
  getIpfs,
}