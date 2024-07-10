import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import PostForm from '../components/PostForm';

const EditPostPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Simulate fetching the post data based on the ID
  const post = { id: id as string, title: 'Sample Post' }; // Replace with actual fetch logic

  const handleSubmit = (data: { title: string }) => {
    console.log('Editing post:', data);
    router.push('/');
  };

  return (
    <Layout>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Edit Post {id}</h2>
        <p className="mb-6">You are editing the post titled: <strong>{post.title}</strong></p>
        <PostForm initialData={{ title: post.title }} onSubmit={handleSubmit} />
      </div>
    </Layout>
  );
};

export default EditPostPage;
