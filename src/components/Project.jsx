import Image from "next/image";
import { Tabs } from "./ui/tabs.jsx";
import hero1 from '../../public/hero1.jpg'
function Project() {
  const tabs = [
    {
      title: "Indian",
      value: "Indian",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 text-[1rem] md:text-4xl font-bold text-white bg-[#563232] ">
          <p>Antique Indian furniture </p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Edwardian",
      value: "edwardian",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-[1rem] md:text-4xl font-bold text-white bg-[#563232]">
          <p>Antique Edwardian furniture</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Victorian",
      value: "victorian",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-[1rem] md:text-4xl font-bold text-white bg-[#563232]">
          <p>Antique Victorian furniture</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "French",
      value: "french",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-[1rem] md:text-4xl font-bold text-white bg-[#563232]">
          <p>Antique French furniture</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-[1rem] md:text-4xl font-bold text-white bg-[#563232]">
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] perspective:1000px relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start mt-4 mb-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
     src={hero1}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[40vh] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

export default Project;
