import React, { ReactNode, FunctionComponent, useState, MouseEvent } from 'react';

export type IPerson = {
  name: string;
  age: number;
  click?(e: MouseEvent, name: string, age: number): void;
};

export const Person: FunctionComponent<IPerson> = (props) => (
  <div>
    <p onClick={(e: MouseEvent) => (props.click ? props.click(e, props.name, props.age) : undefined)}>
      name : {props.name} / age: {props.age}
    </p>
  </div>
);

export type IPersonManager = {
  title: string;
  persons?: IPerson[];
};

export const PersonManager: FunctionComponent<IPersonManager> = (props: IPersonManager) => {
  const [persons, setPersons] = useState<IPerson[]>(props.persons || []);
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');

  const onPersonClicked = (e: MouseEvent, name: string, age: number) => {
    e.preventDefault();
    console.log(name);
  };

  const onAddPersonClicked = (e: MouseEvent, name: string, age: string) => {
    e.preventDefault();
    const person: IPerson = {
      name: name,
      age: parseInt(age),
      click: onPersonClicked,
    };
    setPersons([...persons, person]);
  };

  return (
    <div>
      <p>{props.title}</p>
      <div>
        <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="age" value={age} onChange={(e) => setAge(e.target.value)} />
        <input type="button" value="사람 등록" onClick={(e) => onAddPersonClicked(e, name, age)} />
      </div>
      {persons.map((person) => (
        <Person name={person.name} age={person.age} click={onPersonClicked} />
      ))}
    </div>
  );
};
