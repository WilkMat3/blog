const Home = () =>
{
    const handleClick = (e) =>
    {
        console.log("hello", e.target)
    }
    const handleClick2 = (name) =>
    {
        console.log("hello " + name)
    }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => { handleClick2('yoshi') }}>Click me2</button>
        </div>
    );
}

export default Home;