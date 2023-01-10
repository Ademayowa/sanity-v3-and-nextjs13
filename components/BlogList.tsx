import Image from 'next/image';
import urlFor from '../lib/urlFor';

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className='border text-red-300' />

      <div className='flex flex-col group'>
        <div className='relative w-50 h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out '>
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
    </div>
  );
}

export default BlogList;
