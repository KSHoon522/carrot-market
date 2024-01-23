import useUser from "@/libs/client/useUser";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

const CustomUser = () => {
  const { user } = useUser();
  return null;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(url).then((response) => response.json()),
      }}
    >
      <div className="w-full max-w-lg mx-auto">
        <CustomUser />
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  );
}
