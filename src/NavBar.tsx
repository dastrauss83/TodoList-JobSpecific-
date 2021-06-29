export type NavBarProps = {
  onClick: (variant: string) => void;
};

export const NavBar: React.FC<NavBarProps> = ({ onClick }) => {
  return (
    <div className="NavBar">
      <button className="Button" onClick={() => onClick("new")}>
        New Todo
      </button>
      <button className="Button" onClick={() => onClick("list")}>
        See List of Todos
      </button>
    </div>
  );
};
