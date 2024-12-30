import React from 'react';
import { useForm } from 'react-hook-form';

function Form({ handlefromsubmitdata }) {
  const { register, handleSubmit, reset } = useForm();

  return (
    <div className="mt-10 flex justify-center items-center">
      <form
        className="flex gap-7"
        onSubmit={handleSubmit((data) => {
          handlefromsubmitdata(data);
          reset();
        })}
      >
        <input
          {...register('name')}
          className="px-3 py-2 rounded-md outline-none font-semibold text-blue-800"
          type="text"
          placeholder="Name"
        />
        <input
          {...register('email')}
          className="px-3 py-2 rounded-md outline-none font-semibold text-blue-800"
          type="email"
          placeholder="Email"
        />
        <input
          {...register('image')}
          className="px-3 py-2 rounded-md outline-none font-semibold text-blue-800"
          type="text"
          placeholder="Image URL"
        />
        <input
          className="px-4 py-3 bg-sky-900 rounded-xl text-white"
          type="submit"
        />
      </form>
    </div>
  );
}

export default Form;
