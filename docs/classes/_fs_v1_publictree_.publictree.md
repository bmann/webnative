[Fission SDK](../README.md) › ["fs/v1/PublicTree"](../modules/_fs_v1_publictree_.md) › [PublicTree](_fs_v1_publictree_.publictree.md)

# Class: PublicTree

## Hierarchy

* BaseTree

  ↳ **PublicTree**

  ↳ [PrivateTree](_fs_v1_privatetree_.privatetree.md)

## Implements

* Tree
* HeaderTree

## Index

### Constructors

* [constructor](_fs_v1_publictree_.publictree.md#constructor)

### Properties

* [version](_fs_v1_publictree_.publictree.md#version)

### Methods

* [add](_fs_v1_publictree_.publictree.md#add)
* [addChild](_fs_v1_publictree_.publictree.md#addchild)
* [addRecurse](_fs_v1_publictree_.publictree.md#addrecurse)
* [cat](_fs_v1_publictree_.publictree.md#cat)
* [childFileFromCID](_fs_v1_publictree_.publictree.md#childfilefromcid)
* [childTreeFromCID](_fs_v1_publictree_.publictree.md#childtreefromcid)
* [childTreeFromHeader](_fs_v1_publictree_.publictree.md#childtreefromheader)
* [createChildFile](_fs_v1_publictree_.publictree.md#createchildfile)
* [emptyChildTree](_fs_v1_publictree_.publictree.md#emptychildtree)
* [findLink](_fs_v1_publictree_.publictree.md#findlink)
* [findLinkCID](_fs_v1_publictree_.publictree.md#findlinkcid)
* [get](_fs_v1_publictree_.publictree.md#get)
* [getDirectChild](_fs_v1_publictree_.publictree.md#getdirectchild)
* [getHeader](_fs_v1_publictree_.publictree.md#getheader)
* [getLinks](_fs_v1_publictree_.publictree.md#getlinks)
* [getOrCreateDirectChild](_fs_v1_publictree_.publictree.md#getorcreatedirectchild)
* [ls](_fs_v1_publictree_.publictree.md#ls)
* [mkdir](_fs_v1_publictree_.publictree.md#mkdir)
* [pathExists](_fs_v1_publictree_.publictree.md#pathexists)
* [put](_fs_v1_publictree_.publictree.md#put)
* [putWithPins](_fs_v1_publictree_.publictree.md#putwithpins)
* [removeDirectChild](_fs_v1_publictree_.publictree.md#removedirectchild)
* [rm](_fs_v1_publictree_.publictree.md#rm)
* [rmLink](_fs_v1_publictree_.publictree.md#rmlink)
* [rmNested](_fs_v1_publictree_.publictree.md#rmnested)
* [updateDirectChild](_fs_v1_publictree_.publictree.md#updatedirectchild)
* [updateHeader](_fs_v1_publictree_.publictree.md#updateheader)
* [updateLink](_fs_v1_publictree_.publictree.md#updatelink)
* [updatePins](_fs_v1_publictree_.publictree.md#updatepins)
* [empty](_fs_v1_publictree_.publictree.md#static-empty)
* [fromCID](_fs_v1_publictree_.publictree.md#static-fromcid)
* [fromHeader](_fs_v1_publictree_.publictree.md#static-fromheader)
* [instanceOf](_fs_v1_publictree_.publictree.md#static-instanceof)

## Constructors

###  constructor

\+ **new PublicTree**(`header`: HeaderV1, `parentKey`: Maybe‹string›): *[PublicTree](_fs_v1_publictree_.publictree.md)*

*Overrides void*

*Defined in [src/fs/v1/PublicTree.ts:19](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/v1/PublicTree.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`header` | HeaderV1 |
`parentKey` | Maybe‹string› |

**Returns:** *[PublicTree](_fs_v1_publictree_.publictree.md)*

## Properties

###  version

• **version**: *SemVer*

*Inherited from [PublicTree](_fs_v1_publictree_.publictree.md).[version](_fs_v1_publictree_.publictree.md#version)*

*Defined in [src/fs/base/tree.ts:12](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/base/tree.ts#L12)*

## Methods

###  add

▸ **add**(`path`: string, `content`: FileContent): *Promise‹this›*

*Inherited from [PublicTree](_fs_v1_publictree_.publictree.md).[add](_fs_v1_publictree_.publictree.md#add)*

*Defined in [src/fs/base/tree.ts:47](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/base/tree.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`content` | FileContent |

**Returns:** *Promise‹this›*

___

###  addChild

▸ **addChild**(`path`: string, `toAdd`: Tree | FileContent): *Promise‹this›*

*Inherited from [PublicTree](_fs_v1_publictree_.publictree.md).[addChild](_fs_v1_publictree_.publictree.md#addchild)*

*Defined in [src/fs/base/tree.ts:51](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/base/tree.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`toAdd` | Tree &#124; FileContent |

**Returns:** *Promise‹this›*

___

###  addRecurse

▸ **addRecurse**(`path`: NonEmptyPath, `child`: Tree | FileContent): *Promise‹this›*

*Inherited from [PublicTree](_fs_v1_publictree_.publictree.md).[addRecurse](_fs_v1_publictree_.publictree.md#addrecurse)*

*Defined in [src/fs/base/tree.ts:60](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/base/tree.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | NonEmptyPath |
`child` | Tree &#124; FileContent |

**Returns:** *Promise‹this›*

___

###  cat

▸ **cat**(`path`: string): *Promise‹FileContent›*

*Inherited from [PublicTree](_fs_v1_publictree_.publictree.md).[cat](_fs_v1_publictree_.publictree.md#cat)*

*Defined in [src/fs/base/tree.ts:37](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/base/tree.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *Promise‹FileContent›*

___

###  childFileFromCID

▸ **childFileFromCID**(`cid`: CID): *Promise‹HeaderFile›*

*Overrides void*

*Defined in [src/fs/v1/PublicTree.ts:67](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/v1/PublicTree.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`cid` | CID |

**Returns:** *Promise‹HeaderFile›*

___

###  childTreeFromCID

▸ **childTreeFromCID**(`cid`: CID): *Promise‹HeaderTree›*

*Overrides void*

*Defined in [src/fs/v1/PublicTree.ts:55](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/v1/PublicTree.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`cid` | CID |

**Returns:** *Promise‹HeaderTree›*

___

###  childTreeFromHeader

▸ **childTreeFromHeader**(`header`: HeaderV1): *HeaderTree*

*Defined in [src/fs/v1/PublicTree.ts:59](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/v1/PublicTree.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`header` | HeaderV1 |

**Returns:** *HeaderTree*

___

###  createChildFile

▸ **createChildFile**(`content`: FileContent): *Promise‹HeaderFile›*

*Overrides void*

*Defined in [src/fs/v1/PublicTree.ts:63](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/v1/PublicTree.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`content` | FileContent |

**Returns:** *Promise‹HeaderFile›*

___

###  emptyChildTree

▸ **emptyChildTree**(): *Promise‹HeaderTree›*

*Overrides void*

*Defined in [src/fs/v1/PublicTree.ts:51](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/v1/PublicTree.ts#L51)*

**Returns:** *Promise‹HeaderTree›*

___

###  findLink

▸ **findLink**(`name`: string): *NodeInfo | null*

*Defined in [src/fs/v1/PublicTree.ts:156](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/v1/PublicTree.ts#L156)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *NodeInfo | null*

___

###  findLinkCID

▸ **findLinkCID**(`name`: string): *CID | null*

*Defined in [src/fs/v1/PublicTree.ts:160](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/v1/PublicTree.ts#L160)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *CID | null*

___

###  get

▸ **get**(`path`: string): *Promise‹Tree | File | null›*

*Inherited from [PublicTree](_fs_v1_publictree_.publictree.md).[get](_fs_v1_publictree_.publictree.md#get)*

*Defined in [src/fs/base/tree.ts:111](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/base/tree.ts#L111)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *Promise‹Tree | File | null›*

___

###  getDirectChild

▸ **getDirectChild**(`name`: string): *Promise‹HeaderTree | HeaderFile | null›*

*Overrides void*

*Defined in [src/fs/v1/PublicTree.ts:111](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/v1/PublicTree.ts#L111)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *Promise‹HeaderTree | HeaderFile | null›*

___

###  getHeader

▸ **getHeader**(): *HeaderV1*

*Defined in [src/fs/v1/PublicTree.ts:176](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/v1/PublicTree.ts#L176)*

**Returns:** *HeaderV1*

___

###  getLinks

▸ **getLinks**(): *Links*

*Overrides void*

*Defined in [src/fs/v1/PublicTree.ts:172](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/v1/PublicTree.ts#L172)*

**Returns:** *Links*

___

###  getOrCreateDirectChild

▸ **getOrCreateDirectChild**(`name`: string): *Promise‹HeaderTree | HeaderFile›*

*Overrides void*

*Defined in [src/fs/v1/PublicTree.ts:119](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/v1/PublicTree.ts#L119)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *Promise‹HeaderTree | HeaderFile›*

___

###  ls

▸ **ls**(`path`: string): *Promise‹Links›*

*Inherited from [PublicTree](_fs_v1_publictree_.publictree.md).[ls](_fs_v1_publictree_.publictree.md#ls)*

*Defined in [src/fs/base/tree.ts:18](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/base/tree.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *Promise‹Links›*

___

###  mkdir

▸ **mkdir**(`path`: string): *Promise‹this›*

*Inherited from [PublicTree](_fs_v1_publictree_.publictree.md).[mkdir](_fs_v1_publictree_.publictree.md#mkdir)*

*Defined in [src/fs/base/tree.ts:28](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/base/tree.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *Promise‹this›*

___

###  pathExists

▸ **pathExists**(`path`: string): *Promise‹boolean›*

*Inherited from [PublicTree](_fs_v1_publictree_.publictree.md).[pathExists](_fs_v1_publictree_.publictree.md#pathexists)*

*Defined in [src/fs/base/tree.ts:106](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/base/tree.ts#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *Promise‹boolean›*

___

###  put

▸ **put**(): *Promise‹CID›*

*Overrides void*

*Defined in [src/fs/v1/PublicTree.ts:71](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/v1/PublicTree.ts#L71)*

**Returns:** *Promise‹CID›*

___

###  putWithPins

▸ **putWithPins**(): *Promise‹PutResult›*

*Defined in [src/fs/v1/PublicTree.ts:76](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/v1/PublicTree.ts#L76)*

**Returns:** *Promise‹PutResult›*

___

###  removeDirectChild

▸ **removeDirectChild**(`name`: string): *Promise‹this›*

*Overrides void*

*Defined in [src/fs/v1/PublicTree.ts:105](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/v1/PublicTree.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *Promise‹this›*

___

###  rm

▸ **rm**(`path`: string): *Promise‹this›*

*Inherited from [PublicTree](_fs_v1_publictree_.publictree.md).[rm](_fs_v1_publictree_.publictree.md#rm)*

*Defined in [src/fs/base/tree.ts:83](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/base/tree.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *Promise‹this›*

___

###  rmLink

▸ **rmLink**(`name`: string): *Tree*

*Defined in [src/fs/v1/PublicTree.ts:164](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/v1/PublicTree.ts#L164)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *Tree*

___

###  rmNested

▸ **rmNested**(`path`: NonEmptyPath): *Promise‹this›*

*Inherited from [PublicTree](_fs_v1_publictree_.publictree.md).[rmNested](_fs_v1_publictree_.publictree.md#rmnested)*

*Defined in [src/fs/base/tree.ts:91](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/base/tree.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | NonEmptyPath |

**Returns:** *Promise‹this›*

___

###  updateDirectChild

▸ **updateDirectChild**(`child`: HeaderTree | HeaderFile, `name`: string): *Promise‹this›*

*Overrides void*

*Defined in [src/fs/v1/PublicTree.ts:94](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/v1/PublicTree.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`child` | HeaderTree &#124; HeaderFile |
`name` | string |

**Returns:** *Promise‹this›*

___

###  updateHeader

▸ **updateHeader**(`name`: string, `childInfo`: Maybe‹NodeInfo›): *Promise‹this›*

*Defined in [src/fs/v1/PublicTree.ts:124](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/v1/PublicTree.ts#L124)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`childInfo` | Maybe‹NodeInfo› |

**Returns:** *Promise‹this›*

___

###  updateLink

▸ **updateLink**(`info`: NodeInfo): *Tree*

*Defined in [src/fs/v1/PublicTree.ts:145](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/v1/PublicTree.ts#L145)*

**Parameters:**

Name | Type |
------ | ------ |
`info` | NodeInfo |

**Returns:** *Tree*

___

###  updatePins

▸ **updatePins**(`name`: string, `pins`: Maybe‹PinMap›): *this*

*Defined in [src/fs/v1/PublicTree.ts:140](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/v1/PublicTree.ts#L140)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`pins` | Maybe‹PinMap› |

**Returns:** *this*

___

### `Static` empty

▸ **empty**(`parentKey`: Maybe‹string›): *Promise‹HeaderTree›*

*Defined in [src/fs/v1/PublicTree.ts:31](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/v1/PublicTree.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`parentKey` | Maybe‹string› |

**Returns:** *Promise‹HeaderTree›*

___

### `Static` fromCID

▸ **fromCID**(`cid`: CID, `parentKey`: Maybe‹string›): *Promise‹HeaderTree›*

*Defined in [src/fs/v1/PublicTree.ts:38](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/v1/PublicTree.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`cid` | CID |
`parentKey` | Maybe‹string› |

**Returns:** *Promise‹HeaderTree›*

___

### `Static` fromHeader

▸ **fromHeader**(`header`: HeaderV1, `parentKey`: Maybe‹string›): *HeaderTree*

*Defined in [src/fs/v1/PublicTree.ts:43](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/v1/PublicTree.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`header` | HeaderV1 |
`parentKey` | Maybe‹string› |

**Returns:** *HeaderTree*

___

### `Static` instanceOf

▸ **instanceOf**(`obj`: any): *obj is PublicTree*

*Defined in [src/fs/v1/PublicTree.ts:47](https://github.com/fission-suite/ts-sdk/blob/f59fd0a/src/fs/v1/PublicTree.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |

**Returns:** *obj is PublicTree*
