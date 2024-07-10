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
      <h2 className="text-2xl mb-4">Create New Post</h2>
      <PostForm onSubmit={handleSubmit} />
    </Layout>
  );
};

export default CreatePostPage;
