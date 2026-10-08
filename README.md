# BYEOLDAM 공식 홈페이지

한국어·영어·일본어·중국어 간체의 12개 섹션 원페이지 공식 홈페이지입니다. GitHub Pages로 공개하며 고객지원·개인정보·약관 페이지를 함께 제공합니다.

- 공개 주소: https://hanseungpil.github.io/byeoldam-support/
- `index.html`, `index-en.html`, `index-ja.html`, `index-zh-Hans.html`: 공식 홈페이지
- `landing.css`, `landing.js`, `assets/`: 반응형 디자인, 브라우저 내 카드 체험, 공개 브랜드·샘플 자료
- `styles.css`, `support*.html`, `privacy*.html`, `terms*.html`: 기존 고객지원 및 정책 문서
- 카드 체험은 웹 미리보기이며, 주문·결제·개인정보 입력을 받지 않습니다. 분석·추적 스크립트도 없습니다.
- App Store 링크: https://apps.apple.com/app/id6817851184
- 현재 앱은 심사 대기 중입니다. 다운로드 가능·승인 완료로 표시하지 않습니다. 승인 후에는 공식 홈페이지 생성 원문의 출시 문구도 업데이트하세요.

홈페이지 원문 및 이미지 최적화 빌드는 앱 프로젝트의 `scripts/website/build_official.py`에 있습니다(Python + Pillow). 정책 문서 생성기를 실행했다면 공식 홈페이지 생성기를 마지막에 실행하여 홈을 유지하세요. 홈페이지를 바꿔도 앱 바이너리는 변경하지 않습니다.
