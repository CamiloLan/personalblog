import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import PostForm from '../components/PostForm';

const CreatePostPage: NextPage = () => {
  const router = useRouter();

  const handleSubmit = (data: { title: string }) => {
    console.log('Creating post:', data);
    router.push('/');
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
