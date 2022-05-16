import React, { useState } from 'react'
let arr = [{
    avtar:"https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=338&ext=jpg&ga=GA1.2.1165169887.1644507126",
    name:"Ayush",
    email:"ayush@gmail.com",
    mobile:"78697965589"
},
{
    avtar:"https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=338&ext=jpg&ga=GA1.2.1165169887.1644507126",
    name:"Ayush",
    email:"ayush@gmail.com",
    mobile:"78697965589"
},
{
    avtar:"https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=338&ext=jpg&ga=GA1.2.1165169887.1644507126",
    name:"Ayush",
    email:"ayush@gmail.com",
    mobile:"78697965589"
},
{
    avtar:"https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=338&ext=jpg&ga=GA1.2.1165169887.1644507126",
    name:"Ayush",
    email:"ayush@gmail.com",
    mobile:"78697965589"
},
{
    avtar:"https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=338&ext=jpg&ga=GA1.2.1165169887.1644507126",
    name:"Ayush",
    email:"ayush@gmail.com",
    mobile:"78697965589"
}]
export const Cards = () => {
const [user,setUsers] = useState(arr);
  return (
    <>
   {user.map((e)=>{
       return <div>
           <div>
               <div>
                   <img src={e.avtar} alt="" />
               </div>
               <div>
                   <div>
                       <h3>{e.name}</h3>
                       
                   </div>
                   <div>
                       <p> {e.email}</p>
                      
                   </div>
               </div>
           </div>
           <div>
               {/* not visible */}
               <p>{e.mobile}</p>
               
           </div>
       </div>
   })}
    </>
  )
}
