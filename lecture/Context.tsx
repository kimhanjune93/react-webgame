import * as React from "react";
import { createContext, FC } from "react";
import {userStore, postStore} from './store';

export const storeContext = createContext({
  userStore,
  postStore,
});

interface Props {
  children: React.ReactElement
}

export const StoreProvider: FC<Props> = ({ children }) => {
  return (
    <storeContext.Provider value={{ userStore, postStore }}>
      {children}
    </storeContext.Provider>
  );
};
