import { useState } from 'react';
import { useRouter } from 'next/router';
import { AxiosResponse } from 'axios';

import { publicApi } from 'api';
import { Post, PostFormData } from '../types';
import { calcEndTime } from '../utils/time';
import { validatePostCreateForm } from '../utils/validatePostCreateForm';

const createPost = async (formData: PostFormData) => {
  const { data }: AxiosResponse = await publicApi.post('/posts/create', formData);
  const { _id } = data;
  await publicApi.post('/likes/create', { postId: _id });
  return data;
};

export const usePostCreateForm = (initialState: Post) => {
  const router = useRouter();
  const [form, setForm] = useState(initialState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // FIXME: 코드 중복 줄이기
    if (name === 'startTime' && value) {
      const { interval } = form;
      const endTime = calcEndTime(value, interval);
      setForm(() => ({ ...form, startTime: value, endTime }));
      return;
    }

    if (name === 'interval' && value) {
      const intervalNumber = Number(value);
      if (intervalNumber < 1) {
        return;
      }

      const { startTime } = form;
      const endTime = startTime ? calcEndTime(startTime, intervalNumber) : '';
      setForm(() => ({ ...form, interval: intervalNumber, endTime }));
      return;
    }

    setForm(() => ({ ...form, [name ?? 'content']: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { isValid, msg } = validatePostCreateForm(form);
    if (!isValid) {
      alert(msg);
      return;
    }

    const formData: PostFormData = {
      title: JSON.stringify(form),
      image: null,
      channelId: form.channelId,
    };

    const submitPost = async () => {
      const createdPostData = await createPost(formData);
      return createdPostData;
    };

    submitPost()
      .then(({ _id: postId, channel: { _id: categoryId } }) => {
        alert('뽀모 모집글을 생성했어요!');
        router.replace(`/post/${categoryId}/${postId}`);
      })
      .catch(() => {
        alert('뽀모 모집글을 생성하는데 실패했어요.');
      });
  };

  return { form, onChange, onSubmit };
};
