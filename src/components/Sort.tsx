import React, { FC } from "react";
import { ASCENDING, CREATION_DATE, DESCENDING, NAME } from "../types";

type SortProps = {
  updateSortField: (value: string) => void;
  updateSortDirection: (value: string) => void;
};

const Sort: FC<SortProps> = props => {
  const { updateSortField, updateSortDirection } = props;

  const onChangeSortFieldHandler = (e: React.ChangeEvent<HTMLSelectElement>) => updateSortField(e.target.value);

  const onChangeSortDirectionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => updateSortDirection(e.target.value);

  return (
    <div className="leftPanel__field">
      <span className="leftPanel__field_sortTitle">Сортировка</span>
      <div className="leftPanel__field_sortOptions">
        <select className="leftPanel__field_sortOptions_select" defaultValue={CREATION_DATE} onChange={onChangeSortFieldHandler}>
          <option value={CREATION_DATE}>Создан</option>
          <option value={NAME}>Название</option>
        </select>
        <select className="leftPanel__field_sortOptions_select" defaultValue={ASCENDING} onChange={onChangeSortDirectionHandler}>
          <option value={ASCENDING}>По возрастанию</option>
          <option value={DESCENDING}>По убыванию</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;