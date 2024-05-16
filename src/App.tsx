import { StrictMode, type FC } from "react";
import AntdConfigProvider from "./components/layout/antdConfigProvider";
import AppRouterProvider from "./components/appRouter/AppRouter";

import './styles/globals.scss'

const App: FC = () => {
  return (
      <StrictMode>
          <AntdConfigProvider>
            <AppRouterProvider />
          </AntdConfigProvider>
      </StrictMode>
  );
};

export default App;
