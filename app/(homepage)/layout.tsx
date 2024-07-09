import Header from "../_components/Header";

interface DashBoardLayoutProps {
  children: React.ReactNode;
}

const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default DashBoardLayout;
