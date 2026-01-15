import React from "react";
import { useDispatch } from "react-redux";
import { removeCollection, removeToast } from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
    const dispatch =useDispatch()
    const removeFromCollection=(item)=>{
        dispatch(removeCollection(item.id))
        dispatch(removeToast())
    }
  return (
    <div className="w-[15vw] relative h-80 bg-white rounded-xl overflow-hidden">
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="h-full block"
      >
        {item.type === "photo" && (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt={item.title}
          />
        )}

        {item.type === "video" && (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            src={item.src}
          />
        )}
      </a>

      <div className="flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white bg-gradient-to-t from-black/70 to-transparent">
        <h2 className="text-lg font-semibold capitalize h-14 overflow-hidden">
          {item.title}
        </h2>

        <button
          onClick={() => {removeFromCollection(item)}}
          className="bg-indigo-600 active:scale-95 text-white rounded px-3 py-1 font-medium"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
