import { ClassSettings, EncyclopediaEntry } from '../types/encyclopedia';

export const BUILTIN_IMAGES = {
  background: '/src/assets/images/bg_storybook_landscape_1795165363163.jpg',
  chuseokHarvest: '/src/assets/images/chuseok_harvest_moon_1795165362796.jpg',
  chuseokMakingSongpyeon: '/src/assets/images/chuseok_making_songpyeon_1795470405723.jpg',
  chuseokCharye: '/src/assets/images/chuseok_charye_table_1795470404739.jpg',
  chuseokSeongmyo: '/src/assets/images/chuseok_seongmyo_visit_1795470404716.jpg',
  chuseokGames: '/src/assets/images/chuseok_folk_games_1795165363404.jpg',
  chuseokBullWrestling: '/src/assets/images/chuseok_bull_wrestling_clean_1795469866527.jpg',
  dongjiPatjuk: '/src/assets/images/dongji_redbean_porridge_1795165364102.jpg',
  dongjiPatjukFamily: '/src/assets/images/dongji_patjuk_family_1795469852747.jpg',
  dongjiNight: '/src/assets/images/dongji_longest_night_1795165364498.jpg',
  dongjiBeoseonGift: '/src/assets/images/dongji_beoseon_gift_1795469852822.jpg',
  dongjiCalendarSharing: '/src/assets/images/dongji_calendar_sharing_1795469851468.jpg',
} as const;

export const DEFAULT_CLASS_SETTINGS: ClassSettings = {
  classTitle: '우리반 세시풍속 지식백과',
  teacherMessage: '궁금한 낱말을 찾아보며 조상들의 지혜를 탐구해 보아요!',
  backgroundMood: 'hanji',
};

export const DEFAULT_ENTRIES: EncyclopediaEntry[] = [
  {
    id: 'chuseok-overview',
    title: '추석 (한가위)',
    category: '추석',
    timing: '음력 8월 15일',
    topicType: '가을 명절',
    keywords: ['추석', '한가위', '중추절', '명절', '가을', '수확', '보름달', '음력 8월 15일'],
    summary: '일 년 중 가장 큰 보름달이 뜨는 날, 곡식과 과일이 무르익어 감사하는 우리나라 큰 명절이에요.',
    explanation: [
      '추석은 음력 8월 15일로, 예로부터 ‘한가위’라고도 불렀어요. ‘한’은 크다는 뜻이고, ‘가위’는 가운데라는 뜻이에요. 즉, 가을의 한가운데 있는 큰 날이라는 의미랍니다.',
      '여름 동안 정성껏 기른 벼와 과일들을 처음 거두어들이는 시기라서 먹을 것이 풍성해요. 그래서 “더도 말고 덜도 말고 한가위만 같아라”라는 옛말도 전해져 내려온답니다.',
      '온 가족이 고향에 모여 햇곡식으로 만든 음식을 나누어 먹고, 밝은 보름달을 보며 소원을 빌어요.',
    ],
    wisdom:
      '추석은 자연이 내려준 풍성한 수확에 감사하고, 흩어져 살던 가족과 이웃이 서로 정을 나누며 마음을 모으는 지혜가 담겨 있어요.',
    inquiryQuestion: '만약 내가 옛날 사람이라면, 추석 보름달을 보며 어떤 감사의 마음이나 소원을 빌었을까요?',
    inquiryHint: '가족의 건강, 농사, 친구들과의 우정 등을 떠올려 보세요.',
    imageUrl: BUILTIN_IMAGES.chuseokHarvest,
    imageCaption: '황금빛 들판과 둥근 보름달 아래 가족이 함께 모인 추석 저녁 모습',
    images: [
      {
        url: BUILTIN_IMAGES.chuseokHarvest,
        caption: '황금빛 들판과 둥근 보름달 아래 가족이 함께 모인 추석 저녁 모습',
      },
      {
        url: BUILTIN_IMAGES.chuseokGames,
        caption: '추석 밤 달빛 아래 모여 함께 노래하고 춤추는 강강술래 놀이',
      },
      {
        url: BUILTIN_IMAGES.chuseokBullWrestling,
        caption: '추석 명절 마을 사람들이 모여 즐겁게 응원하던 소싸움 놀이',
      },
    ],
    relatedIds: ['chuseok-songpyeon', 'chuseok-charye', 'chuseok-ganggangsullae', 'chuseok-sossaum'],
  },
  {
    id: 'chuseok-songpyeon',
    title: '송편과 햇곡식',
    category: '추석',
    timing: '추석 명절',
    topicType: '명절 음식',
    keywords: ['송편', '떡', '반달', '솔잎', '햇곡식', '깨', '콩', '밤', '음식'],
    summary: '그해에 새로 거둔 햅쌀로 반죽해 온 가족이 마주 앉아 빚고 솔잎을 깔아 쪄 먹는 추석의 대표 음식이에요.',
    explanation: [
      '송편은 추석에 새로 수확한 햅쌀 가루를 반죽해서 안에 깨, 콩, 밤, 팥 같은 소를 넣고 반달 모양으로 빚은 떡이에요.',
      '시루에 떡을 찔 때 솔잎을 깔고 찌기 때문에, 솔잎 향기가 배어들어 ‘송편(소나무 송, 떡 병)’이라는 이름이 붙었어요.',
      '온 가족이 마주 앉아 “송편을 예쁘게 빚으면 좋은 일이 생긴다”고 이야기하며 도란도란 함께 빚는 즐거움도 컸답니다.',
    ],
    wisdom:
      '송편이 둥근 보름달이 아니라 반달 모양인 이유는, 반달이 앞으로 점점 차오르는 것처럼 우리 가족의 복과 희망도 계속 커지기를 바라는 마음 때문이에요.',
    inquiryQuestion: '송편을 보름달이 아닌 반달 모양으로 빚은 조상들의 마음에는 어떤 바람이 담겨 있을까요?',
    inquiryHint: '반달이 시간이 지나면 어떻게 변하는지 생각해 보세요.',
    imageUrl: BUILTIN_IMAGES.chuseokMakingSongpyeon,
    imageCaption: '온 가족이 마주 둘러앉아 웃으며 알록달록한 반달 모양 송편을 빚는 모습',
    images: [
      {
        url: BUILTIN_IMAGES.chuseokMakingSongpyeon,
        caption: '온 가족이 마주 둘러앉아 웃으며 알록달록한 반달 모양 송편을 빚는 모습',
      },
      {
        url: BUILTIN_IMAGES.chuseokHarvest,
        caption: '솔잎 위에 정성스레 쪄낸 알록달록한 송편과 추석 명절 풍경',
      },
    ],
    relatedIds: ['chuseok-overview', 'chuseok-charye', 'dongji-patjuk'],
  },
  {
    id: 'chuseok-ganggangsullae',
    title: '강강술래와 민속놀이',
    category: '추석',
    timing: '추석 밤',
    topicType: '전통 놀이',
    keywords: ['강강술래', '놀이', '민속놀이', '씨름', '줄다리기', '달빛', '노래', '원'],
    summary: '추석 밝은 보름달 아래 여럿이 손을 맞잡고 둥글게 돌며 노래하고 춤추는 전통 놀이예요.',
    explanation: [
      '강강술래는 추석날 밤에 밝은 보름달 아래 모여, 여러 사람이 손을 맞잡고 둥근 원을 그리며 빙글빙글 돌면서 노래를 부르는 놀이예요.',
      '앞소리꾼이 노래를 메기면 나머지 사람들이 “강강술래” 하고 후렴을 따라 부르며, 처음에는 느리게 걷다가 점점 빠르게 뛰며 흥겹게 춤을 추어요.',
      '추석에는 강강술래뿐만 아니라 힘과 기술을 겨루는 씨름, 마을 사람들이 편을 나누어 힘을 모으는 줄다리기 같은 놀이도 함께 즐겼답니다.',
    ],
    wisdom:
      '둥근 원 모양으로 손을 맞잡는 강강술래는 마을 사람들이 서로 차별 없이 하나가 되어 풍년을 축하하고 협동심을 기르는 소중한 문화였어요.',
    inquiryQuestion: '강강술래처럼 여럿이 손을 잡고 함께하는 놀이를 하면 어떤 점이 좋을까요?',
    inquiryHint: '혼자 놀 때와 친구들과 함께 놀 때의 기분을 비교해 보세요.',
    imageUrl: BUILTIN_IMAGES.chuseokGames,
    imageCaption: '보름달 아래 고운 한복을 입고 손을 맞잡아 강강술래를 추는 모습',
    relatedIds: ['chuseok-overview', 'chuseok-sossaum', 'chuseok-charye'],
  },
  {
    id: 'chuseok-sossaum',
    title: '추석 소싸움',
    category: '추석',
    timing: '추석 무렵',
    topicType: '전통 놀이 · 마을 잔치',
    keywords: ['소싸움', '소', '민속놀이', '추석', '마을', '잔치', '풍년', '응원'],
    summary: '추석을 맞아 마을 사람들이 모여 튼튼한 소들이 힘을 겨루는 모습을 보며 함께 즐기던 전통 놀이예요.',
    explanation: [
      '소싸움은 추수철인 추석 무렵에 여러 마을 사람들이 넓은 마당에 모여 각 마을을 대표하는 튼튼한 소들이 뿔을 맞대고 힘을 겨루는 전통 놀이예요.',
      '옛날 농사짓는 데 소는 가족처럼 소중하고 고마운 동물이었어요. 일 년 동안 열심히 일한 소들을 잘 먹이고 보살핀 뒤, 마을 잔치를 열어 소의 건강과 힘을 자랑했답니다.',
      '마을 사람들이 둥글게 모여 박수 치고 응원하면서 이웃끼리 더욱 가까워지고 풍년의 기쁨을 함께 나누었어요.',
    ],
    wisdom:
      '소싸움은 농사에 큰 도움을 주던 소를 아끼고 정성껏 돌보는 마음과, 추석 명절에 온 마을 사람들이 한데 어울려 화합하는 지혜가 담겨 있어요.',
    inquiryQuestion: '옛날 사람들은 왜 추석 명절에 마을 사람들이 다 함께 모여 소싸움을 즐겼을까요?',
    inquiryHint: '농사에서 소가 맡았던 역할과 마을 사람들의 기분을 함께 떠올려 보세요.',
    imageUrl: BUILTIN_IMAGES.chuseokBullWrestling,
    imageCaption: '단풍이 물든 가을날 온 마을 사람들이 둘러서서 응원하는 추석 소싸움 모습',
    relatedIds: ['chuseok-overview', 'chuseok-ganggangsullae'],
  },
  {
    id: 'chuseok-charye',
    title: '차례와 성묘',
    category: '추석',
    timing: '추석 아침',
    topicType: '명절 풍습',
    keywords: ['차례', '성묘', '벌초', '조상', '감사', '가족', '인사'],
    summary: '햇곡식과 과일로 상을 차려 조상님께 감사 인사를 드리고 산소를 돌보는 풍습이에요.',
    explanation: [
      '추석 아침에는 온 가족이 깨끗한 옷을 입고 정성스레 만든 송편과 햇과일, 나물 등을 상에 올려 조상님께 감사의 인사를 드리는데, 이것을 ‘차례’라고 해요.',
      '또 추석 전이나 추석 무렵에는 조상님이 계신 산소에 찾아가 여름 동안 무성하게 자란 풀을 베어 깨끗이 정리하는 ‘벌초’를 하고, 가족이 함께 인사를 드리는 ‘성묘’를 해요.',
      '차를 마시듯 간단하지만 정성을 다해 조상님을 기억하고 가족끼리 안부를 묻는 소중한 시간이에요.',
    ],
    wisdom:
      '오늘날 우리가 건강하게 지낼 수 있는 것을 조상님과 가족의 덕분으로 여기며, 뿌리를 잊지 않고 감사하는 마음을 배우는 풍습이에요.',
    inquiryQuestion: '추석에 가족들이 모여 차례와 성묘를 지내며 가장 중요하게 여긴 마음은 무엇일까요?',
    inquiryHint: '조상님과 가족을 대하는 태도를 떠올려 보세요.',
    imageUrl: BUILTIN_IMAGES.chuseokCharye,
    imageCaption: '추석 아침 온 가족이 모여 정성스레 차린 상 앞에서 차례를 지내는 모습',
    images: [
      {
        url: BUILTIN_IMAGES.chuseokCharye,
        caption: '추석 아침 온 가족이 모여 정성스레 차린 상 앞에서 차례를 지내는 모습',
      },
      {
        url: BUILTIN_IMAGES.chuseokSeongmyo,
        caption: '맑은 가을날 조상님의 산소를 찾아 정성껏 인사드리는 성묘 모습',
      },
    ],
    relatedIds: ['chuseok-overview', 'chuseok-songpyeon'],
  },
  {
    id: 'dongji-overview',
    title: '동지 (작은설)',
    category: '동지',
    timing: '양력 12월 21일~22일경',
    topicType: '24절기 · 겨울 풍습',
    keywords: ['동지', '작은설', '24절기', '겨울', '밤', '낮', '아세', '새해', '태양'],
    summary: '일 년 중 밤이 가장 길고 낮이 가장 짧은 날로, 옛사람들은 ‘작은설’이라 부르며 새해의 시작으로 여겼어요.',
    explanation: [
      '동지는 24절기 중 하나로, 보통 양력 12월 21일이나 22일 무렵에 찾아와요. 일 년 중에서 밤의 길이가 가장 길고, 낮의 길이가 가장 짧은 날이랍니다.',
      '하지만 동지가 지나면 낮의 길이가 조금씩 다시 길어지기 시작해요. 그래서 조상들은 태양이 다시 힘을 얻어 살아나는 날이라 생각하고, 동지를 ‘작은설(아세)’이라고 부르며 설날 다음으로 중요하게 여겼어요.',
      '동짓날 팥죽을 먹어야 진짜 나이를 한 살 더 먹는다는 재미있는 옛이야기도 전해져 내려와요.',
    ],
    wisdom:
      '가장 길고 추운 겨울밤 속에서도 곧 따뜻한 봄과 긴 낮이 돌아올 것이라는 희망을 품고 새해를 준비했던 조상들의 지혜가 담겨 있어요.',
    inquiryQuestion: '조상들은 왜 밤이 가장 긴 동지를 슬퍼하지 않고 오히려 ‘작은설’이라며 기쁘게 맞이했을까요?',
    inquiryHint: '동지가 지난 다음 날부터 낮의 길이가 어떻게 바뀌는지 생각해 보세요.',
    imageUrl: BUILTIN_IMAGES.dongjiNight,
    imageCaption: '가장 긴 겨울밤 끝에 떠오르는 붉은 여명과 눈 덮인 한옥 지붕',
    images: [
      {
        url: BUILTIN_IMAGES.dongjiNight,
        caption: '가장 긴 겨울밤 끝에 떠오르는 붉은 여명과 눈 덮인 한옥 지붕',
      },
      {
        url: BUILTIN_IMAGES.dongjiPatjukFamily,
        caption: '작은설 동짓날 온 가족이 둘러앉아 따뜻한 동지팥죽을 함께 먹는 모습',
      },
    ],
    relatedIds: ['dongji-patjuk', 'dongji-beoseon', 'dongji-calendar'],
  },
  {
    id: 'dongji-patjuk',
    title: '동지팥죽과 새알심',
    category: '동지',
    timing: '동짓날',
    topicType: '절기 음식',
    keywords: ['팥죽', '동지팥죽', '새알심', '팥', '붉은색', '나쁜 기운', '나이', '음식'],
    summary: '붉은 팥을 푹 고아 찹쌀로 빚은 동그란 새알심을 넣어 끓여, 온 가족과 이웃이 함께 나누어 먹던 동지의 대표 음식이에요.',
    explanation: [
      '동짓날에는 붉은 팥을 삶아 끓인 ‘동지팥죽’을 꼭 먹었어요. 팥죽 안에는 찹쌀가루를 동그랗게 빚어 만든 ‘새알심’을 넣는데, 진짜 새의 알처럼 생겨서 이런 이름이 붙었답니다.',
      '온 가족이 따뜻한 방에 둘러앉아 자기 나이 수만큼 새알심을 세어 넣은 팥죽을 호호 불며 맛있게 나누어 먹었어요.',
      '또 추운 겨울에 뜨거운 팥죽을 이웃집과도 나누어 먹으며 서로의 건강과 평안을 빌어주었답니다.',
    ],
    wisdom:
      '조상들은 팥의 붉은색이 나쁜 기운과 병을 물리친다고 믿었어요. 실제로 팥과 따뜻한 죽은 추운 겨울철 우리 몸의 기운을 돋워 주는 영양 음식이라는 지혜도 숨어 있답니다.',
    inquiryQuestion: '동짓날 팥죽을 가족, 이웃과 함께 나누어 먹었던 까닭은 무엇일까요?',
    inquiryHint: '나쁜 기운을 막아주는 뜻과 추운 겨울에 음식을 나누는 마음을 함께 생각해 보세요.',
    imageUrl: BUILTIN_IMAGES.dongjiPatjukFamily,
    imageCaption: '추운 겨울날 온 가족이 둘러앉아 따뜻한 동지팥죽을 함께 먹는 모습',
    images: [
      {
        url: BUILTIN_IMAGES.dongjiPatjukFamily,
        caption: '추운 겨울날 온 가족이 둘러앉아 따뜻한 동지팥죽을 함께 먹는 모습',
      },
      {
        url: BUILTIN_IMAGES.dongjiPatjuk,
        caption: '하얀 새알심이 동동 띄워진 김이 모락모락 나는 동지팥죽 그릇',
      },
    ],
    relatedIds: ['dongji-overview', 'dongji-beoseon', 'chuseok-songpyeon'],
  },
  {
    id: 'dongji-beoseon',
    title: '동지버선 선물하기',
    category: '동지',
    timing: '동짓날',
    topicType: '겨울 풍습',
    keywords: ['버선', '동지버선', '선물', '어른', '효도', '겨울', '따뜻함', '건강'],
    summary: '동짓날 며느리나 아랫사람이 어른들께 따뜻한 버선을 지어 선물하며 장수와 건강을 빌던 풍습이에요.',
    explanation: [
      '예전에는 동지가 되면 집안의 젊은 사람들이 할아버지, 할머니, 부모님 등 웃어른께 정성껏 만든 새 버선을 선물하는 풍습이 있었는데, 이를 ‘동지버선’이라고 불렀어요.',
      '동지부터는 날씨가 더욱 추워지고 낮이 길어지기 시작하므로, 어른들의 발을 따뜻하게 감싸 추운 겨울을 건강하게 보내시길 바라는 마음을 담은 것이에요.',
      '또한 길어지는 해처럼 어른들의 수명도 길어지기를 바라는 효도의 뜻도 담겨 있었답니다.',
    ],
    wisdom:
      '계절의 변화에 맞추어 어른들의 건강을 먼저 살피고, 정성이 담긴 작은 선물로 가족 간의 사랑을 표현했던 따뜻한 마음씨를 엿볼 수 있어요.',
    inquiryQuestion: '오늘날 내가 동짓날에 소중한 가족이나 친구에게 마음을 전한다면 어떤 선물을 하고 싶나요?',
    inquiryHint: '추운 겨울을 따뜻하게 보낼 수 있는 물건이나 마음을 떠올려 보세요.',
    imageUrl: BUILTIN_IMAGES.dongjiBeoseonGift,
    imageCaption: '동짓날 정성껏 수놓은 새 버선을 할아버지, 할머니께 감사한 마음으로 전하는 모습',
    images: [
      {
        url: BUILTIN_IMAGES.dongjiBeoseonGift,
        caption: '동짓날 정성껏 수놓은 새 버선을 할아버지, 할머니께 감사한 마음으로 전하는 모습',
      },
      {
        url: BUILTIN_IMAGES.dongjiNight,
        caption: '눈 내리는 겨울밤 따뜻한 등불이 켜진 한옥 모습',
      },
    ],
    relatedIds: ['dongji-overview', 'dongji-patjuk', 'dongji-calendar'],
  },
  {
    id: 'dongji-calendar',
    title: '동지 책력(달력) 나누기',
    category: '동지',
    timing: '동짓날',
    topicType: '새해 준비 풍습',
    keywords: ['달력', '책력', '새해', '선물', '농사', '24절기', '시간'],
    summary: '동짓날에는 다가올 새해의 달력(책력)을 이웃과 친척에게 나누어 주며 새해 계획을 세웠어요.',
    explanation: [
      '옛날에는 동지를 한 해가 새로 시작되는 작은설로 여겼기 때문에, 동짓날이 되면 다음 해의 날짜와 절기가 적힌 달력인 ‘책력’을 서로 주고받으며 선물했어요.',
      '‘하선동력(여름에는 부채, 겨울에는 달력)’이라는 말이 있을 정도로 동짓날 이웃과 친척에게 새 달력을 나누어 주는 것은 아주 소중한 풍습이었어요.',
      '사람들은 새 달력을 받아 보며 내년에는 언제 씨를 뿌리고 언제 모내기를 할지 농사 계획을 세웠답니다.',
    ],
    wisdom:
      '추운 겨울 한가운데에서 미리 다음 해의 계절 변화를 살펴보고 부지런히 내일을 준비했던 조상들의 계획적인 삶의 지혜가 담겨 있어요.',
    inquiryQuestion: '새 달력을 받으면 여러분은 새해에 꼭 해 보고 싶은 어떤 계획을 가장 먼저 적어 넣고 싶나요?',
    inquiryHint: '새 학년 준비, 배우고 싶은 것, 가족과 하고 싶은 일 등을 생각해 보세요.',
    imageUrl: BUILTIN_IMAGES.dongjiCalendarSharing,
    imageCaption: '동짓날 이웃끼리 반갑게 웃으며 새해 책력(달력)을 주고받는 모습',
    images: [
      {
        url: BUILTIN_IMAGES.dongjiCalendarSharing,
        caption: '동짓날 이웃끼리 반갑게 웃으며 새해 책력(달력)을 주고받는 모습',
      },
      {
        url: BUILTIN_IMAGES.dongjiNight,
        caption: '동지와 새해의 날짜를 알리는 전통 나무 패와 겨울 한옥 풍경',
      },
    ],
    relatedIds: ['dongji-overview', 'dongji-beoseon', 'chuseok-overview'],
  },
];
