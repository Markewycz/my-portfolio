export default function NavListItem({ children }) {
  return (
    <li className="transition-colors duration-300 hover:text-black">
      {children}
    </li>
  );
}
