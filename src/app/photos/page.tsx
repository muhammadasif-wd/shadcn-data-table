"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { DataTable } from "../data-table-components/data-table";
import { PhotosColumns } from "./photos-columns";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <div className="p-10">
      <div className="container shadow border p-3">
        <h1 className="text-center shadow border rounded mb-3 p-1">
          Our Photos
        </h1>
        <DataTable data={photos} columns={PhotosColumns} />
      </div>
    </div>
  );
};

export default Page;
