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
        stack3: 'Node.js',
        desc: '분리배출 정보에 관한 웹사이트로, 사용자들에게 쉽고 빠르게 올바른 분리배출 방법을 안내합니다.',
        desc1: '유효성 검사 : 아이디, 비밀번호, 비밀번호 확인, 이름, 휴대폰 번호, 생년월일 등의 유효성 체크 \n AJAX를 사용하여 회원가입 폼의 데이터를 서버에 전송하고, 서버에서는 DB에 새로운 회원 정보를 추가합니다. 주소 API 연동ID 중복 체크 : 사용자가 입력한 아이디가 이미 사용 중인지를 확인하고 중복을 방지, 프로필 이미지 업로드 : 이미지를 업로드할 수 있는 기능을 제공, 회원 탈퇴 : 회원탈퇴 시에는 사용자에게 확인 메시지를 제공하여 실수로 탈퇴하는 것을 방지, 비밀번호 변경 : 사용자가 새로운 비밀번호를 설정하기 전에 현재 비밀번호를 확인, 게시판(수정하기, 삭제하기) : 수정 및 삭제는 해당 게시글을 작성한 사용자 또는 관리자에게만 허용(세션체크), 댓글기능, 좋아요기능, 퀴즈 문제 풀기(JSON)',
        link: 'https://github.com/hee031812/recycle-project?tab=readme-ov-file',
    },
    movie: {
        name: 'Movie',
        image: movie,
        stack1: 'Vue.js',
        stack2: 'Scss',
        stack3: 'API',
        desc: 'TMDB API를 활용하여 최신 및 인기 영화 검색 사이트를 구축한 프로젝트입니다.',
        desc1: ' Vue.js의 컴포넌트 기반 접근 방식을 활용하여, 사이트의 각 부분을 독립적이고 재사용 가능한 컴포넌트로 구성했습니다. 이는 코드의 유지보수성과 확장성을 향상시킵니다.Vue Router를 사용하여 SPA(Single Page Application)의 네비게이션을 구현했으며, Vuex를 통해 애플리케이션의 상태 관리를 중앙화하여 효율적으로 관리했습니다.HTTP 클라이언트를 사용하여 TMDB API에 요청을 보내고, 최신 영화 및 인기 영화 정보를 가져왔습니다. 비동기 요청 및 응답 처리를 통해 사용자에게 실시간 데이터를 제공합니다',
        link: 'https://github.com/hee031812/movie-project',
    },
    patpar: {
        name: 'petpar',
        image: petpar,
        stack1: 'React',
        stack2: 'Scss',
        stack3: 'Node.js',
        desc: '이 사이트는 유기동물에 관심 있는 사람들이 정보를 공유하고, 새로운 보호자를 찾는 데 도움이 되는 커뮤니티 역할을 합니다.',
        desc1: '사용자 인증: JWT(Jason Web Token) 기반의 인증 시스템을 구현하여 사용자의 로그인 및 회원가입을 처리합니다. 비밀번호는 bcrypt를 사용하여 안전하게 암호화합니다. 마이페이지: 사용자는 개인 정보를 관리하고, 작성한 게시글 및 좋아요 한 게시글을 볼 수 있는 마이페이지를 이용할 수 있습니다. React의 상태 관리 기능을 활용하여 사용자 경험을 향상시켰습니다.게시판 기능: 유기동물에 대한 정보를 공유하는 게시판입니다. CRUD(Create, Read, Update, Delete) 기능을 구현하여 사용자가 게시글을 자유롭게 작성, 조회, 수정, 삭제할 수 있습니다. MongoDB를 데이터베이스로 사용하여 데이터를 효율적으로 관리합니다. 좋아요 기능: 각 게시글에 대해 좋아요를 표시할 수 있는 기능입니다. React 컴포넌트와 Axios 라이브러리를 사용하여 비동기적으로 좋아요 상태를 관리합니다. 동물병원 위치 찾기: 외부 API를 활용하여 사용자의 위치 주변의 동물병원 위치 정보를 제공합니다. 이 기능은 사용자에게 실시간 정보를 제공하여 긴급 상황에서 도움을 줄 수 있습니다.',
        link: '외부 링크 주소',
    },
    phpblog: {
        name: 'php blog',
        image: Phpblog,
        stack1: 'React',
        stack2: 'Scss',
        stack3: 'API',
        desc: '이 프로젝트는 PHP를 기반으로 하여 여행 관련 정보를 공유하고 사용자 간 소통을 할 수 있는 게시판 기능을 중심으로 제작되었습니다. ',
        desc1: '게시판 기능 구현: 사용자가 게시글을 작성, 수정, 삭제할 수 있는 기능을 PHP를 통해 구현했으며 PHP와 데이터베이스(예: MySQL)를 연동하여 사용자의 게시글과 댓글 데이터를 저장 및 관리합니다. 또한 로그인 및 로그아웃 기능: 사용자가 자신의 계정으로 로그인하고 로그아웃할 수 있도록 인증 시스템을 구현했으며, 세션 관리: PHP의 세션 관리 기능을 사용하여 로그인한 사용자의 상태를 유지 관리합니다. 댓글 기능: 사용자가 각 게시글에 댓글을 달 수 있는 기능을 구현했습니다.  ',
        link: 'https://github.com/chfhr22/petpar',
    },
    youtube: {
        name: 'youtube',
        image: youtube,
        stack1: 'PHP',
        stack2: 'Css',
        stack3: 'Mysql',
        desc: '여행 유튜브의 영상을 모아 한번에 쉽게 볼수 있게 모아 놓은 웹사이트 입니다. 원하는 유튜버 별로 시청할수 있습니다.',
        desc1: ' YouTube API를 통해 여행 관련 유튜브 콘텐츠의 데이터를 추출하고, 이를 사용자에게 제공하기 위해 적절히 가공했습니다. 각 유튜버별로 콘텐츠를 분류하여, 사용자가 쉽게 원하는 유튜버의 비디오를 찾을 수 있도록 했습니다. React의 컴포넌트 기반 구조를 활용하여 애플리케이션을 구축했습니다. 각 기능별로 컴포넌트를 분리하여 재사용성을 높이고, 유지보수를 용이하게 했습니다. 비디오 검색 기능: 사용자가 특정 키워드를 이용해 비디오를 검색할 수 있는 기능을 구현했습니다. 이는 사이트의 사용성을 크게 향상시킵니다. 더보기 기능: 사용자가 더 많은 콘텐츠를 탐색할 수 있도록 더보기 기능을 구현했습니다. 이는 사용자의 탐색 경험을 개선합니다.',
        link: 'https://github.com/hee031812/youtube-project',
    },
    quiz: {
        name: 'quiz',
        image: quiz,
        stack1: 'javascript',
        stack2: 'Css',
        stack3: 'ajax',
        desc: '이 프로젝트는 주로 자격증 공부를 위한 사용자들을 대상으로 하여, 효과적인 학습을 지원하는 퀴즈 게임 형식으로 구현되었습니다. ',
        desc1: '퀴즈 진행 로직: JavaScript를 사용하여 사용자가 각 퀴즈 문항에 답하고, 다음 문항으로 넘어갈 수 있는 인터랙티브한 퀴즈 플로우를 구현했습니다.시험 마킹 기능: 사용자가 선택한 답변을 기록하고 평가하여, 퀴즈 종료 시 사용자의 성적을 산출하는 기능을 구현했습니다. JSON 파일 사용: 퀴즈의 질문과 답변 데이터를 JSON 파일로 관리하여, 콘텐츠 수정 및 확장이 용이하도록 설계했습니다. Fetch API를 이용한 데이터 로딩: JavaScript의 Fetch API를 사용하여 서버나 로컬 환경에서 JSON 데이터를 비동기적으로 불러와 퀴즈에 적용했습니다.',
        link: 'https://github.com/hee031812/javascript.quiz',
    },
    uquiz: {
        name: 'uquiz',
        image: uquiz,
        stack1: 'javascript',
        stack2: 'Css',
        stack3: 'json',
        desc: '이 프로젝트는 JavaScript를 활용하여 제작된 인물 퀴즈 게임입니다. 기존의 퀴즈 게임을 업그레이드하여 플레이어들에게 새로운 경험을 제공합니다. ',
        desc1: '게임의 주요 기능으로는 시간 제한을 두어 긴장감을 높이고, 플레이어의 집중력과 반응 속도를 시험하는 요소가 포함되어 있습니다. 이를 위해 setTimeout 함수를 사용하여 각 질문에 대한 응답 시간을 설정했습니다. 또한 플레이어가 퀴즈에 정답을 맞출 때마다 점수가 누적되며, 특정 점수를 넘으면 다음 단계로 진행할 수 있는 기능을 구현했습니다. ',
        link: 'https://github.com/hee031812/uquiz',
    }

};

export default projectsData;
