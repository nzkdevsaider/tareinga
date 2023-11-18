import { TProps } from "@/types";

const MainLayout = ({ children }: TProps) => {
  return (
    <main className="flex flex-col justify-center items-center gap-10 p-3">
      {children}
    </main>
  );
};

export default MainLayout;
