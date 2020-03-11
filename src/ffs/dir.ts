import { cidToDAGLink, addLink, addNestedLink, emptyFolder, splitPath } from './helpers'
import { getIpfs, CID } from '../ipfs'

export async function addFile(file: Blob): Promise<CID> {
  const ipfs = await getIpfs()
  const chunks = []
  for await (const chunk of ipfs.add(file)){
    chunks.push(chunk)
  }
  return chunks[chunks.length - 1].cid.toString()
}

export async function addFileToFolder(file: Blob, filename: string, parent: CID): Promise<CID> {
  const fileCID = await addFile(file)
  const link = await cidToDAGLink(fileCID, filename)
  return addLink(parent, link)
}

export async function addFileToNestedFolder(file: Blob, filename: string, root: CID, folderPath: string): Promise<CID> {
  const fileCID = await addFile(file)
  const link = await cidToDAGLink(fileCID, filename)
  return addNestedLink(root, folderPath, link, true)
}

export async function mkdir(parent: CID, folderName: string): Promise<CID> {
  const child = await emptyFolder()
  const childLink = await child.toDAGLink({ name: folderName })
  return addNestedLink(parent, "", childLink, false)
}

export async function mkdirp(parent: CID, folderPath: string): Promise<CID> {
  const path = splitPath(folderPath)
  if(path.length === 0){
    return parent
  }
  const empty = await emptyFolder()
  const link = await empty.toDAGLink({ name: path[path.length -1] })
  const restOfPath = path.slice(0, path.length -1).join('/')
  return addNestedLink(parent, restOfPath, link, false)
}