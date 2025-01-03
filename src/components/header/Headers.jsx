import profile from '../../assets/images/profile.png'
const Headers = () => {
    return (
        <header className='flex max-w-7xl mx-auto justify-between items-center my-7 border-b-2 pb-7'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Headers;
