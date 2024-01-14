export default function About() {
  return (
    <div
      id="about"
      className="relative z-10 flex h-screen w-full justify-center border-b-2 border-dotted border-black bg-white px-16 pt-8"
    >
      <div className="grid h-full grid-cols-2 items-center justify-items-center">
        <p className="text-5xl leading-relaxed">
          My name is <span className="italic">Gracjan</span>, I'm self-taught
          web developer with a wide range of interests, which include:
        </p>
        <div>
          <ul className="flex flex-col gap-4 text-3xl">
            <li>Programming</li>
            <li>Technology</li>
            <li>Gaming</li>
            <li>Gym</li>
            <li>Japanese gastronomy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
