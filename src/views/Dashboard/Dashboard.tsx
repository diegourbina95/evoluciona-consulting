import { Fragment } from "react";
import PageHeader from "../../layouts/layoutcomponents/PageHeader";
import { Col, Row } from "react-bootstrap";
import { InformativeWidget } from "@/components/widgets";
import { TodayBillsTypography } from "@/components/typography";

function Dashboard() {
  return (
    <Fragment>
      <PageHeader titles="Dashboard" active="Dashboard" items={["Home"]} />
      <Row>
        <Col lg={12} md={12} sm={12} xl={12}>
          <Row>
            <Col lg={6} md={6} sm={12} xl={3}>
              <InformativeWidget
                title="Facturas por registrar"
                value={5}
                icon={<i className="fe fe-file-plus text-success fs-70"></i>}
                subtitle={
                  <TodayBillsTypography
                    textType="text-success"
                    value={10}
                    text="facturas registradas"
                  />
                }
              />
            </Col>
            <Col lg={6} md={6} sm={12} xl={3}>
              <InformativeWidget
                title="Facturas por anotar"
                value={2}
                icon={<i className="fa fa-file-text text-secondary fs-70"></i>}
                subtitle={
                  <TodayBillsTypography
                    textType="text-secondary"
                    value={10}
                    text="facturas anotadas"
                  />
                }
              />
            </Col>
            <Col lg={6} md={6} sm={12} xl={3}>
              <InformativeWidget
                title="Facturas por redimir"
                value={4}
                icon={
                  <i className="bi bi-calendar2-check text-purple fs-50"></i>
                }
                subtitle={
                  <TodayBillsTypography
                    textType="text-purple"
                    value={6}
                    text="facturas redimidas"
                  />
                }
              />
            </Col>
            <Col lg={6} md={6} sm={12} xl={3}>
              <InformativeWidget
                title="Facturas Transferidas"
                value={1}
                icon={
                  <i className="bi bi-arrow-left-right text-pink fs-50"></i>
                }
                subtitle={
                  <TodayBillsTypography
                    textType="text-pink"
                    value={1}
                    text="facturas transferidas"
                  />
                }
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        {" "}
        <Col lg={12} md={12} sm={12} xl={12}>
          sdsd
        </Col>
      </Row>
    </Fragment>
  );
}

export default Dashboard;
