import React, { FC, useState } from "react";
import { DocumentType } from "../types";

type DocumentProps = {
  document: DocumentType;
}

const Document: FC<DocumentProps> = props => {
  const { document } = props;
  const [checked, setChecked] = useState(false);

  const onClickHandler = () => {
    setChecked(!checked);
  };

  return (
    <div className="documentsList__element">
      <input type="checkbox" id={document.id.toString()} className="documentsList__element_input" onClick={onClickHandler} />
      <label className="documentsList__element_label" htmlFor={document.id.toString()}>{document.name}</label>
      {
        checked && <div className="documentsList__element_description">
          <span>{document.description}</span>
        </div>
      }
    </div>
  );
};

export default Document;