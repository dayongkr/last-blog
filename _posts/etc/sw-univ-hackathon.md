---
title: 2023 SW 중심대학 공동해커톤 참가 후기
date: 2023-07-08 13:56:00
---

총 51개교 대학생들이 참여하는 SW 중심대학 공동해커톤이 오랜만에 오프라인으로 개최되었다. 신청은 대학별로 개발자 4명 디자이너 1명을 뽑는데 우리 대학 같은 경우에는 4월에 공고가 올라오고 선착순으로 신청을 받았다.

## 📅 행사 일정

<!-- ![일정](IMG_5088%20Medium.jpeg) -->

행사는 총 3일간 천안 재능교육 연수원에서 진행되었는데 요약하면 아래와 같다.

- 1일 차: 개회식, 특강, 아이디어 피칭, 팀 빌딩
- 2일 차: 개발
- 3일 차: 발표, 시상식, 네트워킹 파티

### 23/06/28 1일 차 - 팀빌딩 및 아이디어 구체화

KTX를 타고 천안 아산역에 도착했고 10시 셔틀버스를 타고 재능교육 연수원에 도착했다. 로비에선 명찰과 담요(기념품)을 나눠줬고 대강당으로 이동해 간단한 오리엔테이션을 진행했다.

<!-- ![첫 식사](2023-07-07-16-11-38.jpeg) -->

간단한 O.T 이후에 식당으로 이동해서 밥을 먹었는데 반찬도 많고 맛도 좋아서 맛있게 먹었다. 이후에도 계속 반찬이 다양하게 나와서 자취생으로서 너무 좋았다😋

식사 이후에는 또 강당으로 이동해서 AWS에서 오신 강사님의 Cloud와 DevOps 특강을 들었다. 특강 이후에는 아이디어 발표가 있었는데 2분간 발표를 할 수 있었다. 나는 따로 아이디어를 준비하지 않아 발표하지 않았는데 다른 사람들도 똑같은지 아이디어가 아주 부족했다. 그래서 적지 않은 사람들이 팀 빌딩에 실패했고 주최 측에서 팀 빌딩을 도와주거나 이미 형성된 팀에 합류할 수 있도록 도와주었다.

<!-- ![아이디어](5초.jpg) -->

나는 다행히도 제일 먼저 찾아간 사람과 팀빌딩에 성공했고 팀원들과 함께 팀명을 정하고 아이디어를 구체화했다. 아이디어는 흔히 말하는 [히키코모리](https://ko.wikipedia.org/wiki/%ED%9E%88%ED%82%A4%EC%BD%94%EB%AA%A8%EB%A6%AC)와 같은 사회적 활동을 하지 않는 사람들과 구인난에 빠진 중소기업을 연결해 주는 플랫폼이었다. 구인·구직 플랫폼은 이미 많이 있기 때문에 차별점을 두기 위해 데이트 매칭 앱인 [틴더](https://tinder.com/ko)와 같은 매칭 시스템을 적용해 간단하게 구인·구직을 할 수 있도록 아이디어를 구체화했다.

저녁 식사 후 숙소에 짐을 풀고 잠시 휴식을 취한 후 삼성 오픈소스 그룹장님이 해주시는 특강을 들었는데 식사 후에 바로 들으니 살짝 졸음이 왔지만 오픈소스에 대한 삼성의 생각을 들을 수 있는 좋은 특강이라 정신차리려고 노력했다.

<!-- ![네트워크 불량](Screenshot-2023-07-07-at-4.50.23-PM.png) -->

해당 특강을 끝으로 본격적으로 체육관에 모여 개발을 시작했는데 네트워크가 너무 불량해서 개발할 수가 없었다. 패키지 다운로드는 물론 사이트 접속조차 잘 안돼서 너무 답답했다. 그래서 다들 테더링을 통해 개발을 시작했는데 연수원이 산에 있다 보니 휴대폰 통신도 잘 안 터져서 테더링도 잘 안됐다. 그래도 주최 측에서 열심히 노력한 결과 어느 정도는 개선되었지만, 행사가 끝날 때까지 원활하지는 않았다.

어쨋든 진행은 해야하니 프론트엔드를 같이 개발하기로 한 팀원과 기술 스택을 정하기 시작했다. 프로젝트에 맞는 스택을 선택하는 게 제일 좋지만, 해커톤 특성상 빠르게 결과물을 만들어야 하기 때문에 익숙한 스택을 선택하는 게 좋다고 생각했다. 그래서 Next.JS (App router), Tailwind CSS, Typescript를 선택했다.

### 23/06/29 2일 차 - 본격적으로 개발 시작

그렇게 좋지 않은 네트워크 환경에서 겨우 프로젝트 환경 구축에 성공하고 개발을 조금 하다 보니 새벽 3시가 되어 휴식을 취하기로 하고 다들 숙소로 향했다. 하지만 디자인을 맡아준 팀원은 늦게까지 프로토타입을 만들다가 자러 가서 어느정도 디자인이 완성되었고 덕분에 원활하게 개발할 수 있었다👍

<!-- ![개발 시작](IMG_D0D4ACB54B39-1.jpeg) -->

그렇게 팀원과 같이 개발하기 시작했는데 아무래도 프로젝트 규모가 작다 보니 같은 파일을 수정하는 경우가 많았다. 학교 동아리에서는 이슈를 등록하고 이슈별로 branch를 만들어 commit을 보내고 마지막에 PR을 날리면 한 명이 코드 리뷰를 하고 main branch에 병합하는 방식으로 협업했는데 해커톤에서는 그렇게 하기에는 시간이 너무 부족했다. 그래서 최대한 자주 pull & push를 하고 옆에서 같이 개발하고 있으니 개발 현황을 계속 서로 확인하는 것으로 하고 main branch에 바로 commit을 보내는 방식으로 협업했다.

<!-- ![커피차](Screenshot-2023-07-07-at-9.06.57-PM.png) -->

2 일차에는 커피차가 와서 덕분에 카페인 충전을 할 수 있었다! 또한 휴게실에는 에너지 음료 및 탄산 음료와 과자들이 있어서 당과 카페인을 계속 충전할 수 있었다.

> 2일 차에는 몬스터 3캔과 아메리카노 한 잔을 마셨다.. ㅎㅎ

총 일정은 3일이지만 개발을 할 수 있는 시간은 거의 하루뿐이라 시간이 너무 부족했다. 그래서 2일 차 저녁까지만 해도 로그인과 회원가입만 구현이 되어 있었고 백엔드 쪽도 API 구현이 온전치 않아서 밤에 살짝 위기감을 느꼈다.

<!-- ![커밋](Screenshot-2023-07-07-at-8.51.33-PM.png) -->

그래서 위 사진처럼 밤새워 개발하며 수많은 커밋을 했다...🥲 또한 API 연동을 하지 않고 더미 데이터를 따로 만들어서 시연할까도 생각했지만 백엔드 팀에서 API의 구현을 끝내줘서 새벽에 연동을 끝낼 수 있었다. 다만 마지막에는 시간이 없어 급하게 동작만 하면 넘어가는 식으로 개발하다 보니 코드가 너무 지저분해져서 아주 아쉬웠다.

### 23/06/30 3일 차 - 기분 좋은 마무리

개발을 마무리하고 5 \~ 6시에 잠깐 눈을 붙이러 숙소에 갔다. 그렇게 1 \~2 시간 정도 잠을 자고 다시 체육관으로 가서 시연 영상을 찍고 팀원끼리 발표 자료 등을 마무리 검토한 후 최종 제출을 했다.

<!-- ![발표 자료](30초.jpg) -->

점심 식사 후 바로 최종 발표가 시작됐고 심사위원 5분이 오셔서 평가하셨다. 발표는 총 5분으로 발표 3분 30초 + 질의응답 및 준비 과정 1분 30초가 주어졌다. 평가는 심사위원분이 매겨주신 점수 70% + 참가자들이 투표한 점수 30%로 이루어졌다. 어쨌든 PPT를 잘 만들어 준 디자이너분과 발표를 잘해주신 팀장분 덕분에 잘 마무리할 수 있었다.

그렇게 모든 팀의 발표가 마무리되고 저녁 식사를 하고 바로 시상식을 진행했다. 상은 대상(1), 최우수상(2), 우수상(3), 특별상(4), 후원기업상(7)으로 총 17팀이 상을 받을 수 있었다.

<!-- ![상장](IMG_5068-Medium.jpeg) -->

우리 팀은 그 중 우수상을 받았고 상금으로는 100만 원을 받을 예정이다 🥳🥳

> 대상, 상품으로 주는 후원기업상을 제외하곤 당일 지급이 아니었다.

시상을 마치고 폐회식을 진행하니 시간이 오후 8시가 넘어가서 당일 귀가하는 사람은 셔틀 타러 갔고 나머지 사람들은 네트워킹 파티에 참여했는데 멘토분들이 오셔서 사비로 많은 것들을 준비해 주셨고 덕분에 제대로 된 네트워킹 파티를 진행할 수 있었다.

<!-- ![텅빈 체육관](2023-07-07-16-11-37.jpeg) -->

그렇게 멘토분들로부터 행사 비하인드 얘기도 듣고 업계 현황에 대해서도 들을 수 있었다. 그리고 특히 한 멘토분과는 짧은 시간에 깊은 대화를 나눴고 좋은 말씀 많이 해주셔서 행사 끝나고 문자를 남겼는데 먼저 연락을 종종하자고 해주셔서 너무 감사했다. 다들 아쉬운지 새벽 3시까지 대화를 나눴고 네트워킹 파티를 마지막으로 행사가 끝났다.

## 마무리

<!-- ![기념사진](KakaoTalk_Photo_2023-07-08-13-29-07.jpeg) -->

결과적으로 우수상을 받았고 오랜만에 열정을 불태우며 개발을 할 수 있어서 너무 좋았다. 또한 대학생들이 모여 이렇게 열정적으로 뭔가를 만들어 내는 것이 청춘 같고 되게 좋은 추억으로 남을 것 같다. 기회가 된다면 더 성장한 모습으로 내년에도 참여해서 또 좋은 경험을 해보고 싶다! 행사를 준비해 주신 운영진분들, 멘토분들, 팀원분들 그리고 참가자분들 모두 고생 많으셨습니다! 🙇‍♂️

> 아! 끝나고 정관장을 선물해 준 우리 팀장 최고 👍👍

### Tips

- 웹, 앱 해커톤에서는 프론트엔드 개발자 비중을 높이기
- 코드 품질도 중요하지만, 기능 구현에 집중하기
- 중요한 기능을 먼저 구현하고 나머지 기능을 구현하기
- 다들 마음을 열고 있는 분위기라서 네트워킹을 잘 활용하기
- 별거 아닌 것 같아도 멘토분들께 질문하기

### 🔗 출처

- [SW 중심대학협의회 (사진)](https://www.swuniv.kr/61/?bmode=view&idx=15593367&back_url=&t=board&page=1)
