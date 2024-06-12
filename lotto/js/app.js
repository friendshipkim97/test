// 로또번호를 랜덤으로 가져오는 함수
function getRandomNumber() {
    let selectedNumber = []; // 배열 초기화 해서 변수에 대입

    while (selectedNumber.length < lottoCount) {
        // 총 선택할 7개의 번호가 선택될 때까지 반복문
        let randomNumber = Math.floor(Math.random() * lottoMaxNumber) + 1; // 1~45의 숫자 가져오기
        if (!selectedNumber.includes(randomNumber)) {
            // 중복된 숫자가 아니라면 아래 코드 실행
            selectedNumber.push(randomNumber); // 숫자 배열에 넣기
        }
    }
    return selectedNumber;
}

const btn = document.getElementById('buttonId'); // 버튼 가져오기
const generalNumberP = document.getElementById('generalNumberId'); // 일반 번호 P 가져오기
const bonusNumberP = document.getElementById('bonusNumberId'); // 보너스 번호 P 가져오기

btn.addEventListener('click', function () {
    // 버튼에 이벤트 리스너 추가
    let selectedNumber = getRandomNumber(); // 로또 랜덤 숫자 7개 가져오기
    let bounsNumber = selectedNumber[6]; // 마지막 인덱스는 보너스 번호로 사용
    let generalNumber = selectedNumber.splice(0, 6); // 나머지 번호들은 일반 번호로 사용

    generalNumberP.innerText = generalNumber; // 일반 번호 단락에 텍스트 넣기
    bonusNumberP.innerText = bounsNumber; // 보너스 번호 단락에 텍스트 넣기
});
