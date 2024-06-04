const Home = () => {

  const topics = [
    "Arrays",
    "Strings",
    "Dyamic Programming",
    "Graphs",
    "Hashing",
    "Trees",
    "Sliding Window",
    "Backtracking",
    "useEffect",
    "useContext",
    "useState",
    "React Core Concepts",
    "Custom Hooks",
    "Memorization",
    "and many more",
  ];

  return (
    <>
      <div className="mx-auto h-full w-full overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
        <div className="absolute bottom-0 -z-10 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
        <main className="flex md:flex-row basis-1/2 md:gap-10 gap-3 flex-col items-center h-fit lg:h-[100vh] overflow-hidden">
          <section className="md:w-[50%] text-zinc-700 leading-7 tracking-wide flex flex-col gap-4 px-10 text-center md:text-left">
            <h1 className="text-zinc-800 md:text-4xl text-2xl font-semibold leading-relaxed tracking-wide">
              Ace your next technical interview with confidence.
            </h1>
            <p>
              Created by the developer of{" "}
              <span className="text-blue-500 font-semibold">Get AI News</span>
            </p>

            <p>
              Practice your skills the way they are meant to be practiced - in a
              real interview setting. Algochunk is a FREE platform that provides
              the most popular Data Structures, Algorithms and Front-end
              technical questions asked in a Technical Interview Round.
            </p>
            <p>
              Explore{" "}
              <span className="text-blue-500 font-semibold">Playground</span> to
              generate code and practice.
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
      <section className="flex justify-center items-center my-10 ">
        <div className=" text-zinc-700 leading-relaxed tracking-wide w-[90%] md:w-[80%] text-center ">
          <div className=" flex flex-col gap-2">
            <p className="font-bold text-2xl text-zinc-800">
              Multiple solutions and Multiple approaches.
            </p>
            <p>
              Explore multiple solutions to a single question to help you
              understand the core underlying concept. Try out different approach
              and compare your solution with the provided solutions.
            </p>
          </div>
          <div className="my-10">
            <div className="flex flex-row gap-3 md:justify-between flex-wrap">
              <div className="w-[350px] flex flex-col gap-2 outline outline-[1px] outline-blue-200 rounded-xl p-5 text-left bg-blue-50">
                <p className="text-xl  text-zinc-800 font-semibold">
                  Boilerplate
                </p>
                <p>
                  A standard code snippet that is provided to you, you can
                  starting writing code with the snippet.
                </p>
              </div>
              <div className="w-[350px] text-left flex flex-col gap-2 outline outline-[1px] outline-blue-200 rounded-xl p-5 bg-blue-50">
                <p className="text-xl  font-semibold text-zinc-800">
                  Solutions
                </p>
                <p>
                  An intuitive solution that gets the job done. This solution
                  will get accepted in any frontend tech interview.
                </p>
              </div>
              <div className="w-[350px] flex flex-col gap-2 outline outline-blue-200 text-left outline-[1px] rounded-xl p-5 bg-blue-50">
                <p className="text-xl  font-semibold text-zinc-800">
                  Better Solution (s)
                </p>
                <p>
                  A more optimized approch towards the given problem that
                  follows a more standardized approch.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="./solution-better.png"
              alt=""
              className="w-[100%] md:w-[80%] border-[15px] border-zinc-500 rounded-xl"
            />
          </div>
        </div>
      </section>
      <section className=" h-fit bg-[#f9fafa]  text-zinc-700 leading-relaxed tracking-wide jusitfy-center ">
        <div className="w-[90%] py-10 md:w-[70%] flex h-full items-center">
          <div className="md:w-[80%] w-[100%] flex flex-col gap-5 px-10">
            <div className="flex flex-col gap-4">
              <p className="text-2xl text-zinc-800 font-semibold">
                Practice Algorithmic & Frontend Problems
              </p>
              <p>
                Algorithmic questions are everywhere and even we don't like it.
                But since companies are asking, we have a long list of questions
                that are popularly asked in tech interviews.All the questions
                are real-world and are based on user experiences. The concepts
                that are being tested are
              </p>
              <div className="grid-cols-2 md:grid-cols-3 grid gap-5 ">
                {topics.map((items) => (
                  <p
                    key={items}
                    className="text-sm md:text-base outline w-fit p-1 outline-[1px] rounded-lg"
                  >
                    ✅ {items}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
