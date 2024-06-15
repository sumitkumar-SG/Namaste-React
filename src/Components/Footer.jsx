export function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Sumit</strong>
      </p>
    </div>
  );
}
