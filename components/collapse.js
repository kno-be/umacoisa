import React from "react";


const Colapso = () => {
const [open, setOpen] = React.useState('');

return (
    <div className="flex-col">
            <input type="submit" className="flex flex-col justify-center w-56 mx-auto my-4" onClick={() => setOpen(!open)}/>
            <div className={
                open === true 
                ? "hidden"
                : "flex h-full w-full bg-green-300"} >Content</div>
    </div>
  )
}

export default Colapso;