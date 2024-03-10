import React, { useState, useEffect } from "react";
import GymPerson from "../GymPerson/GymPerson";

const GymCard = () => {
  const [fitness, setFitness] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((fitness) => setFitness(fitness));
  }, []);
  return (
    <>
      <div className="grid lg:grid-cols-3 grid-col-1  gap-4 font-sans mb-8">
        {fitness.map((person) => (
          <GymPerson key={person.id} person={person}></GymPerson>
        ))}
      </div>
    </>
  );
};

export default GymCard;
