import React, { createContext, useState } from 'react';

export const ExampleContext = createContext();

export function ExampleProvider({ children }) {
  const [example, setExample] = useState(null);

  return (
    <ExampleContext.Provider value={{ example, setExample }}>
      {children}
    </ExampleContext.Provider>
  );
}
