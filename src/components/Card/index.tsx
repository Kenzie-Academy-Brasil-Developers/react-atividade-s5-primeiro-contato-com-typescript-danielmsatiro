import React from "react";

interface CardProps {
  name: string;
  age: number;
  hobby: string;
}

const Card = ({ name, age, hobby }: CardProps) => {
  return (
    <div>
      <p>
        Nome: {name} | Idade: {age} | Hobby: {hobby}
      </p>
    </div>
  );
};

export default Card;
