import Image from 'next/image';
import urlFor from '../lib/urlFor';

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className='border text-red-300' />

      <div>
        {posts.map((post) => (
          <div key={post._id}>
            <div>
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                className='object-cover object-left lg:object-center'
                fill
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
