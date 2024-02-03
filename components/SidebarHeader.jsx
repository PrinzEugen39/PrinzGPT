import { SiOpenaigym } from "react-icons/si";
import ThemeToggle from "./ThemeToggle";
const SidebarHeader = () => {
  return (
    <div className="flex items-center gap-4 px-4 mb-4">
      <SiOpenaigym className="w-10 h-10 text-primary" />
      <h2 className="mr-auto text-xl font-bold text-primary">PrinzGPT</h2>
      <ThemeToggle />
    </div>
  );
};

export default SidebarHeader;
