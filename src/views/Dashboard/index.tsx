import { Fragment, useEffect, useState } from "react";
import PageHeader from "../../layouts/layoutcomponents/PageHeader";
import { Col, Row, Card, Tab, Nav, Button } from "react-bootstrap";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";

import {
  COLUMNS1,
  DATATABLE1,
  GlobalFilter,
  Data,
  Data2,
  Data3,
} from "../../commondata/dashboarddata";
import { InformativeWidget } from "@/components/widgets";
import { TodayBillsTypography } from "@/components/typography";

function DashboardPage() {
  const tableInstance = useTable(
    {
      columns: COLUMNS1,
      data: DATATABLE1,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  }: any = tableInstance;
  const { globalFilter, pageIndex, pageSize } = state;
  const [data1, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data1) => setData(data1));
  }, []);
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
        <Col lg={12} md={12} sm={12} xl={12}>
          <Card>
            <Card.Header>
              <h4 className="card-title">Facturas Negociables</h4>
            </Card.Header>
            <Card.Body>
              <Tab.Container
                id="left-tabs-example"
                defaultActiveKey="AllProducts"
              >
                <Nav variant="pills" className="product-sale">
                  <Nav.Item>
                    <Nav.Link eventKey="AllProducts" className="text-dark">
                      Todos
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Shipped" className="text-dark">
                      Pendiente de registrar
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Pending" className="text-dark">
                      Registradas
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Cancelled" className="text-dark">
                      Anotadas
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Shipped" className="text-dark">
                      Redimidas
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="AllProducts">
                    <Card.Body className="pt-0 example1-table">
                      <div className="table-responsive">
                        <>
                          <div className="d-flex">
                            <select
                              className=" mb-4 selectpage border me-1"
                              value={pageSize}
                              onChange={(e) =>
                                setPageSize(Number(e.target.value))
                              }
                            >
                              {[10, 25, 50].map((pageSize) => (
                                <option key={pageSize} value={pageSize}>
                                  Show {pageSize}
                                </option>
                              ))}
                            </select>
                            <GlobalFilter
                              filter={globalFilter}
                              setFilter={setGlobalFilter}
                            />
                          </div>
                          <table
                            {...getTableProps()}
                            className="table table-bordered text-nowrap mb-0"
                          >
                            <thead>
                              {headerGroups.map((headerGroup: any) => (
                                <tr
                                  {...headerGroup.getHeaderGroupProps()}
                                  key={Math.random()}
                                >
                                  {headerGroup.headers.map((column: any) => (
                                    <th
                                      {...column.getHeaderProps(
                                        column.getSortByToggleProps()
                                      )}
                                      className={column.className}
                                      key={Math.random()}
                                    >
                                      <span className="tabletitle">
                                        {column.render("Header")}
                                      </span>
                                      <span>
                                        {column.isSorted ? (
                                          column.isSortedDesc ? (
                                            <i className="fa fa-angle-down"></i>
                                          ) : (
                                            <i className="fa fa-angle-up"></i>
                                          )
                                        ) : (
                                          ""
                                        )}
                                      </span>
                                    </th>
                                  ))}
                                </tr>
                              ))}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                              {page.map((row: any) => {
                                prepareRow(row);
                                return (
                                  <tr
                                    className="text-center"
                                    {...row.getRowProps()}
                                    key={Math.random()}
                                  >
                                    {row.cells.map((cell: any) => {
                                      return (
                                        <td
                                          {...cell.getCellProps()}
                                          key={Math.random()}
                                        >
                                          {cell.render("Cell")}
                                        </td>
                                      );
                                    })}
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                          <div className="d-block d-sm-flex mt-4 align-items-center">
                            <span className="">
                              Page{" "}
                              <strong>
                                {pageIndex + 1} of {pageOptions.length}
                              </strong>{" "}
                            </span>
                            <span className="ms-sm-auto ">
                              <Button
                                variant=""
                                className="btn-default tablebutton me-2 d-sm-inline d-block my-1"
                                onClick={() => gotoPage(0)}
                                disabled={!canPreviousPage}
                              >
                                {" Previous "}
                              </Button>
                              <Button
                                variant=""
                                className="btn-default tablebutton me-2 my-1"
                                onClick={() => {
                                  previousPage();
                                }}
                                disabled={!canPreviousPage}
                              >
                                {" << "}
                              </Button>
                              <Button
                                variant=""
                                className="btn-default tablebutton me-2 my-1"
                                onClick={() => {
                                  previousPage();
                                }}
                                disabled={!canPreviousPage}
                              >
                                {" < "}
                              </Button>
                              <Button
                                variant=""
                                className="btn-default tablebutton me-2 my-1"
                                onClick={() => {
                                  nextPage();
                                }}
                                disabled={!canNextPage}
                              >
                                {" > "}
                              </Button>
                              <Button
                                variant=""
                                className="btn-default tablebutton me-2 my-1"
                                onClick={() => {
                                  nextPage();
                                }}
                                disabled={!canNextPage}
                              >
                                {" >> "}
                              </Button>
                              <Button
                                variant=""
                                className="btn-default tablebutton me-2 d-sm-inline d-block my-1"
                                onClick={() => gotoPage(pageCount - 1)}
                                disabled={!canNextPage}
                              >
                                {" Next "}
                              </Button>
                            </span>
                          </div>
                        </>
                      </div>
                    </Card.Body>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Shipped">
                    <Data />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Pending">
                    <Data2 />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Cancelled">
                    <Data3 />
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default DashboardPage;
