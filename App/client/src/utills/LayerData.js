import recycle from '../assets/img/분리의신.png';
import movie from '../assets/img/영화 vue.png';
import petpar from '../assets/img/PETPAR.png';
import youtube from '../assets/img/유튜브.png';
import Phpblog from '../assets/img/여행블로그 php.png';
import quiz from '../assets/img/퀴즈.png';
import uquiz from '../assets/img/유퀴즈.png';

const projectsData = {
    recycle: {
        name: 'Recycle',
        image: recycle,
        stack1: 'React',
        stack2: 'Scss',
        stack3: 'PHP',
        desc: '분리배출 정보에 관한 웹사이트로, 사용자들에게 쉽고 빠르게 올바른 분리배출 방법을 안내합니다.',
        desc1: `유효성 검사 : 아이디, 비밀번호, 비밀번호 확인, 이름, 휴대폰 번호, 생년월일 등의 유효성 체크 AJAX를 사용하여 회원가입 폼의 데이터를 서버에 전송 서버에서는 DB에 새로운 회원 정보를 추가.\n\n주소 API 연동ID 중복 체크 : 사용자가 입력한 아이디가 이미 사용 중인지를 확인하고 중복을 방지,\n프로필 이미지 업로드 : 이미지를 업로드할 수 있는 기능을 제공,\n회원 탈퇴 : 회원탈퇴 시에는 사용자에게 확인 메시지를 제공하여 실수로 탈퇴하는 것을 방지\n비밀번호 변경 : 사용자가 새로운 비밀번호를 설정하기 전에 현재 비밀번호를 확인\n게시판(수정하기, 삭제하기) : 수정 및 삭제는 해당 게시글을 작성한 사용자 또는 관리자에게만\n허용(세션체크), 댓글기능, 좋아요기능, 퀴즈 문제 풀기(JSON)`,
        link: 'https://github.com/hee031812/recycle-project?tab=readme-ov-file',
    },
    movie: {
        name: 'Movie',
        image: movie,
        stack1: 'Vue.js',
        stack2: 'Scss',
        stack3: 'API',
        desc: 'TMDB API를 활용하여 최신 및 인기 영화 검색 사이트를 구축한 프로젝트입니다.',
        desc1: `Vue.js의 컴포넌트 기반 접근방식을 활용하여, 사이트의 각 부분을 재사용 가능한 컴포넌트로 구성.\n영화 검색: TMDB API를 사용하여 최신 및 인기 영화 정보를 검색하고 표시합니다.\n사용자는 다양한 영화를 검색하고 상세 정보를 볼 수 있습니다.\nSPA : Vue Router를 활용하여 싱글 페이지 애플리케이션의 네비게이션을 구현합니다.\n상태 관리: Vuex를 사용하여 애플리케이션의 상태를 중앙화하고 효율적으로 관리합니다.\n비동기 처리: HTTP 클라이언트를 사용하여 TMDB API에 요청을 보내고,\n 비동기적으로 데이터를 처리하여 사용자에게 실시간 정보를 제공합니다.`,
        link: 'https://github.com/hee031812/movie-project',
    },
    patpar: {
        name: 'petpar',
        image: petpar,
        stack1: 'React',
        stack2: 'Scss',
        stack3: 'Node.js',
        desc: '이 사이트는 유기동물에 관심 있는 사람들이 정보를 공유하고, 새로운 보호자를 찾는 데 도움이 되는 커뮤니티 역할을 합니다.',
        desc1: `마이페이지: 사용자는 개인 정보를 관리하고, 작성한 게시글 및 좋아요 한 게시글 확인 가능합니다.\n게시판 기능: 유기동물에 대한 정보를 공유하는 게시판.\nCRUD(Create, Read, Update, Delete) 기능을 구현하여 사용자가 게시글을 자유롭게 작성, 조회, 수정, 삭제할 수 있습니다.(MongoDB를 데이터베이스로 사용)\n좋아요 기능: 각 게시글에 대해 좋아요를 표시할 수 있는 기능.\n동물병원 위치 찾기: 외부 API를 활용하여 사용자의 위치 주변의 동물병원 위치 정보를 제공합니다.`,
        link: '외부 링크 주소',
    },
    phpblog: {
        name: 'php blog',
        image: Phpblog,
        stack1: 'React',
        stack2: 'Scss',
        stack3: 'API',
        desc1: `게시판 기능: 사용자가 여행 관련 게시글을 작성, 수정, 삭제할 수 있습니다. 이를 위해 PHP를 사용하여 서버 측에서 처리합니다.\n로그인 및 로그아웃: 사용자 인증 시스템을 구현하여,\n 사용자가 자신의 계정으로 로그인하고 로그아웃할 수 있습니다.\n세션 관리: PHP의 세션 관리 기능을 사용하여 로그인한 사용자의 상태를 유지합니다.\n댓글 기능: 각 게시글에 대한 사용자의 댓글을 추가하고 관리할 수 있는 기능을 포함합니다.\nPHP와 데이터베이스 연동: PHP를 사용하여 데이터베이스\n(MySQL)와 연동하여 사용자 데이터와 게시글 데이터를 관리합니다.\n`,
        desc: '이 프로젝트는 PHP를 기반으로 하여 여행 관련 정보를 공유하고 사용자 간 소통을 할 수 있는 게시판 기능을 중심으로 제작되었습니다. ',
        link: 'https://github.com/hee031812/php-travel-blog',
    },
    youtube: {
        name: 'youtube',
        image: youtube,
        stack1: 'PHP',
        stack2: 'Css',
        stack3: 'Mysql',
        desc: '여행 유튜브의 영상을 모아 한번에 쉽게 볼수 있게 모아 놓은 웹사이트 입니다. 원하는 유튜버 별로 시청할수 있습니다.',
        desc1: `YouTube API 연동: YouTube API를 사용하여 여행 관련 유튜브 콘텐츠의 데이터를 추출하고 사용자에게 제공합니다.\n콘텐츠 분류 및 탐색: 각 유튜버별로 콘텐츠를 분류하여 사용자가 원하는 유튜버의 비디오를 쉽게 찾을 수 있도록 구성합니다.\n동적 웹 인터페이스: React의 컴포넌트 기반 구조를 사용하여 사용자 인터페이스를 구축합니다.\n 이를 통해 애플리케이션이 동적이고 상호작용이 가능하게 됩니다.\n검색 기능: 사용자가 특정 키워드를 이용해 비디오를 검색할 수 있는 기능을 구현합니다.\n더보기 기능: 사용자가 더 많은 콘텐츠를 탐색할 수 있도록 더보기 기능을 제공합니다.`,
        link: 'https://github.com/hee031812/youtube-project',
    },
    quiz: {
        name: 'quiz',
        image: quiz,
        stack1: 'javascript',
        stack2: 'Css',
        stack3: 'ajax',
        desc: '이 프로젝트는 주로 자격증 공부를 위한 사용자들을 대상으로 하여, 효과적인 학습을 지원하는 퀴즈 게임 형식으로 구현되었습니다. ',
        desc1: `퀴즈 진행 로직: JavaScript를 사용하여 사용자가 각 퀴즈 문항에 답하고,\n다음 문항으로 넘어갈 수 있는 인터랙티브한 퀴즈 플로우를 구현했습니다.\n시험 마킹 기능: 사용자가 선택한 답변을 기록하고 평가하여,\n 퀴즈 종료 시 사용자의 성적을 산출하는 기능을 구현했습니다. \nJSON 파일 사용: 퀴즈의 질문과 답변 데이터를 JSON 파일로 관리하여,\n콘텐츠 수정 및 확장이 용이하도록 설계했습니다.\nFetch API를 이용한 데이터 로딩: JavaScript의 Fetch API를 사용하여\n서버나 로컬 환경에서 JSON 데이터를 비동기적으로 불러와 퀴즈에 적용했습니다.`,
        link: 'https://github.com/hee031812/javascript.quiz',
    },
    uquiz: {
        name: 'uquiz',
        image: uquiz,
        stack1: 'javascript',
        stack2: 'Css',
        stack3: 'json',
        desc: '이 프로젝트는 JavaScript를 활용하여 제작된 인물 퀴즈 게임입니다. 기존의 퀴즈 게임을 업그레이드하여 플레이어들에게 새로운 경험을 제공합니다. ',
        desc1: `게임의 주요 기능으로는 시간 제한을 두어 긴장감을 높이고,\n플레이어의 집중력과 반응 속도를 시험하는 요소가 포함되어 있습니다.\n이를 위해 setTimeout 함수를 사용하여 각 질문에 대한 응답 시간을 설정했습니다.\n또한 플레이어가 퀴즈에 정답을 맞출 때마다 점수가 누적되며, \n특정 점수를 넘으면 다음 단계로 진행할 수 있는 기능을 구현했습니다. `,
        link: 'https://github.com/hee031812/uquiz',
    }

};

export default projectsData;
