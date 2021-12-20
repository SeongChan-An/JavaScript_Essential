// 스코프는 코드가 실행 될 때 해당하는 영역에 진입하면 스코프가 생기고 벗어나면 사라진다

let myName = "Seongchan";

function foo() {
    let x = 10;

    console.log(myName);

    function bar() {
        let y = 10;

        console.log(myName);
    }
    
    bar();
}

foo();


//  https://developer.mozilla.org/ko/docs/Web/JavaScript/Memory_Management
// 가비지 컬렉션
// 가비지 콜렉션 알고리즘의 핵심 개념은 참조이다.
// A라는 메모리를 통해 (명시적이든 암시적이든) B라는 메모리에 접근할 수 있다면 
// "B는 A에 참조된다" 라고 한다. 예를 들어 모든 자바스크립트 오브젝트는 prototype 을 암시적으로 참조하고 그 오브젝트의 속성을 명시적으로 참조한다.
// 표시하고-쓸기(Mark-and-sweep) 알고리즘 추후에 다시 읽어보기
var x = {
    a: {
      b: 2
    }
  };
  // 2개의 오브젝트가 생성되었다. 하나의 오브젝트는 다른 오브젝트의 속성으로 참조된다.
  // 나머지 하나는 'x' 변수에 할당되었다.
  // 명백하게 가비지 콜렉션 수행될 메모리는 하나도 없다.
  
  
  var y = x;      // 'y' 변수는 위의 오브젝트를 참조하는 두 번째 변수이다.
  
  x = 1;          // 이제 'y' 변수가 위의 오브젝트를 참조하는 유일한 변수가 되었다.
  
  var z = y.a;    // 위의 오브젝트의 'a' 속성을 참조했다.
                  // 이제 'y.a'는 두 개의 참조를 가진다.
                  // 'y'가 속성으로 참조하고 'z'라는 변수가 참조한다.
  
  y = "mozilla";  // 이제 맨 처음 'y' 변수가 참조했던 오브젝트를 참조하는 오브젝트는 없다.
                  // (역자: 참조하는 유일한 변수였던 y에 다른 값을 대입했다)
                  // 이제 오브젝트에 가비지 콜렉션이 수행될 수 있을까?
                  // 아니다. 오브젝트의 'a' 속성이 여전히 'z' 변수에 의해 참조되므로
                  // 메모리를 해제할 수 없다.
  
  z = null;       // 'z' 변수에 다른 값을 할당했다.
                  // 이제 맨 처음 'x' 변수가 참조했던 오브젝트를 참조하는
                  // 다른 변수는 없으므로 가비지 콜렉션이 수행된다.