/** @internal */

/** @internal */
import { File } from '../types'
import { AddResult, CID, FileContent } from '../../ipfs'


export abstract class BaseFile implements File {

  content: FileContent

  constructor(content: FileContent) {
    this.content = content
  }

  async put(): Promise<CID> {
    const { cid } = await this.putDetailed()
    return cid
  }

  abstract async putDetailed(): Promise<AddResult>
}


export default BaseFile
