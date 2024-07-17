import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import PostForm from '../components/PostForm';

const EditPostPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<{ title: string, content: string }>({ title: '', content: '' });

  useEffect(() => {
    if (id) {
      fetch(`/api/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
        .catch(err => console.error('Failed to load post'));
    }
  }, [id]);

  const handleSubmit = async (data: { title: string, content: string }) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      router.push('/');
    } catch {
      console.error('Failed to update post');
    }
  };

  return (
    <Layout>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Edit Post {id}</h2>
        <p className="mb-6">You are editing the post titled: <strong>{post.title}</strong></p>
        <PostForm initialData={{ title: post.title, content: post.content }} onSubmit={handleSubmit} />
      </div>
    </Layout>
  );
};

export default EditPostPage;
