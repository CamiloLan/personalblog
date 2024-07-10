import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';
import { useState } from 'react';

const IndexPage: NextPage = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post' },
    { id: 2, title: 'Second Post' },
  ]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleDelete = (id: number) => {
    try {
      setPosts(posts.filter(post => post.id !== id));
      setMessage('Post deleted successfully.');
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <Layout>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Blog Posts</h2>
        {message && <p className="text-green-500 mb-4">{message}</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="p-4 bg-gray-100 rounded-lg shadow-sm flex justify-between items-center">
              <span className="text-lg font-medium">{post.title}</span>
              <div>
                <Link href={`/edit?id=${post.id}`} className="mr-2 text-blue-500 hover:underline">Edit</Link>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link href="/create" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition inline-block">
            Create New Post
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
