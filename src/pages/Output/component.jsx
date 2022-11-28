import { Routes, Route } from "react-router-dom";
import Home from "../../routes/Home";
import Posts from "../../routes/Posts/component";

const Output = () => {
    return (
    <>
        <h1>Welcome to React Router!</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="posts" element={<Posts />}></Route>
        </Routes>
    </>
    )
}

export default Output;