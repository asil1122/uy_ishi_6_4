import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
const Form = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const sumbit = (data) => {
    dispatch({
      type: "ADD_USER",
      value: {
        ...data,
        id: nanoid(),
      },
    });
    reset();
  };
  return (
    <div className="pt-[50px]">
      <div className="w-[500px] mr-auto ml-auto border-[2px] border-black p-[20px] text-center rounded-[25px]">
        <form onSubmit={handleSubmit(sumbit)}>
          <div className="mb-[20px] flex items-center justify-center gap-[20px]">
            <input placeholder="First Name" className="p-[10px] text-black border-[1px] border-black rounded-[10px]" {...register("firstName")} />
            <input placeholder="Last Name" className="p-[10px] text-black border-[1px] border-black rounded-[10px]" {...register("lastName")} />
          </div>
          <button className="sb_btn type1" type="submit">
            <span class="btn-txt">Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
