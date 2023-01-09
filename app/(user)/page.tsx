import { previewData } from 'next/headers';
import { groq } from 'next-sanity';

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export default function HomePage() {
  if (previewData()) {
    return <div>Preview Mode</div>;
  }

  return (
    <div>
      <h2>Not in preview mode</h2>
    </div>
  );
}
