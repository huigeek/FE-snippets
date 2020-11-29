type person = {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]
}

const p: person = {
  name: 'xx',
  age: 33,
  hobbies: ['skydiving', 'flying'],
  role: [33, 'teacher']
}

for (const hobby of p.hobbies) {
  console.log(hobby.charAt(0).toUpperCase() + hobby.substring(1))
}