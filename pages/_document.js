import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;800" rel="stylesheet" />
      </Head>
      <body className="bg-snow-bg">
        <div className="sm:m-auto sm:w-1/2">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  )
}