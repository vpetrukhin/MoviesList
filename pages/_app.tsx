import '../app/styles/globals.scss'
import type { AppProps } from 'next/app'
import {Layout} from "../app/components";
import {Provider} from "react-redux";
import {store} from "../app/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Layout>
          <Provider store={store}>
              <Component {...pageProps} />
          </Provider>
      </Layout>
  )
}

export default MyApp
