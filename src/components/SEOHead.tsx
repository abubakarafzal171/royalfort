import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  twitterImage?: string;
  url?: string;
  schema?: object;
}

const SEOHead = ({
  title,
  description,
  canonical,
  ogImage,
  twitterImage,
  url,
  schema,
}: SEOHeadProps) => (
  <Helmet>
    {/* Basic Meta */}
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    {/* Canonical */}
    {canonical && <link rel="canonical" href={canonical} />}

    {/* Open Graph */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {ogImage && <meta property="og:image" content={ogImage} />}
    {url && <meta property="og:url" content={url} />}

    {/* Twitter Card */}
    <meta
      name="twitter:card"
      content={twitterImage ? "summary_large_image" : "summary"}
    />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {twitterImage && <meta name="twitter:image" content={twitterImage} />}

    {/* JSON-LD Schema */}
    {schema && (
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    )}

    {/* Optional site verification (Google, Bing) */}
    {/* <meta name="google-site-verification" content="YOUR_CODE_HERE" /> */}
  </Helmet>
);

export default SEOHead;
