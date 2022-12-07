import {Link} from 'react-router-dom';

const Home = () =>{
    return (
    <>
    <h2>Home</h2>
    <Link to="/posts">Posts</Link>
    </>
    );
}

export default Home;