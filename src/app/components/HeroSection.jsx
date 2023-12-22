import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
            Hello, I'm Sameet
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam facere quia delectus eos excepturi at fuga corrupti sed magni quod, expedita quas, maxime culpa, perspiciatis labore nobis aperiam tempore.
          </p>
        </div>
        <div className="col-span-5">
          <div className="rounded-full bg-[#181818] w-[500px] h-[500px] relative">
            <Image
              src="/images/hero-image.png"
              alt="Hero Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;