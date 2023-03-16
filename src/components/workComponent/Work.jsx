import WorkComponent from "../WorkComponent";

const works = [
  {
    image: "",
    title: "LESSON VIDEOS",
    img: "/1.jpg",
  },
  {
    image: "",
    title: "BOOKS + TV",
    img: "/2.jpg",
  },
  {
    image: "",
    title: "ARTICLES + TIPS",
    img: "/3.jpg",
  },
];

const Work = () => {
  return (
    <section>
      <div className="w-[90%] lg:w-[800px] mx-auto my-5 font-semibold">
        <section className="grid md:flex gap-5 justify-between items-center">
          {works.map((work) => {
            return <WorkComponent work={work} />;
          })}
        </section>
      </div>
    </section>
  );
};

export default Work;
