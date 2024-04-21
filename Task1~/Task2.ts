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
interface UserInterface {
  UserId: string;
  pw: string;
}

interface Employee extends UserInterface {
  department: string;
}

const employee: Employee = {
  UserId: 'Riel@naver.com',
  pw: '안알려줄꺼지롱',
  department: 'Finance',
};

// 타입스크립트의 유틸리티 타입

// - enum -여기서부터는 이해한코드를 가져오고 무슨뜻인지 작성하겠습니다 ..새로만드는건 아직 어렵네요

//숫자 -자동증가 하는 기능
enum numEnum {
  Up,
  Down,
  Left,
  Right,
}
//Up=0 , ~ Right =3
//if Up=1을 집어넣을시 Right =4

//문자 - 직렬화? (찾아볼것)
enum Direction {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

//이종 열거형 -굳이 이렇게쓸필요가?(가능하긴한데 쓸모가없다른 의견)
enum mix {
  No = 0,
  Yes = 'Yes',
}

//계산된 멤버와 상수 멤버  -- 위에서 보여줬듯이 아무것도 지정된값이 없으면 0으로 설정됨
// 상수열거형에 단항연산자 사용,이중 연산자 의 피연산자로 사용할경우 값이 nan,infinity이면 컴파일 시점에서 오류가 남

//유니언 열거형과 열거형 멤버 타입 -- 열거형 타입 자체가 효율적으로 각각의 열거형 멤버의 유니언이 된다는 점입니다.
enum E {
  Foo,
  Bar,
}

// function f(x: E) {
//   if (x !== E.Foo || x !== E.Bar)
//   }
//           ~~~~~~~~~~~
// 에러! E 타입은 Foo, Bar 둘 중 하나이기 때문에 이 조건은 항상 true를 반환합니다. 이경우 x !== E.Bar는 묻는 조건과 비교하는것은 적절하지 않다

//런타임에서의 열거형
enum E1 {
  X,
  Y,
  Z,
}

function f1(obj: { X: number }) {
  return obj.X;
}

// E가 X라는 숫자 프로퍼티를 가지고 있기 때문에 동작하는 코드입니다. - 하나만 type이 설정되있어도 실행이됨

//컴파일 시점에서 열거형 -
enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key];
  if (num <= LogLevel.WARN) {
    console.log('Log level key is:', key);
    console.log('Log level value is:', num);
    console.log('Log level message is:', message);
  }
}
printImportant('ERROR', 'This is a message');

//-이렇게 했을시
//ERROR - Log level Key is: ERROR , Log level value is: 0 , Log level message is: message ...이렇게 if문에걸리게됨

//역 매핑 ... 문자열은되진않음 , 추카코드에서 번들크기가 증가됨 , 역매핑이 자동으로 이루어진다는걸 인지 해야됨
enum reverseMap {
  A, // 0
  B, // 1
  C, // 2
  D, // 3
}
let map: reverseMap = reverseMap.B;
console.log(Map); //1
console.log(reverseMap[map]); // B

// Ambient 열거형 ... 밑에서 예시를 들어 설명하자면
// 숫자여서 자동증가하여야 하지만 B의 값은 지정이되지않고 undefined로 되기때문에 따로 지정해줘야한다
// enum이 실제로 js코드에서 구현되어야 한다 그렇지 않으면 런타임 에러가 날수있다
declare enum Enum {
  A = 1,
  B,
  C = 2,
}
//Objects vs Enums
//Enums는 코드 내에서 일련의 고정된 값들을 관리할 때 유용하며, Objects는 보다 복잡한 데이터 구조와 함께 동작을 캡슐화할 필요가 있을 때 사용됩니다

// - as const ... 2가지로 비교해야한다
const Colors = {
  red: '#FF0000',
  blue: '#0000FF',
  green: '#008000',
}; //=> 이거는 red , blue , green 은 Primitive Type 인 string으로 되는데
const Colors1 = {
  red: '#FF0000',
  blue: '#0000FF',
  green: '#008000',
} as const; // => 이거는 red , blue , green 은 Literal Type 으로 실제 값을 type으로 가지게되고
// Colors.red = "#FFA500" 이런식으로 하면 적용이되지만 Colors1.red="#FFA500" 이렇게 하면 Colors1.red는 원래 정해진값을 실제값을 type이기때문에 에러가 걸린다

// - record ...record를 사용할땐 작동하는건 비슷하지만  Record를 사용할땐  가독성, 재사용성, 유연성 이높다
//가독성-사용하지않을때
interface UserMap {
  [userId: number]: string;
}

const NonRecord: UserMap = {
  1: 'Alice',
  2: 'Bob',
  3: 'Charlie',
};

//사용할때
const record: Record<number, string> = {
  1: 'Alice',
  2: 'Bob',
  3: 'Charlie',
};
//재사용성
type Role = 'admin' | 'user' | 'guest'; // 이건 유연성
const defaultPages: Record<Role, string> = {
  admin: '/dashboard',
  user: '/profile',
  guest: '/login',
};

// - partial
interface partial1 {
  email: string;
  address: string;
}
type inform = Partial<partial1>;
const newMember: inform = {}; // 가능
const me: inform = { email: 'name' }; // 가능
const you: inform = { email: 'you', address: 'home' };
//이걸 안쓴다면
interface partial2 {
  email?: string;
  address?: string;
} // 이런식으로 작성하는데 가지는 타입이많아질수록 불편해진다

// - pick
interface Product5 {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}
type ProductType = Pick<Product5, 'id' | 'name' | 'price'>;
function baseProductItem(item: ProductType) {
  console.log(`Product ID : ${item.id}, Name: ${item.name}, Price: ${item.price} `);
}
//여기까지는 partial 과 비슷하지만 형식을 특정해서 재사용할수잇다는 장점이 있고 이장점으로 인해 새로운 속성을 추가할수있다는장점이있다
interface ProductReview {
  review: string;
  reviewScore: number;
}
type detailProductType = ProductType & ProductReview;
function detailProduct(item: detailProductType) {
  console.log(`Product ID: ${item.id}, Name: ${item.name}, Price: ${item.price}, Review Score: ${item.reviewScore}`);
}

// 사용 예
const productWithReview: detailProductType = {
  id: 1,
  name: 'Coffee Maker',
  price: 99.95,
  review: '좋네요',
  reviewScore: 4.5,
};
detailProduct(productWithReview);
// .. 이런식으로 type을 연결시켜서 사용할수있다
// - omit ... pick의 반대라서 순서를 바꿧습니다
type shoppingItem = Omit<Product5, 'stock'>;
const omit1: shoppingItem = {
  id: 1,
  name: 'red apple',
  price: 1000,
  brand: 'del',
};
//이런식으로 나오고 2개를 제외하고 싶다 인데 type을 지정안할꺼다 이러면
const omit2: Omit<Product5, 'stock' | 'brand'> = {
  id: 1,
  name: 'red apple',
  price: 1000,
};

// - exclude, extract - 겹치는거 삭제  , 겹치는것만 사용
type baseExclude = string | number | boolean;
type exclude = Exclude<baseExtract, number>; // exclude는 number를 제외한 string | boolean 타입이 됩니다.

type baseExtract = string | number | boolean;
type extract = Extract<baseExtract, number | boolean>; // extract는 number와 boolean의 교집합, 즉 number | boolean 타입이 됩니다.

// - return type ... 본문 예시가 좋아보여서 예시를가져오고 설명을 적엇습니다
declare function f2(): { a: number; b: string };
type T0 = ReturnType<() => string>; // 인자를 받지않고 string으로
type T1 = ReturnType<(s: string) => void>; // s 를 인자로 받고 반환은 하지않음 대신 타입은 void
type T2 = ReturnType<<T>() => T>; // 제너릭 타입T를 반환하는데 어떤 타입이든 반환하고 구체적인 타입이 제한되지않아서 unknown이됨
type T3 = ReturnType<<T extends U, U extends number[]>() => T>; //
type T4 = ReturnType<typeof f2>; // f2대체
// type T4 = {
//     a: number;
//     b: string;
// }
type T5 = ReturnType<any>; //any는됨
//type T5 = any
type T6 = ReturnType<never>; //never도됨
//type T6 = never
//안되는것들 string , Function =>any로 인식

// - optional
//   optional Parameters // 형식을 고정 할수있음
function intro(name: string, age?: number): string {
  return `Hello ${name}, you are ${age ? age + ' years old' : 'age unknown'}.`;
}

console.log(intro('Alice')); // 출력: "Hello Alice, you are age unknown."
console.log(intro('Bob', 28)); // 출력: "Hello Bob, you are 28 years old."

//   optional Chaining ...
interface UserInfo {
  id: number;
  contact?: {
    email?: string;
    phone?: string;
  };
}

const userInfo: UserInfo = {
  id: 100,
  contact: {
    email: 'user@example.com',
  },
};

console.log(userInfo.contact?.phone); // undefined
console.log(userInfo.contact?.email); // "user@example.com"

// - satisfies
// 예상 타입 정의
interface ExpectedType {
  a: number;
  b?: string;
}

// 'satisfies' 연산자를 사용하여 타입 검사
let satisfies = { satisfies1: 10, satisfies2: 20 } satisfies { satisfies1: number; satisfies2: number };
// 이 상황에서는 {satisfies1: number, satisfies2: number} 타입을 만족하고 있습니다.

// ExpectedType 인터페이스를 사용하는 예제
let correct = { a: 10, b: 'hello' } satisfies ExpectedType; // 성공
let alsoCorrect = { a: 10 } satisfies ExpectedType; // 성공 (b는 선택적)
// let nonCorrect = { a: 'string' } satisfies ExpectedType;
// 오류 (a의 타입이 number여야 함)

// - generic
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>('myString'); // output의 타입은 'string'
let numberOutput = identity<number>(100); // numberOutput의 타입은 'number'
// identity 가
