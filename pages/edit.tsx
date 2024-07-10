import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import PostForm from '../components/PostForm';

const EditPostPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const handleSubmit = (data: { title: string }) => {
    console.log('Editing post:', data);
    router.push('/');
  };

  return (
    <Layout>
      <h2 className="text-2xl mb-4">Edit Post {id}</h2>
      <PostForm initialData={{ title: 'Initial Title' }} onSubmit={handleSubmit} />
    </Layout>
  );
};

export default EditPostPage;
