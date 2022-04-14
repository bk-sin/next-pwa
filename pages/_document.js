import Document, { Html, Head, Main, NextScript } from "next/document"
import { CssBaseline } from "@nextui-org/react"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>,
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {CssBaseline.flush()}
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument