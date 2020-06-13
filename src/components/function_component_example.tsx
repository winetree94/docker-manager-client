import React, { FunctionComponent, useState, useEffect, MouseEvent, useRef } from 'react';
import { AuthContext } from '../context/auth_context';

export type IPerson = {
  name: string;
  age: string;
  onPersonClick?(person: IPerson): void;
  onRemoveClicked?(e: MouseEvent, name: string, age: string): void;
};

/**
 * stateless
 */
export const Person: FunctionComponent<IPerson> = (props) => {
  return (
    <div>
      <p onClick={(e: MouseEvent) => (props.onPersonClick ? props.onPersonClick(props) : undefined)}>
        name : {props.name} / age: {props.age}
      </p>
      <input
        type="button"
        value="remove"
        onClick={(e: MouseEvent) =>
          props.onRemoveClicked ? props.onRemoveClicked(e, props.name, props.age) : undefined
        }
      />
    </div>
  );
};

export type IPersonEditor = {
  person: IPerson;
  onEditClick(person: IPerson, name: string, age: string): void;
};

export const PersonEditor: FunctionComponent<IPersonEditor> = (props) => {
  const [name, setName] = useState<string>(props.person.name);
  const [age, setAge] = useState<string>(props.person.age);
  useEffect(() => {
    setName(props.person.name);
    setAge(props.person.age);
  }, [props.person]);
  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      <input type="button" value="수정" onClick={(e) => props.onEditClick(props.person, name, age)} />
    </div>
  );
};

export type IPersonManager = {
  title: string;
  persons?: IPerson[];
};

/**
 * stateful
 */
export const PersonManager: FunctionComponent<IPersonManager> = (props: IPersonManager) => {
  const [persons, setPersons] = useState<IPerson[]>(props.persons || []);
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [person, setPerson] = useState<IPerson>({ name: '', age: '' });
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (input.current) {
      input.current.value = 'asdfasdf';
    }
  }, []);

  const onPersonClicked = (person: IPerson) => {
    setPerson(person);
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
      age: age,
      onPersonClick: onPersonClicked,
    };

    setPersons([...persons, person]);
  };

  const onPersonEditClicked = (editedPerson: IPerson, name: string, age: string) => {
    setPersons(
      persons.map((person) => {
        if (person.name === editedPerson.name) {
          return {
            name: name,
            age: age,
          };
        } else {
          return person;
        }
      })
    );
  };

  const onRemovePersonClicked = (e: MouseEvent, name: string, age: string) => {
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
        <div key={person.name}>
          <Person
            name={person.name}
            age={person.age}
            onPersonClick={onPersonClicked}
            onRemoveClicked={onRemovePersonClicked}
          />
        </div>
      ))}
      <div>
        <PersonEditor person={person} onEditClick={onPersonEditClicked} />
      </div>
      <div>
        {/* 인풋 바인딩 */}
        <input type="text" ref={input} />
      </div>
    </div>
  );
};
