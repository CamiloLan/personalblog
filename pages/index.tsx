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
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
            <span>{post.title}</span>
            <div>
              <Link href={`/edit?id=${post.id}`} className="mr-2 text-blue-500 hover:underline">Edit</Link>
              <button onClick={() => handleDelete(post.id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default IndexPage;
