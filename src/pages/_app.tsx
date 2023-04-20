import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "@/components/Layout/NavBar";
import MobileNavBar from "@/components/Layout/MobileNavBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <MobileNavBar />
    </>
  );
}
