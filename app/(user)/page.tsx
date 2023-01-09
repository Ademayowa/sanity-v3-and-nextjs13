import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';
import PreviewSuspense from '../../components/PreviewSuspense';
import PreviewBlogList from '../../components/PreviewBlogList';
import BlogList from '../../components/BlogList';

// export default async function HomePage() {
//   if (previewData()) {
//     return (
//       <PreviewSuspense fallback="Loading...">
//         <PreviewDocumentsCount />
//       </PreviewSuspense>
//     )
//   }

//   const data = await client.fetch(query)
//   return <DocumentsCount data={data} />
// }

const query = groq`
  *[_type=='post'] { 
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role='status'>
            <p className='text-center animate-pulse'>Loading preview data...</p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  // console.log(posts);

  return <BlogList posts={posts} />;
}
