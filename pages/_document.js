import Document, {Head, Html, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    render() {
        return <Html lang="en">
            <Head>
                <link rel = "preload" href = "/font/IBMPlexSans-Bold.ttf" as = "font" crossOrigin = "anaonymous"></link>
                <link rel = "preload" href = "/font/IBMPlexSans-SemiBold.ttf" as = "font" crossOrigin = "anaonymous"></link>
                <link rel = "preload" href = "/font/IBMPlexSans-regular.ttf" as = "font" crossOrigin = "anaonymous"></link>
            </Head>
            <body>
                <Main>

                </Main>

                <NextScript />
            </body>
        </Html>
    }
}

export default MyDocument;