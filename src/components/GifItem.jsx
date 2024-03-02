import { Card } from "react-bootstrap";

export const GifItem = ({title, url}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={url} />
      <Card.Title>{title}</Card.Title>
    </Card>
  );
}
