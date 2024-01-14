import NavListItem from './NavListItem';

export default function Nav() {
  return (
    <nav>
      {/* USING FRAMER MOTION DO A STRIP THAT MOVES WHEN YOU SCROLL UNDER NAV ITEM */}
      <ul className="fixed z-20 flex w-full gap-6 px-16 py-6 text-xl text-gray-600">
        <NavListItem>Home</NavListItem>
        <NavListItem>About</NavListItem>
        <NavListItem>Portfolio</NavListItem>
        <NavListItem>Resumé</NavListItem>
        <NavListItem>Contact</NavListItem>
      </ul>
    </nav>
  );
}
