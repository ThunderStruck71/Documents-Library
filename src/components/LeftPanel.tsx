import React, { FC } from "react";
import { SearchTermType } from "../types";
import Sort from "./Sort";

type LeftPanelProps = {
  searchTerm: SearchTermType;
  update: (key: string, value: string) => void;
  updateSortField: (value: string) => void;
  updateSortDirection: (value: string) => void;
}

const LeftPanel: FC<LeftPanelProps> = props => {
  const { searchTerm, update, updateSortField, updateSortDirection } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => update(e.target.name, e.target.value);

  return (
    <div className="leftPanel">
      <div className="leftPanel__field">
        <input
          className="leftPanel__field_input"
          type="text"
          id="id"
          name="id"
          value={searchTerm.id}
          placeholder="ID Документа"
          onChange={onChangeHandler}
          required
        />
        <label htmlFor="id" className="leftPanel__field_label">ID Документа</label>
      </div>
      <div className="leftPanel__warning">Если заполнено поле <strong>ID Документа</strong> все остальные поля будут проигнорированы</div>
      <div className="leftPanel__field">
        <input
          className="leftPanel__field_date"
          type="date"
          id="creationDate"
          name="creationDate"
          value={searchTerm.creationDate}
          onChange={onChangeHandler}
        />
        <label htmlFor="creationDate" className="leftPanel__field_label">Создан</label>
      </div>
      <div className="leftPanel__field">
        <input
          className="leftPanel__field_input"
          type="text"
          placeholder="Название"
          id="name"
          name="name"
          value={searchTerm.name}
          onChange={onChangeHandler}
          required
        />
        <label htmlFor="name" className="leftPanel__field_label">Название</label>
      </div>
      <Sort updateSortField={updateSortField} updateSortDirection={updateSortDirection} />
    </div>
  );
};

export default LeftPanel;

