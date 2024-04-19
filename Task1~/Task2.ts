// 타입스크립의 기본 타입

// - number : 숫자만 사용가능
let num: number = 30;
console.log(num);
num = 10;
console.log(num);
//num = "양아치"

// - string : 문자열만 사용가능
let str: string = '수육';
console.log(str);
str = '족발';
console.log(str);
//str = 7000;

// - boolean : 진위값만 사용가능 ...T/F
let isLoggedIn: boolean = true;
console.log(isLoggedIn);
isLoggedIn = false;
console.log(isLoggedIn);
// isLoggedIn = '뭘봐';

// - any 모든 타입 적용 허용
let any: any = 'h1';
any = 10;
any = ['a', 2, true];

// - object
let object: object = {
  id: 1,
  name: 'Riel',
};
//console.log(object.id); 접근불가능 - object 가 매우일반적이고 추상적인 타입이기에 TypeScript 컴파일러가 구체적인속성(id , name 등 )의 존재를 인식이 불가능하기때문에
//사용원할시 3가지 가있다
//1
interface User {
  id: number;
  name: string;
}
let user: User = {
  id: 1,
  name: 'Riel',
};
console.log(user.id); //사용가능
//2
let object2: object = {
  id: 1,
  name: 'Riel',
};
console.log((object2 as { id: number }).id); //이렇게 하면 id에 타입을 지정해주기때문에 사용가능
//3
let object3: { [key: string]: any } = {
  id: 1,
  name: 'Riel',
};
console.log(object3.id); // 가능
//object를 타입을 재사용하고싶은데 id는 필요없을때 사용법
type object1 = {
  id?: number;
  name: string;
};
let user1: object1 = {
  name: 'Riel',
};
console.log(user1); //이렇게 할시 id빼고 사용가능 ?를 붙이면 있어도 되고 없어도 되는 존재 된다
// - array
let numberArray: number[] = [1, 2, 3];
//or
let arr: Array<number> = [1, 2, 3];
// - unknown ...any 랑 비슷함
let name1: unknown = 'kim';
name1: 123;
name1: undefined;
name1: [];
let x: unknown;
// let x1: string = x;
// let x2: boolean = x;
// let x3: number = x; //... any 와 다르게 에러가 발생함 (다른점 1)

// x[0];
// x-1;
// x.data
//이렇게 해도 에러가남...any는 됨{unknown은 모든 자료롤 받긴하지만 타입은 그대로 unknown으로 받음}

// - union, conditional
//union : 여러 타입을 집어넣을수 있음
let union: number | string;

union = 20; // 유효
union = 'hello'; // 유효
// union = false;  // 오류: 'boolean' 타입은 지정한 두타입에는 들어가지않음

// conditional ... 입력된 타입에 따라 결과 타입이 결정되는 표현식 if 와 같다고 볼수있다
type conditional<T> = T extends string ? 'String' : 'Not a string';

type conditional1 = conditional<string>; // "String"
type conditional2 = conditional<number>; // "Not a string"

// - type alias
type alias = {
  x: number;
  y: string;
};

type ID = string | number;

const alias1: alias = { x: 10, y: '20' };
const userId: ID = 'user_123'; // ID 타입으로 string 또는 number 사용 가능 - 닉네임 변경하는느낌?

// - interface
// interface User {
//   id: string;
//   pw: string;
// }

// interface Employee extends User {
//   department: string;
// }

// const employee: Employee = {
//   id: 'Riel@naver.com',
//   name: 'John Doe',
//   department: 'Finance',
// };

// 타입스크립트의 유틸리티 타입

// - enum
// - as const
// - record
// - partial
// - omit
// - pick
// - extract
// - returntype
// - optional
// - satisfies
// - generic
