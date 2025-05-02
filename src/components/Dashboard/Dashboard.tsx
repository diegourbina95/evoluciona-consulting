import { Fragment } from "react";
import PageHeader from "../../layouts/layoutcomponents/PageHeader";

function Dashboard() {
  return (
    <Fragment>
      <PageHeader titles="Dashboard" active="Dashboard" items={["Home"]} />
    </Fragment>
  );
}

export default Dashboard;
