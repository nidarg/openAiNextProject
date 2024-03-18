import Link from 'next/link';

const Home = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-4xl font-bold text-accent'>
            The place you want to know about...
          </h1>
          <p className='py-6'>
            GPTGenius: Your AI language companion. Powered by OpenAI, it
            enhances your conversations, content creation, and more!
          </p>
          <Link href='/chat' className='btn btn-accent'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
