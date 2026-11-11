# psm1206.github.io

개인 홈페이지 관리 메모입니다. Jekyll과 GitHub Pages로 배포하며, `master`에 push하면 1에서 2분 뒤 자동으로 반영됩니다. [Academic Pages](https://github.com/academicpages/academicpages.github.io) 템플릿에서 쓰지 않는 기능을 모두 덜어낸 버전입니다.

## 주요 수정 부분

| 바꾸려는 것 | 위치 |
| --- | --- |
| 소개글 | `index.md` |
| 연구 키워드, 상단 링크 버튼 | `_data/home.yml`의 `profile.interests`, `profile.links` |
| 논문 | `_data/home.yml`의 `publications` |
| 박사학위논문 | `_data/home.yml`의 `dissertation` |
| 경력, 학력 | `_data/home.yml`의 `experience`, `education` |
| 학술 활동 | `_data/home.yml`의 `service` |
| 수상, 강연, 강의 | `_data/home.yml`의 `honors`, `talks`, `teaching` |
| 프로필 사진 | `images/profile.jpg`를 덮어쓰기 (정사각형 권장) |
| 페이지 폭, 색, 사진 크기 | `assets/css/home.css` 맨 위 변수와 `.hero__photo` |
| 스크롤 애니메이션 | `assets/css/home.css`의 `.reveal`, `assets/js/home.js` |
| 섹션 구성과 순서 | `_layouts/home.html` |

대부분은 `_data/home.yml` 하나만 고치면 됩니다.

## 논문 추가

`publications`의 `International Conferences` 그룹 `items` 맨 위에 붙입니다.

```yaml
- title: "논문 제목"
  venue: "SIGIR 2027"            # 왼쪽 배지
  authors: 'A, <strong>Seongmin Park</strong>, B'
  eq: true                       # 공동 제1저자가 있을 때만. 이름 뒤에 *는 직접 붙임
  detail: "개최지 (Acceptance Rate: 00%)"
  links:                         # 없으면 이 줄 전체를 생략
    - {t: "paper", u: "https://..."}
    - {t: "code", u: "https://..."}
```

- 저자 문자열은 작은따옴표로 감쌉니다 (안에 HTML이 들어가므로).
- 배지는 한 줄로 고정되어 있으니 너무 길게 쓰지 않습니다.

## 자잘한 규칙

- 학술 활동에서 연도가 없는 항목은 `y: ""`로 두면 연도 칸 없이 한 줄로 표시됩니다.
- 수상 항목에 링크가 없으면 `u: ""`로 둡니다.
- 사진은 600px 정도로 줄여서 올립니다. 화면에는 250x350으로 표시되고, 위쪽 기준으로 잘립니다.
- 스크롤 애니메이션은 운영체제의 동작 줄이기 설정이 켜져 있으면 꺼집니다.

## 로컬 미리보기

```bash
bundle install
bundle exec jekyll serve
```

http://localhost:4000 에서 확인합니다.

## 참고

- 변경이 안 보이면 강력 새로고침(Cmd+Shift+R)을 해봅니다. CSS와 JS 주소에 빌드 시각이 붙어 있어서 보통은 일반 새로고침으로 충분합니다.
- 라이선스는 Academic Pages의 MIT 라이선스를 따릅니다 (`LICENSE`).
