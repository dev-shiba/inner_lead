import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './PortfolioDetail.css';

// Portfolio data with full content
const portfolioData = {
    'hanyang-erica': {
        title: '한양대 ERICA 생성형AI 특강',
        category: '기관 교육',
        date: '2025.12',
        location: '한양대학교 ERICA 컨벤션홀',
        participants: '200명',
        image: '/src/assets/portfolio/hanyang.png',
        result: '참여자 만족도 98%',
        tags: ['ChatGPT 활용', 'AI 리터러시', '실습 중심', '대규모 강연'],
        summary: '안산시 챗GPT 강사로서 한양대 ERICA 컨벤션홀에서 200명 규모의 생성형 AI 특강 진행',
        seoDescription: '한양대 ERICA에서 진행한 200명 규모 생성형AI 특강. 챗GPT 활용, AI 리터러시 교육 사례.',
        sections: [
            {
                title: '한양대 ERICA 컨벤션홀에서 시작된 깊은 집중',
                content: `안산시 챗GPT 강사로서 한양대 ERICA 컨벤션홀에 서는 순간, 이 강의가 단순한 기술 교육을 넘어 누군가의 일과 생각의 방향을 바꾸는 시간이 될 것임을 자연스럽게 느꼈습니다.

200명 가까운 참여자들이 보여준 깊은 집중과 배움의 열기는 생성형AI가 여전히 낯설면서도 꼭 알아야 한다는 시대적 흐름을 그대로 드러내고 있었습니다.

강의가 시작되자마자 공간 전체가 빠르게 하나의 흐름으로 모였습니다. 익숙하지 않은 생성형AI임에도 불구하고 수강생들은 열린 마음으로 화면을 바라보며 작은 변화의 가능성을 찾고 있었습니다.`
            },
            {
                title: '기술보다 먼저 짚어야 했던 AI 리터러시',
                content: `많은 분들이 챗GPT 활용법을 궁금해하지만, 그보다 앞서 필요한 것은 '기준'이라는 이야기를 먼저 나누었습니다. 기술이 뛰어나더라도 판단 기준이 없으면 잘못된 결정을 내릴 수 있기에, 정보 검증 루프와 비식별화 원칙을 실무 관점에서 설명했습니다.

이 순간 수강생들의 표정이 확연히 달라졌습니다. 단순히 "어떻게 쓰는가"가 아니라 "왜 이렇게 쓰여야 하는가"를 이해하기 시작한 겁니다.

AI 리터러시는 결국 스스로의 선택을 지키는 힘이라는 메시지가 자연스럽게 전달되었습니다.`
            },
            {
                title: '실습에서 느껴진 생성형AI의 진짜 가능성',
                content: `실습이 시작되자 분위기는 한층 생동감 있게 변했습니다. 이미지 초안 만들기, 사업계획서 구조 잡기, 블로그 글 흐름 설계까지 직접 체험해보며 기술이 주는 속도와 품질을 바로 확인하셨습니다.

뤼튼AI로 문서의 구조를 잡고 퍼플렉시티로 정보의 신뢰도를 높이는 과정은 많은 수강생에게 신선한 충격이었습니다.

미드저니와 SUNO 실습에서는 시각과 음성까지 단번에 결과물을 만드는 경험에 감탄이 이어졌습니다. 생성형AI가 단순한 도구가 아니라 '생각의 확장 장치'라는 사실을 함께 체감한 순간이었습니다.`
            },
            {
                title: '실무와 비즈니스 현장에서의 활용 가능성 확장',
                content: `시간이 지날수록 "이건 바로 제 업무에 쓸 수 있겠는데요?"라는 반응이 곳곳에서 들렸습니다. 특히 기획 관련 직무와 개인 비즈니스를 운영하는 분들이 큰 관심을 보였습니다.

블로그·유튜브 자동화 흐름을 설명할 때는 자리에서 바로 설정을 따라 하는 수강생들도 있을 정도였습니다.

생성형AI는 단순히 효율성을 높이는 수준을 넘어 새로운 일하는 방식을 열어준다는 점을 모두가 인정하는 분위기였습니다.`
            },
        ],
        closing: `기술은 도구일 뿐이지만, 그 도구를 어떻게 사용할지는 결국 우리 스스로 결정하는 일입니다. 오늘의 경험이 각자의 자리에서 더 나은 선택과 더 단단한 기준을 만들어가는 출발점이 되기를 진심으로 바랍니다.`
    },
    'suncheon-jeil': {
        title: '순천제일대학교 AI역량 강화 특강',
        category: '기관 교육',
        date: '2025.12',
        location: '순천제일대학교',
        participants: '교직원 전체',
        image: '/src/assets/portfolio/suncheon.png',
        result: '실무 적용률 85%',
        tags: ['교직원 교육', 'AI 역량 강화', '업무 자동화', '디지털 전환'],
        summary: '순천제일대학교 교직원 대상 AI역량 강화 특강으로 실무가 달라진 순간을 만들다',
        sections: [
            {
                title: '순천제일대학교에서의 특별한 시작',
                content: `순천제일대학교에서 진행된 이번 특강은 단순한 기술 강의가 아니라, 교직원분들의 일과 사고방식 전반에 변화를 가져다 줄 수 있는 시간이었습니다.

대학 행정의 디지털 전환이라는 큰 흐름 속에서, 생성형 AI를 어떻게 실무에 적용할 수 있는지 구체적인 방법론을 함께 탐구했습니다.`
            },
            {
                title: '교직원 맞춤형 AI 활용 전략',
                content: `대학 교직원들이 일상적으로 마주하는 업무 - 문서 작성, 보고서 정리, 학생 응대 등에 AI를 어떻게 활용할 수 있는지 실제 예시와 함께 진행했습니다.

특히 반복적인 행정 업무를 자동화하는 방법과, 더 창의적인 업무에 집중할 수 있는 환경을 만드는 전략을 중점적으로 다뤘습니다.`
            },
            {
                title: '실습을 통한 체감',
                content: `이론만으로는 부족합니다. 직접 ChatGPT를 활용해 공문 초안을 작성하고, 회의록을 정리하고, 학생 Q&A 템플릿을 만들어보는 실습을 진행했습니다.

"이렇게 빨리 될 줄 몰랐다", "당장 내일부터 쓸 수 있겠다"는 반응이 이어졌습니다.`
            },
        ],
        closing: `순천제일대학교 교직원분들의 열정과 배움에 대한 의지가 인상적이었습니다. AI는 우리의 일을 대체하는 것이 아니라, 더 가치 있는 일에 집중할 수 있게 도와주는 도구입니다.`
    },
    'changwon-convention': {
        title: '창원컨벤션센터 AI 역량강화 교육',
        category: '기업 교육',
        date: '2025.12',
        location: '창원컨벤션센터 대강당',
        participants: '임직원 전체',
        image: '/src/assets/portfolio/changwon.png',
        result: '업무 효율 40% 향상',
        tags: ['AI 역량강화', '생성형AI', '업무 자동화', 'PPT 자동화', '5시간 집중 교육'],
        summary: '창원컨벤션센터 임직원 대상 5시간 집중 AI 역량강화 교육으로 업무 효율을 높인 후기',
        sections: [
            {
                title: '강의 개요와 현장 분위기',
                content: `AI 역량강화 교육을 준비하며 가장 먼저 떠올랐던 질문은 "사람들이 진짜로 바꾸고 싶은 건 무엇일까"였습니다.

창원 컨벤션센터를 가득 채운 수많은 눈빛 속에는 단순히 기술을 배우고자 하는 마음이 아니라, 더 나은 일하는 방식을 찾고자 하는 간절함이 담겨 있었습니다.

창원 컨벤션센터 대강당은 아침부터 묵직한 집중감으로 가득했습니다. 임직원 전체가 참여하는 자리였지만 분위기는 단순한 교육 이상의 기대감으로 채워져 있었습니다.`
            },
            {
                title: 'AI 리터러시의 중요성 – 자동화보다 먼저 필요한 감각',
                content: `이번 강의에서 가장 강조한 것은 AI를 단순한 작업 도구로 바라보지 않는 관점이었습니다. AI 리터러시는 기능을 아는 것을 넘어 "왜 이런 결과가 나왔는지 이해하는 힘"에 가깝습니다.

보고서, 기획안, 이메일을 빠르게 만드는 것보다 중요한 건 결과물이 정확하고 타당한 기준에서 만들어졌는지 판단하는 능력이었습니다.

수강생들은 자동화보다 사고방식이 먼저라는 이야기에 깊이 공감했습니다.`
            },
            {
                title: '세션1~6 요약 – 실습으로 체감한 AI의 실무 적용력',
                content: `세션1에서는 생성형AI의 기본 개념과 실무 사례를 다루며, AI가 조직 안에서 어떤 방식으로 효율을 높일 수 있는지 이해하는 시간으로 시작했습니다.

세션2에서는 챗GPT의 맞춤설정과 프롬프트 작성법을 실습하며 "내가 직접 써보는 순간 이해된다"는 반응이 곳곳에서 나왔습니다.

세션3~4에서는 업무 문서 자동화와 마케팅 콘텐츠 제작 실습이 진행되었습니다. GPTs, 제미나이, 퍼플렉시티, Notebook LM을 비교하며 실제로 어떤 상황에서 어떤 도구를 써야 하는지를 배울 수 있어 만족도가 특히 높았습니다.

마지막 세션에서는 Genspark AI, Gamma AI, Napkin 등을 활용해 기획안이 자동으로 PPT로 전환되는 과정을 보자 현장에서 "이건 바로 쓰겠다"는 말이 나왔습니다.`
            },
            {
                title: '참여자들의 질문과 변화의 흐름',
                content: `강의를 시작할 때만 해도 많은 분들이 "AI를 잘 모르는데 따라갈 수 있을까요?"라고 질문했습니다. 하지만 실습이 진행될수록 질문의 무게가 달라지기 시작했습니다.

"이 기능을 제 업무의 어떤 흐름에 넣으면 좋을까요?", "우리 팀의 자료 구조에 맞게 자동화하려면 어떤 방향이 가장 효율적일까요?"와 같은 실질적인 질문이 이어졌습니다.

AI에 대해 막연하던 인식이 업무 활용법 중심으로 바뀌면서, 스스로 해결책을 설계하는 능력이 생겨나는 과정이 보였습니다.`
            },
            {
                title: '강사로서 느낀 점과 다음 단계',
                content: `5시간은 결코 짧지 않은 시간입니다. 그러나 이번 AI 역량강화 교육에서는 시간이 빠르게 지나갔고, 끝난 뒤에도 남아서 질문을 이어가는 분들이 많았습니다.

그만큼 AI에 대한 실질적인 갈증이 컸고, 동시에 배운 내용을 바로 적용하고 싶은 의지가 강했습니다.

앞으로 이 조직에는 실습 기반 심화 과정, 자동화 집중 워크숍, 부서별 특화된 AI 리터러시 교육이 필요하다는 확신을 얻었습니다.`
            },
        ],
        closing: `이번 AI 역량강화 교육은 기술을 단순히 익히는 데 그치지 않았습니다. 참여자들은 생성형AI가 가져다주는 속도와 편리함보다, 그것을 어떻게 이해하고 활용해야 자신에게 진짜 도움이 되는지를 스스로 발견해 갔습니다. 변화는 거창한 기술이 아니라 한 번의 작은 시도에서 시작됩니다.`
    },
    'savethechildren': {
        title: '세이브더칠드런 본부 업무활용 AI 강의',
        category: 'NGO 교육',
        date: '2025.11',
        location: '세이브더칠드런 본부 (마포 토정로)',
        participants: '24명 (부문장·팀장급 포함)',
        image: '/src/assets/portfolio/savethechildren.png',
        result: '강의 만족도 압도적',
        tags: ['NGO 특화', 'AI 리터러시', '사업계획서', '데이터 분석', '인권·아동보호'],
        summary: '국제구호개발 NGO 세이브더칠드런 본부에서 진행한 업무활용 생성형AI 강의',
        sections: [
            {
                title: '강의 개요 및 대상자 특징',
                content: `2025년 11월 5일 오전, 마포 토정로에 위치한 세이브더칠드런 본부. 이 날의 강의는 일반 기업이 아닌, 전 세계 아동을 위한 국제구호개발 NGO라는 점에서 출발부터 다를 수밖에 없었습니다.

24명의 직원이 참석했고, 그중에는 부문장과 팀장급 실무 의사결정자들도 포함되어 있었습니다.

참여자들은 모두 생성형AI에 대한 관심은 있었지만, 각자의 숙련도나 사용 경험은 제각각이었습니다. 그러나 그보다 중요한 것은 "이걸 우리 업무에 어떻게 연결할 수 있을까?"라는 진지한 태도였습니다.`
            },
            {
                title: 'AI 리터러시, NGO 실무에 왜 필요한가',
                content: `많은 기관들이 'AI는 알아야 하니까 배운다'는 식의 당위성에 머물러 있는 반면, 세이브더칠드런의 이번 강의는 훨씬 더 본질적인 질문에서 출발했습니다.

우리가 다루는 데이터는 아동의 삶과 직결되어 있습니다. 그렇기에 생성형AI의 결과물을 그대로 받아들이는 것보다, 의심하고 재해석하는 힘이 더 중요합니다.

AI 리터러시는 단순한 도구 학습이 아닙니다. 정보를 평가하고, 프롬프트를 설계하며, 결과물을 조직의 언어로 바꾸는 '해석력'입니다. 특히 인권, 정책, 구호 등의 맥락에서는 AI가 만들어낸 문장 하나가 공공의 신뢰에 영향을 미칠 수 있습니다.`
            },
            {
                title: '실무 중심 실습 – 데이터, 문서, 전략',
                content: `이번 강의는 이론이 아닌, 실무로 바로 연결되는 구조로 설계되었습니다. 먼저 아동권리 관련 정책 및 통계 자료를 어떻게 조사하고 요약할 수 있는지를 실습했습니다.

"유니세프의 2023년 보고서 내용을 요약해줘"라는 프롬프트부터, "그 내용을 한국 실정에 맞게 재구성해줘"까지 단계별로 훈련했습니다.

이어 '사업계획서 작성 시 생성형AI를 어떻게 협업 파트너로 쓸 수 있을까'에 대해 구체적인 예시를 들었습니다. 기획안 초안을 생성하고, 예산안 관련 데이터 요약, 로직 모델 구조 설계 등에서 챗GPT는 마치 또 하나의 팀원처럼 작동했습니다.`
            },
            {
                title: '수강생 반응 – 기능에서 가치로의 전환',
                content: `처음에는 단순히 '문서작성이 쉬워진다'는 수준에서 AI를 바라보던 수강생들이, 시간이 갈수록 질문의 결이 바뀌었습니다.

"이 데이터는 누구 기준의 것이죠?", "이렇게 만든 자료를 어떻게 크로스체크해야 하죠?"라는 질문들이 오갔고, 이는 단순한 기능을 넘어선 사고의 전환이 이루어지고 있다는 증거였습니다.

특히 팀장급 참석자들의 반응은 인상 깊었습니다. "우리 팀 내부에서 이 수준의 리터러시를 확보하면 보고서 작업 속도도 달라질 뿐 아니라, 자료에 대한 이해도도 깊어질 것 같다"는 피드백이 있었습니다.`
            },
            {
                title: '질문과 몰입의 흐름 – 침묵 없는 강의',
                content: `1시간 30분이라는 짧지 않은 시간이었지만, 현장은 끝까지 집중과 몰입이 유지되었습니다.

특히 인상 깊었던 것은 실습 시간에 거의 모든 참여자가 각자의 노트북으로 프롬프트 실험을 해보며 질문을 이어갔다는 점입니다.

"우리 조직에 이걸 진짜 적용하려면 어떤 구조가 더 적합할까?"라는 고민으로 이어졌습니다. 수업을 마치고도 몇몇 팀장님은 남아 추가적인 질문을 하셨고, 내부 부서별로 어떻게 확장 교육이 가능할지에 대한 제안도 주셨습니다.`
            },
        ],
        closing: `세이브더칠드런에서의 이번 생성형AI 강의는 단순히 기능을 익히는 자리가 아니었습니다. AI를 통해 '무엇을 할 수 있는가'보다, 우리는 어떤 가치를 지켜야 하는가라는 질문이 더 중심에 있었습니다. 기술은 차갑지만, 우리가 사용하는 방식은 따뜻해야 합니다. 그리고 그것이 바로 AI 리터러시의 본질입니다.`
    },
    'cheongju': {
        title: '청주시 챗GPT 강의 – AI 300% 활용법',
        category: '지역 교육',
        date: '2025.11',
        location: '청주 OSCO 대강당',
        participants: '약 300명',
        image: '/src/assets/portfolio/cheongju.png',
        result: 'AI 리터러시 실천 출발점',
        tags: ['대규모 강연', 'AI 리터러시', '실습 중심', '세대 통합'],
        summary: '청주시에서 진행한 300명 규모 생성형AI 활용 강의, 기술이 아닌 삶의 기준을 세우는 시간',
        sections: [
            {
                title: '강의 개요 및 현장 분위기',
                content: `청주 OSCO 대강당은 강의 시작 전부터 묘한 긴장감과 기대가 동시에 흐르고 있었습니다. 청주시 챗GPT 강사로서 무대에 올랐을 때 가장 먼저 느낀 것은, 20대부터 시니어까지 세대가 다양해도 배움의 온도는 같다는 점이었습니다.

생성형AI라는 주제가 익숙하지 않을 수 있었지만, 300명 가까운 분들이 정면을 바라보며 질문을 준비하는 모습은 이 강의의 분위기를 단번에 보여주었습니다.

1시간 30분이라는 시간 동안 누구도 시계를 보지 않았다는 사실만으로도 몰입의 농도가 얼마나 깊었는지를 알 수 있었습니다.`
            },
            {
                title: 'AI 리터러시의 본질 – 이번 강의가 강조한 메시지',
                content: `이번 강의에서 가장 먼저 이야기한 것은 "AI를 잘 쓰는 사람"이 아니라 "AI를 올바르게 이해하는 사람"이 되어야 한다는 점이었습니다.

자동화와 생산성 향상은 생성형AI가 줄 수 있는 혜택의 일부일 뿐, 진짜 핵심은 판단력과 질문력이라는 메시지를 전달했습니다.

AI 리터러시는 결국 '내가 AI를 어떻게 바라보는가'의 문제이며, 스스로 사고할 수 있는 능력을 잃지 않는 것이 가장 중요하다고 설명했습니다.

수강생들은 단순한 기술 설명보다 이런 관점의 이야기에 더 크게 고개를 끄덕였습니다. AI에 대한 두려움이 '이해'로 바뀌는 순간이 눈빛에서 보였습니다.`
            },
            {
                title: '생성형AI 실습 – 실무와 개인 작업에 바로 연결되는 적용법',
                content: `강의 중반부터는 실제 실습을 통해 AI 리터러시가 어떻게 현실적인 힘이 되는지를 보여주었습니다.

챗GPT를 활용해 이미지 생성, 블로그 초안 구성, 사업계획서 틀 만들기 등을 실습하자 많은 분들이 "이런 식으로 연결되는지 처음 알았다"고 반응했습니다.

이어 뤼튼 AI로 문서 흐름을 정리하고, 퍼플렉시티로 정보의 신뢰도를 점검하는 과정을 보여주자 실무에서 바로 적용할 수 있다는 자신감이 생긴 듯했습니다.

미드저니를 통한 이미지 제작과 SUNO를 활용한 음성 콘텐츠 시연에서도 참여자들의 반응은 매우 뜨거웠습니다.`
            },
            {
                title: '수강생들의 반응과 질문의 깊이',
                content: `처음에는 "AI로 이런 것도 되나요?"라는 기능 중심 질문이 많았지만, 후반부에 들어서면서 질문이 확연히 달라졌습니다.

"AI가 만든 정보의 신뢰도는 어떻게 검증하나요?", "내 비즈니스에 어떻게 연결해야 효율적일까요?"처럼 사고 중심의 질문으로 확장되었습니다.

실제로 50대 자영업자분은 "막연하던 AI가 이제는 방향을 줄 수 있다는 생각이 든다"고 말씀하셨습니다.

대학생 수강생들은 "시간 관리에 엄청난 무기가 될 것 같다"며 실습을 멈추지 않았습니다.`
            },
            {
                title: '강사로서의 성찰과 다음 단계',
                content: `이번 강의를 통해 느낀 건, AI는 결국 '기술의 문제'가 아니라 '관점의 문제'라는 사실을 더 많은 분들이 체감하고 있다는 점이었습니다.

강의가 끝난 후에도 여러 수강생이 남아 각자의 상황에 맞는 활용법을 물어보며, AI 리터러시를 진지하게 받아들이고자 하는 의지를 보였습니다.

다음 강의에서는 실전 중심의 자동화 과정, 콘텐츠 제작 흐름, 비즈니스별 프롬프트 전략 등 더 깊이 있는 워크숍을 계획하고 있습니다.`
            },
        ],
        closing: `이번 청주 강의는 기술을 배우는 시간이 아니라, 기술을 통해 삶의 기준을 다시 세우는 시간이었습니다. 생성형AI가 빠르게 확산되고 있지만, 우리가 그 흐름을 따라가기 위해 필요한 것은 더 많은 도구가 아니라 더 정확한 시선이라는 사실을 수강생들과 함께 확인할 수 있었습니다. 기술은 앞으로도 계속 변하겠지만, 스스로 판단하고 선택하는 힘은 시간이 지날수록 더 중요한 자산이 될 것입니다.`
    }
};

export default function PortfolioDetail() {
    const { id } = useParams();
    const data = portfolioData[id];

    if (!data) {
        return (
            <main className="portfolio-detail-page">
                <div className="container">
                    <div className="not-found">
                        <h1>포트폴리오를 찾을 수 없습니다</h1>
                        <Link to="/portfolio" className="btn btn-primary">목록으로 돌아가기</Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="portfolio-detail-page">
            {/* Dynamic SEO Meta Tags */}
            <Helmet>
                <title>{data.title} | 이너리드 포트폴리오</title>
                <meta name="description" content={data.seoDescription || data.summary} />
                <meta name="keywords" content={`${data.tags.join(', ')}, 생성형AI 교육, 챗GPT 강사`} />
                <link rel="canonical" href={`https://innerlead.kr/portfolio/${id}`} />

                {/* Open Graph for Kakao, Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`${data.title} | 이너리드`} />
                <meta property="og:description" content={data.seoDescription || data.summary} />
                <meta property="og:image" content={`https://innerlead.kr${data.image}`} />
                <meta property="og:url" content={`https://innerlead.kr/portfolio/${id}`} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${data.title} | 이너리드`} />
                <meta name="twitter:description" content={data.seoDescription || data.summary} />
                <meta name="twitter:image" content={`https://innerlead.kr${data.image}`} />
            </Helmet>

            {/* Hero with Side-by-Side Layout */}
            <section className="detail-hero">
                <div className="container">
                    <Link to="/portfolio" className="back-link">
                        ← 포트폴리오 목록
                    </Link>

                    <div className="detail-hero-grid">
                        {/* Left: Image */}
                        <div className="detail-image-wrapper">
                            <img src={data.image} alt={data.title} className="detail-image" />
                        </div>

                        {/* Right: Info */}
                        <div className="detail-info">
                            <span className="detail-category">{data.category}</span>
                            <h1 className="detail-title">{data.title}</h1>
                            <p className="detail-summary">{data.summary}</p>

                            <div className="detail-meta">
                                <div className="meta-item">
                                    <span className="meta-label">일시</span>
                                    <span className="meta-value">{data.date}</span>
                                </div>
                                <div className="meta-item">
                                    <span className="meta-label">장소</span>
                                    <span className="meta-value">{data.location}</span>
                                </div>
                                <div className="meta-item">
                                    <span className="meta-label">참여인원</span>
                                    <span className="meta-value">{data.participants}</span>
                                </div>
                                <div className="meta-item highlight">
                                    <span className="meta-label">성과</span>
                                    <span className="meta-value">{data.result}</span>
                                </div>
                            </div>

                            <div className="detail-tags">
                                {data.tags.map((tag, i) => (
                                    <span key={i} className="detail-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="detail-content">
                <div className="container">
                    {data.sections.map((section, index) => (
                        <div key={index} className="content-section">
                            <h2 className="section-heading">
                                <span className="section-number">{index + 1}</span>
                                {section.title}
                            </h2>
                            <div className="section-body">
                                {section.content.split('\n\n').map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Closing */}
                    <div className="content-closing">
                        <blockquote>{data.closing}</blockquote>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="detail-cta">
                <div className="container">
                    <h3>더 많은 교육 사례가 궁금하신가요?</h3>
                    <p>다양한 기업, 기관의 AI 교육 사례를 확인하세요</p>
                    <Link to="/portfolio" className="btn btn-primary">포트폴리오 보기</Link>
                </div>
            </section>
        </main>
    );
}
