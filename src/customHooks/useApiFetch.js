import { useEffect, useState } from "react";
import { useOffset } from "../components/OffsetContext/OffsetContext";

export const useApiFetch = (section) => {
  const { offset, setOffset } = useOffset()
  const [data, setData] = useState([]);

  useEffect (() => {
    setOffset(1)
    const fetchData = async () => {
      try {
        const response = await fetch(`https://gateway.marvel.com/v1/public/${section}?limit=20&offset=${offset}&ts=1234&apikey=7fe82a34dafe7d3ba25d1030ce595d1a&hash=3d20528b59b9a9218c6763ce1c65efdb`);
        const result = await response.json();
        const data = result.data.results;
        setData(data)

    } catch (error) {
      console.error('Error con la API:' + error.message)
    }
  }
  fetchData();

  }, [offset, section]);

  return { data };
  }