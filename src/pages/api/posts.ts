let posts: any = [];

export default function handler(req: any, res: any) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(posts);
      break;
    case 'POST':
      const post = req.body;
      post.id = Date.now().toString();
      posts.push(post);
      res.status(201).json(post);
      break;
    case 'DELETE':
      const { id } = req.query;
      if (id) {
        posts = posts.filter((post: any) => post.id !== id);
        res.status(200).json({ message: 'Post deleted' });
      } else {
        posts = [];
        res.status(200).json({ message: 'All posts deleted' });
      }
      break;
    case 'PUT':
      const { id: editId } = req.query;
      const updatedPost = req.body;
      posts = posts.map((post: any) =>
        post.id === editId ? { ...post, ...updatedPost } : post
      );
      res.status(200).json({ message: 'Post updated' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
