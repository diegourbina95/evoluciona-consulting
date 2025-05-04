import { OverlayTrigger, Tooltip } from "react-bootstrap";

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  Legend
);

/////
//dashboard1
export const COLUMNS1: any = [
  {
    Header: "Estado",
    accessor: "status",
    className: "text-center ",
  },
  {
    Header: "Ruc Proveedor",
    accessor: "rucSupplier",
    className: "text-center ",
  },
  {
    Header: "Serie",
    accessor: "series",
    className: "text-center ",
  },
  {
    Header: "Numeración",
    accessor: "numeration",
    className: "text-center ",
  },
  {
    Header: "RUC Adquiriente",
    accessor: "rucAcquiring",
    className: "text-center ",
  },
  {
    Header: "Proveedor",
    accessor: "supplierName",
    className: "text-center ",
  },
  {
    Header: "Adquiriente",
    accessor: "acquiringName",
    className: "text-center ",
  },
  {
    Header: "Emisión",
    accessor: "emission",
    className: "text-center ",
  },
  {
    Header: "Registro",
    accessor: "record",
    className: "text-center ",
  },
  {
    Header: "Total",
    accessor: "total",
    className: "text-center ",
  },
  {
    Header: "Tipo Factura",
    accessor: "invoiceType",
    className: "text-center ",
  },
  {
    Header: "ACTION",
    accessor: "Action",
    className: "text-center ",
  },
];

const states = (state: string) => {
  switch (state) {
    case "REGISTERED":
      return (
        <span
          className={`text-center align-middle badge bg-success-transparent rounded-pill text-success p-2 px-3`}
        >
          Registrado
        </span>
      );
    case "NOTED":
      return (
        <span
          className={`text-center align-middle badge bg-info-transparent rounded-pill text-info p-2 px-3`}
        >
          Anotado
        </span>
      );
    case "REGISTERED_WITHOUT":
      return (
        <span
          className={`text-center align-middle badge bg-warning-transparent rounded-pill text-warning p-2 px-3`}
        >
          Registrado sin
        </span>
      );

    case "REDEEMED":
      return (
        <span
          className={`text-center align-middle badge bg-primary-transparent rounded-pill text-primary p-2 px-3`}
        >
          Redimido
        </span>
      );

    default:
      return (
        <span
          className={`text-center align-middle badge  rounded-pill  p-2 px-3`}
        >
          Otros
        </span>
      );
  }
};

const data1 = (
  <>
    <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
      <i className="fe fe-edit fs-18 text-primary me-4"></i>
    </OverlayTrigger>
    <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
      <i className="fe fe-trash-2 text-danger fs-18"></i>
    </OverlayTrigger>
  </>
);
export const DATATABLE1 = [
  {
    status: states("REGISTERED"),
    statusCode: "REGISTERED",
    rucSupplier: "20122343432",
    series: "F001",
    numeration: "001",
    rucAcquiring: "20122343432",
    supplierName: "ABC FACTORING",
    acquiringName: "ABC ADQUIRENTE",
    emission: "07/04/2025",
    record: "07/04/2025",
    total: "$123.45",
    invoiceType: "Contado",
    Action: data1,
  },
  {
    status: states("NOTED"),
    statusCode: "NOTED",
    rucSupplier: "20122343432",
    series: "F001",
    numeration: "002",
    rucAcquiring: "20876545132",
    supplierName: "DEF FACTORING",
    acquiringName: "DEF ADQUIRENTE",
    emission: "07/04/2025",
    record: "07/04/2025",
    total: "$123.45",
    invoiceType: "Crédito",
    Action: data1,
  },
  {
    status: states("REGISTERED_WITHOUT"),
    statusCode: "REGISTERED_WITHOUT",
    rucSupplier: "20122343432",
    series: "M001",
    numeration: "001",
    rucAcquiring: "20122343432",
    supplierName: "ABC FACTORING",
    acquiringName: "ABC ADQUIRENTE",
    emission: "07/04/2025",
    record: "07/04/2025",
    total: "$123.45",
    invoiceType: "Contado",
    Action: data1,
  },
  {
    status: states("REDEEMED"),
    statusCode: "REDEEMED",
    rucSupplier: "20122343432",
    series: "F001",
    numeration: "001",
    rucAcquiring: "20122343432",
    supplierName: "ABC FACTORING",
    acquiringName: "ABC ADQUIRENTE",
    emission: "07/04/2025",
    record: "07/04/2025",
    total: "$123.45",
    invoiceType: "Contado",
    Action: data1,
  },
  {
    status: states("REGISTERED"),
    statusCode: "REGISTERED",
    rucSupplier: "2012234",
    series: "F001",
    numeration: "001",
    rucAcquiring: "20122343432",
    supplierName: "ABC FACTO",
    acquiringName: "ABC ADQUIRENTE",
    emission: "07/04/2025",
    record: "07/04/2025",
    total: "$123.45",
    invoiceType: "Contado",
    Action: data1,
  },
  {
    status: states("REGISTERED"),
    statusCode: "REGISTERED",
    rucSupplier: "2012234",
    series: "F001",
    numeration: "001",
    rucAcquiring: "20122343432",
    supplierName: "ABC FACTO",
    acquiringName: "ABC ADQUIRENTE",
    emission: "07/04/2025",
    record: "07/04/2025",
    total: "$123.45",
    invoiceType: "Contado",
    Action: data1,
  },
  {
    status: states("NOTED"),
    statusCode: "NOTED",
    rucSupplier: "20122343432",
    series: "F001",
    numeration: "002",
    rucAcquiring: "20876545132",
    supplierName: "DEF FACTORING",
    acquiringName: "DEF ADQUIRENTE",
    emission: "07/04/2025",
    record: "07/04/2025",
    total: "$123.45",
    invoiceType: "Crédito",
    Action: data1,
  },
];

export const GlobalFilter = ({ filter, setFilter }: any) => {
  return (
    <span className="d-flex ms-auto">
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control mb-4"
        placeholder="Search..."
      />
    </span>
  );
};
//end dashboar
