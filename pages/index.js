import React from "react";
import { useForm } from "react-hook-form";
import Product from "../components/product";

export default function Home() {
  const [open, setOpen] = React.useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let product = new Product(data);
    console.log(product);
    product.createProduct();
  };

  const toggle = () => {
    setIsOpened(!isOpened);
    console.log(isOpened);
    console.log("chegou aqui");
  };

  const handleChange = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col h-screen w-full bg-black m-auto">
      <form
        className="flex  flex-col justify-center w-56 mx-auto my-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <label className="text-xl text-center text-white mb-2">PRODUCTS</label>

        <input
          className="mt-2 p-1"
          placeholder="Title"
          {...register("title")}
        />
        <input
          className="mt-2 p-1"
          placeholder="Price"
          {...register("price")}
        />
        <input
          className="mt-2 p-1"
          placeholder="Image URL"
          {...register("imgURL")}
        />
        <input
          className="mt-2 p-1"
          placeholder="Color"
          {...register("color")}
        />
        <input className="my-2 p-1" placeholder="Tags" {...register("tags")} />

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input className="bg-green-800 p-1" type="submit" value="Add" />
      </form>

      <div className="flex flex-col justify-start w-72 h-full my-4 mx-auto border-2 border-white rounded-md	">
        <h1 className="text-xl text-center text-white my-2">INVENTORY</h1>
        <div>
          <div className="flex-col">
            <input
              type="submit"
              className="flex flex-col justify-center w-56 mx-auto my-4"
              onClick={() => setOpen(!open)}
            />
            <div
              className={
                open === true ? "flex h-full w-full bg-green-300" : "hidden"
              }
            >
              Content
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
