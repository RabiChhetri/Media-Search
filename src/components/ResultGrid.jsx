import React, { useEffect } from "react";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from '../components/ResultCard'

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );

  useEffect(
    function () {
      if (!query) return;
      const getData = async () => {
        try {
          dispatch(setLoading());
          let data = [];
          if (activeTab == "photos") {
            let res = await fetchPhotos(query);
            data = res.results.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt_description,
              thumbnail: item.urls.small,
              src: item.urls.full,
              url:item.links.html
            }));
          }
          if (activeTab === "videos") {
            let res = await fetchVideos(query);
            data = res.videos.map((item) => ({
              id: item.id,
              type: "video",
              title: item.user?.name || "Video",
              thumbnail: item.image,
              src: item.video_files?.[0]?.link,
              url:item.url
            }));
          }

          dispatch(setResults(data));
        } catch (err) {
          dispatch(setError(err.message));
        }
      };
      getData();
    },
    [query, activeTab,dispatch]
  );
  if (error) return <div className="text-center text-red-500 p-8">
    <h2 className="text-xl font-semibold mb-2">Error occurred</h2>
    <p>{error}</p>
  </div>;
  if (loading) return <div className="text-center p-8">
    <h2 className="text-xl">Loading...</h2>
  </div>;
  return (
    <div className="flex flex-wrap w-full justify-center gap-6 overflow-auto px-10">
      {results.map((item, idx) => {
        return <div key={idx}>
          <ResultCard item={item}/>
        </div>;
      })}
    </div>
  );
};

export default ResultGrid;
