//5

//var num = Array(45);

var num = Array(45);

//fill은 배열의 모든수를 다 꺼내어준다.
//var fill = num.fill();

var fill = num.fill();

//1~45숫자를 만드는 방법1 forEach를 사용한다.
/*fill.forEach(function(e,index){
    fill[index] = index+1;
});*/

//1~45숫자를 만드는 방법2 map을 사용하여 1:1로 맵핑을 하여 인덱스값을 대입시킨다.
//var map = fill.map(function(e, index){
 //   return index+1;
//});
//console.log(map);

var map = fill.map(function(e, index){
    return index + 1;
});

//숫자가 들어간 배열의 값들을 랜덤으로 섞어주는 방법.
//var shurfle = [];

var shurfle = [];

//while을 이용해서 배열의 크기만큼 반복문을 돌게 만들어준다.

while(map.length > 0){
    //랜덤으로 한개의 값을 뽑아주는 splice를 사용해서 위치를 이동하면서 1개의 값을 추출한다.
    var trans = map.splice(Math.floor(Math.random()*map.length), 1)[0];
    //추출한 값을 새로운 배열변수에 넣어준다.
    shurfle.push(trans);
}

console.log(shurfle);




//로또의 마지막 보너스 숫자
//var bonus = shurfle[shurfle.length - 1];

var bonus = shurfle[shurfle.length - 1];

//45개의 값을 담은 배열을 slice를 통해 당첨숫자들을 추려낸다.
//var result = shurfle.slice(0,6);

var result = shurfle.slice(0,6);


//sort에 사용된 p,c는 이전값과 현재값을 의미한다. 이 두수가 서로 뺄셈을 통해
//0보다 크면 서로 자리를 바꾼다. 예를 들면 [4,1,8,9]가 있다고 생각해보면
//p는 4 c는 1이된다. 4-1 = 3 0보다 크므로 1과 4는 서로 자리를 바꾼다.
//바뀐 후 [1,4,8,9] 그 다음에 4-8을 하게된다. 값은 -4이므로 0보다 작다 그래서
//자리를 유지한다. 이런식으로 오름차순 정렬을 하게된다.
//내림차순으로 하고싶다면 p와 c의 위치만 바꿔주면 된다.

console.log('reuslt = '+result.sort(function (p,c){ return p-c}),'bonus = '+bonus);

var Last = document.getElementById('Last');

for(var i = 0; i<result.length; i += 1){
    
    var ball = document.createElement('div');
    ball.style.display = 'inline-block';
    ball.style.border = '1px solid black';
    ball.style.borderRadius = '10px';
    ball.style.color = 'red';
    ball.style.width = '20px';
    ball.style.height = '20px';
    ball.style.textAlign = 'center';
    ball.textContent = result[i];
    Last.appendChild(ball);
    
}

var bonuss = document.getElementsByClassName('bonus')[0];
var bonusball = document.createElement('div');
bonusball.textContent = bonus;
bonuss.appendChild(bonusball);

