const Wrapper = ({
  children,
  title,
}: {
  children: JSX.Element;
  title: string;
}) => {
  return (
    <div className='flex flex-col items-center min-h-screen p-8 bg-grey text-black'>
      <header className='w-full max-w-5xl text-5xl h-[50px] text-center'>
        MY TASKS
      </header>
      <main className='flex p-4 flex-col grow max-w-5xl h-full w-full text-center justify-center items-center'>
        <h1 className='p-4 w-full text-left text-2xl'>{title}</h1>
        {children}
      </main>
    </div>
  );
};

export default Wrapper;
