import React, { FC, useEffect, useState } from "react";
import { client } from "./api/client";
import DocumentsList from "./components/DocumentsList";
import LeftPanel from "./components/LeftPanel";
import { ASCENDING, CREATION_DATE, DocumentType, SearchTermType, SortType } from "./types";
import "./index.less";

const App: FC = () => {
  const [searchTerm, setSearchTerm] = useState<SearchTermType>({
    id: "",
    name: "",
    creationDate: ""
  });
  const [searchResults, setSearchResults] = useState<DocumentType[]>([]);
  const [sortOption, setSortOption] = useState<SortType>({
    field: CREATION_DATE,
    direction: ASCENDING
  });

  useEffect(() => {
    async function getDocuments() {
      const response = await client.post("/fakeApi/search", searchTerm);

      setSearchResults(response.documents);
    }

    getDocuments();
  }, [searchTerm]);

  const updateStateFromSearch = (key: string, value: string) => {
    setSearchTerm({
      ...searchTerm,
      [key]: value
    });
  };

  const updateSortField = (value: string) => {
    setSortOption({
      ...sortOption,
      field: value
    });
  };

  const updateSortDirection = (value: string) => {
    setSortOption({
      ...sortOption,
      direction: value
    });
  };

  return (
    <>
      <h1>Поиск документов</h1>
      <main>
        <LeftPanel
          searchTerm={searchTerm}
          update={updateStateFromSearch}
          updateSortField={updateSortField}
          updateSortDirection={updateSortDirection}
        />
        <DocumentsList sortOption={sortOption} documents={searchResults} />
      </main>
    </>
  );
};

export default App;