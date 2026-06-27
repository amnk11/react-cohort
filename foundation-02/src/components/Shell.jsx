function Shell({ title, children }) {
  return (
    <section>
    
      <p>Resuable shell</p>
      <h2>{title}</h2>
      {children}
      <p>this is for test</p>
    </section>
  );
}

export default Shell;
