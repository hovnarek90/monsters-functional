import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.component.css";

class CardLIst extends Component {
  render() {
    // console.log("render from CardList");
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return (
            <div key={id}>
              <Card monster={monster} />
            </div>
            //   <h1 key={monster.id}>{monster.name}</h1>
          );
        })}
      </div>
    );
  }
}

export default CardLIst;
