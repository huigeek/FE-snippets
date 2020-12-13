// 类型别名
type People = {
  name: string;
  age: number;
}

type PeopleType = number | string;

type PeopleValueOf<T> = T[keyof T]
type ValueOfPeople = PeopleValueOf<PeopleType>

type sameAsString = People['name'] // lookup name in People
type sameAsNumber = People['age'] // lookup age in People

// any 和 unknown的区别？