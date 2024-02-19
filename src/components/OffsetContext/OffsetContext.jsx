import { createContext, useState, useContext } from 'react';

const OffsetContext = createContext();

//CONTEXTO CREADO DEL ESTADO "OFFSET" PARA EL USO COMÚN ENTRE EL CUSTOM-HOOK(API)
//Y EL COMPONENTE PAGINATION

export const OffsetProvider = ({ children }) => {
  const [offset, setOffset] = useState(1);
  
  return (
    <OffsetContext.Provider value={{ offset, setOffset }}>
      {children}
    </OffsetContext.Provider>
  );
};

export const useOffset = () => {
  return useContext(OffsetContext);
};