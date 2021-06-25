import React from "react";
import { useForm } from "react-hook-form";
import Product from "../components/product";

var inventory = ['produm', 'proddois', 'prodtreis', ];

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
          {...register("title", { required: true, maxLength: 20 })}
        />
        <div className="text-white text-sm text-center ">
        {errors.title?.type === 'required' && "Product tittle is required"}
        </div>
        <input
          className="mt-2 p-1"
          placeholder="Price"
          type="number"
          {...register("price",  { required: true, maxLength: 20 })}
        />
        <div className="text-white text-sm text-center ">
        {errors.price?.type === 'required' && "Product price is required"}
        </div>
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
          <div className="flex-col">

            {inventory.map((key) => (
                  <>
                  <input value={key} type="submit" className="flex flex-col justify-center w-full mx-auto pl-2 mt-4" onClick={() => setOpen(!open)}/>
                  <div className={open === true ? "h-12 w-full bg-green-300" : "hidden"}>
                    <h1>Content</h1> 
                  </div>
                  </>
                  ))}

          
        </div>
      </div>
    </div>
  
  
  );
}

