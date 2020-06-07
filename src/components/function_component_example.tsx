import React, { ReactNode, FunctionComponent, useState, MouseEvent } from 'react';

export type IPerson = {
  name: string;
  age: number;
  click?(e: MouseEvent, name: string, age: number): void;
  onRemoveClicked?(e: MouseEvent, name: string, age: number): void;
};

export const Person: FunctionComponent<IPerson> = (props) => (
  <div>
    <p onClick={(e: MouseEvent) => (props.click ? props.click(e, props.name, props.age) : undefined)}>
      name : {props.name} / age: {props.age}
    </p>
    <input type="button" value="remove" onClick={(e: MouseEvent) => (props.onRemoveClicked ? props.onRemoveClicked(e, props.name, props.age) : undefined)} />
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

    const existPerson = persons.find((person) => person.name === name);

    if (!name) {
      window.alert('please type name');
      return;
    }

    if (existPerson) {
      window.alert('duplicated');
      return;
    }

    if (!parseInt(age)) {
      window.alert('please type valid age ');
      return;
    }

    const person: IPerson = {
      name: name,
      age: parseInt(age),
      click: onPersonClicked,
    };
    setPersons([...persons, person]);
  };

  const onRemovePersonClicked = (e: MouseEvent, name: string, age: number) => {
    e.preventDefault();
    setPersons(persons.filter((person) => person.name !== name));
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
        <Person key={person.name} name={person.name} age={person.age} click={onPersonClicked} onRemoveClicked={onRemovePersonClicked} />
      ))}
    </div>
  );
};
