import Image from 'next/image';

const BackgroundLogo = () => {
  return (
    <div className="fixed left-1/2 top-1/2 z-[-1] flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-5">
      <div className="flex items-center justify-center">
        <Image
          className="h-auto max-w-[400px] opacity-5"
          src="/images/home/H3 Logo Final.svg"
          alt="logo"
          width={400}
          height={400}
          priority={true}
        />
      </div>
    </div>
  );
};

export default BackgroundLogo;
