import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import PostForm from '../components/PostForm';

const CreatePostPage: NextPage = () => {
  const router = useRouter();

  const handleSubmit = async (data: { title: string, content: string }) => {
    try {
      await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      router.push('/');
    } catch {
      console.error('Failed to create post');
    }
  };

  return (
    <Layout>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Create New Post</h2>
        <PostForm onSubmit={handleSubmit} />
      </div>
    </Layout>
  );
};

export default CreatePostPage;
