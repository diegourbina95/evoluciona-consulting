import { Card } from "react-bootstrap";

interface InformativeWidgetProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  subtitle?: React.ReactNode | string;
}

export const InformativeWidget: React.FC<InformativeWidgetProps> = ({
  title,
  value,
  icon,
  subtitle,
}) => {
  return (
    <Card className="overflow-hidden">
      <Card.Body>
        <div className="d-flex">
          <div className="mt-2">
            <h6 className="">{title}</h6>
            <h2 className="mb-0 number-font">{value}</h2>
          </div>
          <div className="ms-auto">
            <div className="mt-2">{icon}</div>
          </div>
        </div>
        <span className="text-muted fs-12">{subtitle}</span>
      </Card.Body>
    </Card>
  );
};
