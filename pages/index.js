import React from "react";
import { useForm } from "react-hook-form";
import Product from "../components/product"


export default function Home() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    let product = new Product(data);
    console.log(product);
    product.createProduct
  } 
  return (
    <div className="flex h-screen w-full bg-black">
        <form className="flex flex-col"onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input className="mt-2" {...register("id")} />
          <input className="mt-2" {...register("title")} />
          <input className="mt-2" {...register("price")} />
          <input className="mt-2" {...register("imgURL")} />
          <input className="mt-2" {...register("color")} />
          <input className="mt-2" {...register("tags")} />

          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          
          <input type="submit" />
        </form>
    </div>
  )
}
