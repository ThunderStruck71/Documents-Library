import React, { FC } from "react";
import { ASCENDING, DocumentType, NAME, SortType } from "../types";
import Document from "./Document";

type DocumentsListProps = {
  documents: DocumentType[];
  sortOption: SortType
}

const DocumentsList: FC<DocumentsListProps> = props => {
  const { documents, sortOption } = props;

  const sortDocuments = () => {
    const documentsCopy = documents.slice();

    const direction = sortOption.direction === ASCENDING ? 1 : -1;

    if (sortOption.field === NAME) {
      return documentsCopy.sort((prev, next) => prev.name > next.name ? direction : direction * -1);
    } else {
      return documentsCopy.sort((prev, next) => prev.creationDate > next.creationDate ? direction : direction * -1);
    }
  }

  return (
    <div className="documentsList">
      {documents.length > 0
        ? sortDocuments().map(doc => (
          <Document key={doc.id} document={doc} />
        ))
        : <span className="documentsList__notFound">No results</span>
      }
    </div>
  );
};

export default DocumentsList;