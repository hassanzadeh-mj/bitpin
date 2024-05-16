import { StrictMode, type FC } from "react";
import AntdConfigProvider from "./components/layout/antdConfigProvider";
import AppRouterProvider from "./components/appRouter/AppRouter";

import './styles/globals.scss'
import {Provider} from "react-redux";
import store from "./redux/store";

const App: FC = () => {
  return (
      <StrictMode>
          <AntdConfigProvider>
              <Provider store={store}>
            <AppRouterProvider />
              </Provider>
          </AntdConfigProvider>
      </StrictMode>
  );
};

export default App;
