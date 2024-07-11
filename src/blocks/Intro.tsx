import React from 'react';
import ProfilePhoto from '../assets/images/profile_photo.jpg';
import Container from '../layouts/Container';

const Intro = () => {
  return (
    <section className="pt-[4.375rem]">
      <Container className="py-10 lg:py-20">
        <div className="relative mx-auto mb-8 h-40 w-40 overflow-hidden rounded-full md:h-72 md:w-72 xl:mb-12">
          <img src={ProfilePhoto} alt="Profile_photo" content="fill" />
        </div>
        <div className="mb-8 flex flex-col items-center text-center md:mb-10">
          <h1 className="mb-8 text-xl font-bold md:w-[25rem] md:text-3xl xl:w-[35rem] xl:text-5xl">
            I build websites and code with{' '}
            <span className="from-orange-1 to-violet-1 bg-gradient-to-r bg-clip-text text-transparent">
              passion!
            </span>
          </h1>
          <h3 className="text-secondary text-lg font-normal md:w-[35rem] md:text-xl">
            I’m a qualified and professional front-end web developer with strong experience in
            creating websites. Good creative and analytical skills, team player with an eye for
            details. Open to new challenges where I can create something beautiful.
          </h3>
        </div>
        <div className="flex flex-col justify-center gap-2 text-center text-base font-bold md:flex-row md:gap-5 lg:text-lg">
          <a
            href="mailto:vasyl.voloshyn07@gmail.com"
            className="from-orange-1 to-violet-1 hover:text-primary w-full rounded-xl bg-gradient-to-r px-7 py-4 text-black duration-200 hover:opacity-80 md:w-auto"
          >
            Get In Touch
          </a>
          <a
            className="w-full rounded-xl border px-7 py-4 duration-200 hover:bg-white/70 hover:text-black md:w-auto"
            href={process.env.REACT_APP_PDF_CV_LINK}
            target="_blank"
            download
          >
            Download CV
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Intro;
