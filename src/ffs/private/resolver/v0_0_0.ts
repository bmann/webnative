import { CID, FileContent } from '../../../ipfs'
import { Links, Metadata, PrivateTreeData } from '../../types'
import util from './util'

export const getFile = async (cid: CID, key: string): Promise<FileContent> => {
  return util.getFile(cid, key)
}

export const getTree = async (cid: CID, key: string): Promise<PrivateTreeData> => {
  return util.getTree(cid, key)
}

export const getMetadata = async (_cid: CID): Promise<Partial<Metadata>> => {
  return { }
}

export const putFile = async (content: FileContent, key: string, _metadata: Partial<Metadata>): Promise<CID> => {
  return util.putFile(content, key)
}

export const putTree = async (data: PrivateTreeData, key: string, _metadata: Partial<Metadata>): Promise<CID> => { 
  return util.putTree(data, key)
}

export default {
  getFile,
  getTree,
  getMetadata,
  putFile,
  putTree
}