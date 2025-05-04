interface TodayBillsTypographyProps {
  value: number;
  text: string;
  textType?: string;
}

export const TodayBillsTypography: React.FC<TodayBillsTypographyProps> = ({
  value,
  text,
  textType,
}) => {
  return (
    <>
      Hoy
      <span className={`${textType}`}> {value} </span>
      {text}
    </>
  );
};
