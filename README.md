# psm1206.github.io

Seongmin Park의 개인 홈페이지입니다. Jekyll과 GitHub Pages로 배포하며, [Academic Pages](https://github.com/academicpages/academicpages.github.io) 템플릿에서 필요한 기능만 남겨 단순화했습니다.

## 구조

| 경로 | 역할 |
| --- | --- |
| `index.md` | 상단 소개글 (Markdown) |
| `_data/home.yml` | 프로필, 논문, 경력, 학력, 학술 활동, 수상, 강연, 강의 등 모든 내용 |
| `_layouts/home.html` | 페이지 템플릿 (섹션 구성) |
| `assets/css/home.css` | 스타일 (다크모드 및 모바일 대응 포함) |
| `assets/js/home.js` | 상단 메뉴의 현재 섹션 표시 |
| `images/` | 프로필 사진과 파비콘 |
| `_config.yml` | 사이트 설정 |

## 내용 수정

대부분의 수정은 `_data/home.yml`에서 합니다.

- 논문 추가: `publications`의 해당 그룹 `items` 맨 위에 항목을 추가합니다. 공동 제1저자는 저자 이름 뒤에 `*`를 붙이고 `eq: true`를 지정합니다. 본인 이름은 `<strong>`으로 감쌉니다.
- 경력 및 학력 추가: `experience`, `education`에 항목을 추가합니다.
- 소개글 수정: `index.md`를 고칩니다.
- 프로필 사진 교체: `images/profile.jpg`를 덮어씁니다. 정사각형을 권장합니다.

## 로컬 실행

```bash
bundle install
bundle exec jekyll serve
```

http://localhost:4000 에서 확인할 수 있습니다.

## 라이선스

Academic Pages 템플릿의 MIT 라이선스를 따릅니다. 자세한 내용은 `LICENSE`를 참고하세요.
