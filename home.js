function Home() {
  return (
    <Card
      txtcolor="secondary"
      header="Banking Application"
      title="Welcome to the bank!"
      text="You can use the navigation bar to start using the bank."
      body={<img src="bank.png" className="img-fluid" alt="Responsive image" />}
    />
  );
}
