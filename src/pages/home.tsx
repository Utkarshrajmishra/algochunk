const Home = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]">
          <main className="flex md:flex-row basis-1/2 md:gap-10 gap-3 flex-col items-center h-[100vh]">
            <section className="md:w-[50%] text-zinc-700 leading-7 tracking-wide flex flex-col gap-4 px-10 text-center md:text-left">
              <h1 className="text-zinc-800 md:text-4xl text-2xl font-semibold leading-relaxed tracking-wide">
                Ace your next technical interview with confidence.
              </h1>
              <p>
                Created by the developer of{" "}
                <span className="text-blue-500 font-semibold">Get AI News</span>
              </p>

              <p>
                Practice your skills the way they are meant to be practiced - in
                a real interview setting. Algochunk is a FREE platform that
                provides the most popular Data Structures, Algorithms and
                Front-end technical questions asked in a Technical Interview
                Round.
              </p>
              <p>
                Explore{" "}
                <span className="text-blue-500 font-semibold">Playground</span>{" "}
                to generate code and practice.
              </p>
              <section className="flex gap-3">
                <button className="p-3 text-sm bg-blue-500 text-white font-semibold rounded-lg hover:bg-white hover:outline hover:outline-[1px] hover:outline-blue-500 hover:text-zinc-800 ">
                  DSA Problems
                </button>
                <button className="p-3 text-sm outline-blue-500 outline outline-[1px] font-semibold rounded-lg hover:bg-blue-500 hover:text-white hover:font-semibold text-zinc-800">
                  Frontend Problems
                </button>
              </section>
            </section>
            <section className="md:w-[50%] md:mr-[-30%] mt-2 md:mt-0 image overflow-hidden px-5 md:px-0">
              <img
                src="./bg-image.png"
                alt=""
                className="w-full border-[20px] rounded-xl border-zinc-500"
              />
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
