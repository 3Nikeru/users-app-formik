import { useParams } from "react-router-dom";

const User = () =>{
  let {userId} = useParams();

   return (
    <>
      <h2>New user {userId}</h2>
    </>
    );
}

export default User;