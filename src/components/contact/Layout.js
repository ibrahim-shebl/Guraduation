import React from "react";
const Layout = ({title,des})=>{
    return(
         <div className="flex flex-col gap-4 font-titleFont mb-14">
             <h3 className="text-sm uppercase font-light test-designColor tracking-wide">{title}</h3>
             <h2 className="main-title">{des}</h2>
         </div>
    )
}
export default Layout;