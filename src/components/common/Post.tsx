import { useEffect, useState } from 'react';
import { CiCircleInfo, CiCircleMore } from 'react-icons/ci';
import { LuListChecks } from 'react-icons/lu';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';
import { MdOutlineDeleteSweep } from 'react-icons/md';

export default function Post() {
  const [posts, setPosts] = useState<any[]>([]);
  const [newPost, setNewPost] = useState<string>('');
  const [showCheckboxes, setShowCheckboxes] = useState<boolean>(false);
  const [single, setSingle] = useState();
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [editingContent, setEditingContent] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const SingleData = posts?.find((item) => item?.id === single);

  const addPost = async () => {
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: newPost })
    });
    const post = await res.json();
    setPosts([...posts, post]);
    setNewPost('');
  };

  const deletePost = async (id: any) => {
    await fetch(`/api/posts?id=${id}`, {
      method: 'DELETE'
    });
    setPosts(posts.filter((post) => post.id !== id));
  };

  const deleteAllPosts = async () => {
    await fetch('/api/posts', {
      method: 'DELETE'
    });
    setPosts([]);
  };

  const toggleCheckboxes = () => {
    setShowCheckboxes(!showCheckboxes);
  };

  const startEditing = (post: any) => {
    setEditingPostId(post.id);
    setEditingContent(post.content);
  };

  const saveEdit = async () => {
    const res = await fetch(`/api/posts?id=${editingPostId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: editingContent })
    });
    if (res.ok) {
      const updatedPost = await res.json();
      setPosts(
        posts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
      );
      setEditingPostId(null);
      setEditingContent('');
    } else {
      console.error('Failed to update post');
    }
  };

  const filteredPosts = posts.filter((post) =>
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex">
      <div className="px-4 flex flex-col gap-4 w-[50%]">
        <div className="flex items-start justify-start gap-4 w-full">
          <span title="Checklist">
            <LuListChecks
              onClick={toggleCheckboxes}
              className="text-black cursor-pointer"
              size={22}
            />
          </span>

          <span
            title="Trash All"
            className="flex text-sm gap-2"
            onClick={deleteAllPosts}
          >
            <MdOutlineDeleteSweep
              className="text-black cursor-pointer"
              size={22}
            />
            {/* Trash All */}
          </span>
          <div>
            <input
              type="text"
              placeholder="Search Note ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-sm border bg-transparent py-1 px-2 outline-none rounded-md w-[300px]"
            />
          </div>
        </div>
        <aside className="flex items-center justify-center text-2xl">
          <h1 className=" text-gray-900 text-lg">CREATE YOUR NOTES</h1>
        </aside>
        <input
          type="text"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Write Note"
          className="px-4 py-4 border:none bg-transparent outline-none"
        />
        <button
          className="w-[150px] px-4 py-2 bg-blue-600 text-white"
          onClick={addPost}
        >
          Create Note
        </button>
        <ul className="flex flex-col gap-4 w-full h-screen">
          {filteredPosts.map((post) => (
            <div
              className="flex justify-between items-center gap-4 w-full text-center"
              key={post.id}
              onClick={() => setSingle(post?.id)}
            >
              <aside className="flex items-start justify-start gap-2">
                {showCheckboxes && <input type="checkbox" />}
                {editingPostId === post.id ? (
                  <input
                    type="text"
                    value={editingContent}
                    onChange={(e) => setEditingContent(e.target.value)}
                    className="px-2 py-1 border rounded w-[500px] bg-transparent outline-none border-none"
                  />
                ) : (
                  <p className="  cursor-pointer break-words">{post.content}</p>
                )}
              </aside>
              <div>
                {editingPostId === post.id ? (
                  <button
                    className=" p-2 rounded-lg bg-green-600 text-white"
                    onClick={saveEdit}
                  >
                    <FiCheck size={16} />
                  </button>
                ) : (
                  <div className="flex gap-3">
                    <button
                      className=" p-2 rounded-lg bg-yellow-600 text-white"
                      onClick={() => startEditing(post)}
                    >
                      <FaRegEdit size={16} />
                    </button>
                    <button
                      className=" p-2 rounded-lg bg-red-600 text-white"
                      onClick={() => deletePost(post.id)}
                    >
                      <RiDeleteBin6Line size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </ul>
      </div>
      <div className="w-[50%]">
        <div className="bg-white p-7 rounded-3xl w-[90%] h-full shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] overflow-y-auto">
          <aside className="flex items-center justify-center pt-3 text-2xl">
            <h1 className=" text-gray-900 text-lg">VIEW YOUR NOTES</h1>
          </aside>
          <p className="text-gray-600 text-sm break-words">
            {SingleData?.content}
          </p>
        </div>
      </div>
    </div>
  );
}
