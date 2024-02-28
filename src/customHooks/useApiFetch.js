import { useEffect, useState } from "react";
import { useOffset } from "../components/OffsetContext/OffsetContext";

export const useApiFetch = (section) => {
  const { offset, setOffset } = useOffset()
  const [data, setData] = useState([]);
  const [total, setTotal] = useState();

  useEffect (() => {
    setOffset(1)
  }, [total, setOffset])

  const fetchData = async () => {
    const apiKey = "7fe82a34dafe7d3ba25d1030ce595d1a"
    const apiHash = "3d20528b59b9a9218c6763ce1c65efdb"
    
    try {
      const response = await fetch(`https://gateway.marvel.com/v1/public/${section}?limit=20&offset=${offset}&ts=1234&apikey=${apiKey}&hash=${apiHash}`);
      const result = await response.json();
      setData(result.data.results);
      setTotal(result.data.total);
    } catch (error) {
      console.error('Error con la API:' + error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [offset]);

  return { data, total };
  }