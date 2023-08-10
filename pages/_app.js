import "../global.css"
// import Layout from "./_layout"
import Head from "next/head"

export default function MyApp({ Component, pageProps }) {
    return(
    <div>
        <Head>
            <title>Qianli's site</title>
            <link rel='icon' type="image/x-icon" href="/images/minion.ico"/>
        </Head>
        <Component {...pageProps} />
    </div>
    )
   
}