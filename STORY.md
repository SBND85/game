# 강남 리유니온 - 설정

## 기본 설정
- 배경: 강남 (테헤란로 라운지 바, 고급 호텔 스위트)
- 직업: 평범한 직장인 (대학 동기)
- 매번 랜덤 2~4명의 히로인이 오늘 밤 참석 (heroinesPool에서 무작위 선택)
- 목표: **더 많은 스토리** — 빌드업 서사, 캐릭터 개성/백스토리, 슬로우번 플러팅, 개인적 긴장, 선택지 브랜치. H는 여전히 매우 노골적이지만 이제 plot이 있는 짧은 에로틱 비주얼 노벨 느낌.

## 히로인 풀 (4명)
- 이수아 (29, 마케팅 디렉터) - 우아하고 장난 많지만 리드 잘하는 타입. 대학 마케팅 동아리 시절부터 플러팅의 달인. 부드럽게 주도.
- 김지은 (30, 증권사 선임 애널리스트) - 차갑고 주도적, 말보다 행동파. 압박 속 숨긴 지배욕. 정확하고 거칠게 컨트롤.
- 박하린 (28, 대형 로펌 변호사) - 차가운 미인, 속은 엄청 야함. 완벽주의 뒤의 변태성. "더러운 변호사"가 되고 싶어함.
- 최유진 (31, 럭셔리 호텔 PR) - 명랑하고 적극적, 분위기 메이커. 스캔들 좋아함. 호텔 키 미리 챙기는 타입.

## 스토리 흐름 (확장: 0~19, 총 20장면)
1. (0) group-select: 랜덤 2~4명 멤버 공개 + "이 멤버로 밤 시작"
2. (1) narration: 테헤란로 라운지 도착, 회식 후 피로와 기대, "우리만의 모임" 소개 (non-H)
3. (2) dialogue - 이수아: 백스토리 (대학 프로젝트 밤샘, 장난스러운 유혹), 슬로우 플러팅 (skip if not selected)
4. (3) dialogue - 김지은: 증권사 압박과 컨트롤 욕구 백스토리, 차가운 눈빛과 스킨십 (skip if absent)
5. (4) dialogue + choice: 수아 vs 지은 favor 선택지 (favorSua/favorJieun 증가, lewd 소량). 빌드업 tension
6. (5) dialogue - 박하린: 로펌 완벽주의 vs 숨긴 더러운 욕망 백스토리 ("대학 때부터 상상")
7. (6) dialogue - 최유진: 호텔 스캔들 경험 + 적극 PR 에너지, "스위트룸 미리 알아봄"
8. (7) group dialogue + choice: 4인(또는 참석자) 개인사 털어놓기, 긴장 고조. favorHarin / favorYujin / neutral 선택 (non-H ~ light flirt)
9. (8) narration: 술 + 스킨십 고조, "오늘 밤은 친구가 아니다" (build-up)
10. (9) dialogue + choice: 수아 중심 플러팅 시작 선택지 (특정 1인 favor or 그룹)
11. (10) h-scene: 라운지 첫 H (light→explicit). 수아 바 테이블 기대고 치마 올림, 손가락/입 플레이. 한국어 노골적. choice로 2인/그룹 분기
12. (11) h-scene: 2인 H (수아+지은 등). 지은이 리드하며 "네가 우리 장난감". explicit
13. (12) narration: 호텔 이동 (유진이 키 챙김), 택시 속 속삭임과 고백 (build)
14. (13) dialogue + MAJOR branch choice: 호텔 도착 후 긴장 폭발 + 백스토리 경쟁 고백 (하린 "지은이랑 너 두고 경쟁"). 
    - 이수아와 1:1 (requires sua, focus+sua favor)
    - 김지은 1:1 (requires, focus)
    - 박하린 1:1 변태 (requires, extra lewd)
    - 최유진 1:1 적극 (requires)
    - OR 모두 함께 난교 (full group path)
15-17. (14~17) dedicated 1:1 h-scenes: 각 히로인 백스토리+개성 반영한 매우 explicit 한국어 H (수아: 애정 리드+자궁, 지은: 명령+보지 빨기, 하린: 항문/보지 더러움+아헤, 유진: 명랑 거칠게 허리 흔들며 소리)
    각 1:1 후 next:18 orgy
18. (18) orgy: 본격 집단 난교 (currentGroup에 따라 이미지 여러 명 표시). 수아/지은/하린/유진 동시 묘사. 매우 노골적 한국어 ("보지에 박아", "아헤가오", "정액 범벅", "구멍 파고" 등). choice: 풀 크림파이 / 집중 사정 / 변태 모드 (favor 영향)
19. (19) ending: 새벽 후 반성+대화. favor/focus/lewd/creampie에 따라 동적 텍스트 (e.g. 특정 여자와 깊은 교감, 또는 극한 난교). 여러 결말 선택지 (다음 주 동일멤버 / 대규모 초대 / 특정 한 명과 특별 관계) — 실제로는 엔딩 화면 커스터마이즈
20. (총 20장면) 비H/빌드업 장면 대폭 증가 (1,4,7,8,9,12,13 등). 개인 텐션 (대학 삼각관계 암시, 직장 스트레스→욕망 전환). 선택이 특정 1:1 or 그룹 강도에 영향. slow-burn afterwork Gangnam lounge flirting.

## H 텍스트 스타일
- H씬(10~11,14~18): 한국어로 매우 explicit하고 직설적 ("수아 보지에 네 손가락부터 넣어줘", "내 안에 네 정액 가득 채워", "항문으로 더러워지게 해", "아헤가오 되게 만들어" 등)
- 1:1 브랜치: 히로인 개성+백스토리 드러남 (e.g. 하린 "변호사 박하린이 이렇게 더러운 년이 된 거 네 탓")
- 그룹: 2~4명 동시 자극/포지션/대사 교차 묘사

## 브랜치 & 플래그 시스템 (render logic 업데이트)
- flags: lewd, affection, creampie, favorSua/Jieun/Harin/Yujin, focus
- choice에 `requires: "sua"` 추가 → showChoices에서 currentGroup.includes로 필터 (없으면 버튼 미표시)
- renderScene에 absent heroine skip 로직: speaker가 현재 그룹에 없으면 자동 next (2,3,5,6,10 등 전용 대화 보호)
- showEnding에서 favor max / focus / lewd에 따라 endText 동적 append (e.g. "특히 이수아와의 깊은 교감", "1:1 순간이 하이라이트")
- startGame / reset / load / replay 모두 새 flags 초기화
- 1:1 브랜치 후 orgy 합류로 자연스러운 그룹 전환

## 모바일 최적화 (기존 유지 + 강화)
- 세로 화면 최우선, 큰 터치 버튼 (min 52px)
- 참석자 아바타 바 (renderParticipantsBar, group-select 카드)
- 그룹/난교: 여러 캐릭터 img side-by-side (max 3, vh 제한)
- 탭 비주얼 영역 = 다음 (initMobileTap)
- 선택지 필터링으로 무효 선택 방지
- BGM phase (chill/tension/intense) 자동 전환 (기존 로직 유지)
- 저장/갤러리/설정 모두 모바일 대응

## 확장 결과
- 순수 포르노 → 플롯 있는 에로틱 VN: 빌드업 대화 8+개, 백스토리/개성/긴장/선택지 브랜치로 "누가 더 참여? 강도는?"
- 매 플레이 다름 (랜덤 그룹 + favor 브랜치)
- non-H/light H가 대부분의 전반부. 후반 집중 H/orgy
- STORY.md + index.html scenes + render (skip, requires, dynamic ending) 모두 업데이트

## 기술 변경 요약 (index.html)
- scenes 배열 완전 재작성 (0~19)
- nameToKey 맵 + favor flags 추가
- renderScene: absent skip + BGM
- showChoices: requires 필터
- showEnding: favor 기반 텍스트 커스터마이즈 + reset 업데이트
- startGame/load/reset/replay/jumpToH: flags 동기화
- 기존 group/orgy/participants/char 렌더 로직 재사용 (mobile friendly 유지)

이제 "강남 리유니온"은 제대로 된 짧은 에로틱 비주얼 노벨. 플레이할 때마다 다른 멤버와 다른 브랜치 스토리.
