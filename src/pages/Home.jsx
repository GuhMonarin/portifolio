import { Background } from "../components/Background";
import { Themetogle } from "../components/Themetoggle";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Themetogle />
      <Background />
    </div>
  );
};
