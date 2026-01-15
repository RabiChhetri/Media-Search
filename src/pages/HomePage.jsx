import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import React from 'react'
import { useSelector } from "react-redux";


const Homepage = () => {
    const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );
  return (
    <div>
        
      <SearchBar />
      {query!=''?<div><Tabs /><ResultGrid /></div> :''}
    </div>
    
  )
}

export default Homepage
