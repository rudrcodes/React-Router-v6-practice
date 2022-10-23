const Dashboard = ({ user ,myVar}) => {

  return (
    <section className="section">
      <h2>Dashboard</h2>
      <h3>Hello {user?.name} {myVar} </h3>
    </section>
  );
};
export default Dashboard;
