import { postApi } from "../../../api/index";

import { useState, useEffect } from "react";
import { Button } from "../Button";
import Input from "../Input";
import Posts from "../Posts";
import Modal from "../Modal";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [comment, setComment] = useState("");

  useEffect(() => {
    postApi.getPosts().then(({ data, error }) => {
      setPosts(data);
    });
  }, []);

  return (
    <div className='container'>
      <Posts posts={posts} />
      <Button
        type='add'
        onClick={() => {
          setIsModalOpen(true);
        }}></Button>
      {isModalOpen && (
        <Modal setIsOpen={setIsModalOpen} title='Comentario'>
          <Input
            value={comment}
            type='textarea'
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <div className='flex justify-end'>
            <Button buttonClassName='bg-blue-400 text-white'>Comentar</Button>
          </div>
        </Modal>
      )}
    </div>
  );
};
