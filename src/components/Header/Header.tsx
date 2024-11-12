import style from "./Header.module.css";

const Header = () => {
  const something = "string";

  const obj = {
    auf: { text: "test" },
    ifo: { text: "test" },
  };

  return (
    <header className={style.header}>
      <p>Header</p>
    </header>
  );
};

export default Header;
