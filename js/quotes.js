const quotes = [
  {
    quote: "사람은 혼자서 모든 것을 습득할 수 있다. 성격은 빼고",
    character: "마리 앙리 벨",
  },
  {
    quote: "한 권의 책을 읽음으로써 자신의 삶에서 새 시대를 본 사람이 너무나 많다.",
    character: "헨리 데이비드 소로우",
  },
  {
    quote: "배우고 때로 익히면 또한 기쁘지 아니한가",
    character: "공자",
  },
  {
    quote: "협박으로 촉발된 논쟁은 지적 무능함을 고백하는 것과 같다.",
    character: "아인 랜드",
  },
  {
    quote: "미래는 여기 있다. 아직 널리 퍼지지 않았을 뿐이다.",
    character: "윌리엄 깁슨",
  },
  {
    quote: "성공이 끝은 아니다.",
    character: "윈스턴 처칠",
  },
  {
    quote: "돈으로 친구를 살 수는 없지만 돈으로 더 나은 부류의 적을 얻을 수는 있다.",
    character: "스파이크 밀리건",
  },
  {
    quote: "지식을 얻으려면 공부를 해야 하고, 지혜를 얻으려면 관찰을 해야 한다.",
    character: "마릴린 보스 사번트",
  },
  {
    quote: "군자는 말은 어눌해도 행동에는 민첩하다.",
    character: "공자",
  },
]

const quote = document.querySelector("#quote span:first-child");
const character = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
character.innerText = todaysQuote.character;
