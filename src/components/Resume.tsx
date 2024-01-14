export default function Resume() {
  return (
    <div
      id="resume"
      className="relative z-10 flex h-screen w-full items-center justify-center border-b-2 border-dotted border-black bg-white px-16 pt-8"
    >
      <div className="grid w-full grid-cols-2 gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="border-b border-black text-xl">
            Some of my skills include:
          </h2>

          <ul className="flex list-inside list-disc flex-col gap-1 text-sm  font-light">
            <li>Javascript</li>
            <li>Typescript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>React Query</li>
            <li>Redux</li>
            <li>Tailwind CSS</li>
            <li>SASS</li>
            <li>Styled Components</li>
            <li>Responsive Web Design</li>
            <li>Supabase</li>
            <li>Mongo DB</li>
            <li>Express.js</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="border-b border-black text-xl">Work experience:</h2>
          <ul className="flex list-inside list-disc flex-col gap-1 text-sm font-light">
            <li>Schronisko józefów - charity project for animal shelter</li>
            <li>Your company/project would look awesome here</li>
          </ul>
        </div>

        <p className="col-span-full text-center text-xs">
          You can find my full <span className="text-blue-700">resumé</span> here
        </p>
      </div>
    </div>
  );
}
