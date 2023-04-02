import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="Description" content="Personal Blog"></meta>
                    <meta
                        property="og:title"
                        content="Anil Muppalla's webpage"
                        key="title"
                    />
                    {/* other meta tags, stylesheets, or scripts */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;