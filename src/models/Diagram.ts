/**
 * This contains metadata about the diagram.
 * We need id and name in the first version.
 * Later we will add user information.
 */

import { ExcalidrawElement } from '@excalidraw/excalidraw/types/element/types';
import { ExcalidrawImperativeAPI } from '@excalidraw/excalidraw/types/types';

export class Diagram {
  id?: string | null;  // Primary Key from database. If it is null, it is a new diagram.
  name: string;
  createDate: Date;
  updateDate: Date;
  elements: ExcalidrawElement[] | []; // This is the elements array from database to be loaded into excalidraw.
  excalidrawAPI?: ExcalidrawImperativeAPI | null;  // After loading from db, this is set to the excalidrawAPI object.

  constructor(
    id: string,
    name: string,
    createDate: Date,
    updateDate: Date,
    elements?: ExcalidrawElement[],
    excalidrawAPI?: ExcalidrawImperativeAPI
  ) {
    this.id = id
    this.name = name
    this.createDate = createDate
    this.updateDate = updateDate
    this.elements = elements || []
    this.excalidrawAPI = excalidrawAPI || null
  }
}
