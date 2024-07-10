import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage: NextPage = () => {
  const posts = [
    { id: 1, title: 'First Post' },
    { id: 2, title: 'Second Post' },
  ];

  const handleDelete = (id: number) => {
    console.log(`Delete post with id: ${id}`);
  };

  return (
    <Layout>
      <h2 className="text-2xl mb-4">Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-2 flex justify-between items-center">
            <span>{post.title}</span>
            <div>
              <Link href={`/edit?id=${post.id}`} className="mr-2">
                Edit
              </Link>
              <button onClick={() => handleDelete(post.id)} className="bg-red-500 text-white px-2 py-1">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Link href="/create" className="bg-blue-500 text-white px-4 py-2 mt-4 inline-block">
        Create New Post
      </Link>
    </Layout>
  );
};

export default IndexPage;
