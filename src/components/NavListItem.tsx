export default function NavListItem({ children }: { children: string }) {
  return (
    <li className="transition-colors duration-300 hover:text-black">
      {children}
    </li>
  );
}
