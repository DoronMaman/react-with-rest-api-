import Card from "./card";

function CardList(props) {
  return (
    <ul>
      {props.meetups.map((parking) => (
        <Card
          key={parking.id}
          id={parking.id}
          image={parking.image}
          title={parking.title}
          description={parking.description}
          like={parking.like}
        />
      ))}
    </ul>
  );
}
export default CardList;
