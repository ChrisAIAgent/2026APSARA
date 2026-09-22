import './styles.css';

const translations = {
  zh: {
    pageTitle: '国际AI智能体技术论坛｜路线指引图',
    pageDescription: '参加国际AI智能体技术论坛 International AI Agent Tech Forum 的路线指引图：从网约车落客点前往国博一期1层102C。',
    brandAlt: 'APSARA 云栖大会',
    brandAria: '返回页面顶部',
    pageNav: '页面导航',
    languageSwitch: '语言切换',
    navRoute: '路线',
    navOverview: '总览',
    navOfficial: '官方指南',
    onsite: '现场引导',
    heroEyebrow: '2026 云栖大会 · 国际AI智能体技术论坛',
    heroTitle: '参加国际AI智能体技术论坛<br><span>International AI Agent Tech Forum</span><br>引导图',
    heroGuideLabel: '路线引导',
    heroLead: '从网约车落客点出发，前往国博一期1层102C。',
    heroVenueLabel: '地点',
    heroVenue: '国博一期1层102C',
    heroStartLabel: '开始时间',
    heroStart: '2026年9月23日 | 14:00–16:25',
    heroDropoffLabel: '打车导航点',
    heroDropoff: '杭州国博一期网约车落客点',
    heroDetailsAria: '论坛信息',
    startGuide: '开始引导',
    copyDropoff: '复制落客点名称',
    sourceNote: '路线信息已按云栖大会官方参会指南核对',
    visualAria: '一期落客点与签到处官方示意图',
    officialOverview: '官方示意',
    overviewAlt: '官方示意图：国博一期网约车落客点、一期签到处和杭州国际博览中心一期',
    mapCaption: '官方落客 / 签到示意',
    viewSource: '查看来源 ↗',
    destinationPin: '1F · 102C',
    quickFactsAria: '目的地信息',
    factDestinationLabel: '目的地',
    phase1Floor: '国博一期 · 3F',
    hallC: '大宴会厅 C',
    factFirstLabel: '第一确认点',
    phase1Checkin: '一期签到处',
    secondFloor: '官方引导入口在二层',
    factImportantLabel: '重要提示',
    identifyPhase1: '认准“国博一期”',
    onsiteDirection: '现场以导视和工作人员为准',
    routeEyebrow: '跟着现场导视',
    routeTitle: '四个确认点，走到宴会厅 C',
    confirmed: '已确认',
    step1Kicker: 'START / 下车',
    step1Title: '从落客点到 2F 入口',
    step1Body: '确认在一期网约车落客点下车，沿场馆入口方向前行，找到观光电梯 AB 区入口，进入一期并前往 2F。',
    photoDropoff: '下车点实景',
    photoGalleryHint: '按照片顺序向下查看',
    photoPending: '待补充客户现场照片',
    mapPlanLabel: '路线示意',
    mapFloorPlanLabel: '2F 平面图',
    mapHallPlanLabel: '3F 平面图',
    mapPlaceholder: '落点示意 · 待替换',
    mapPoint: '落点',
    mapNext: '下一步',
    mapDropoffTitle: '一期网约车落客点',
    mapDropoffNext: '一期入口方向',
    mapDropoffAria: '一期网约车落客点示意平面图，落点已标记',
    mapDropoffVersion: '一期落客点图 · V2',
    mapDropoffImageAlt: '简化的一期网约车落客点位置图，突出网约车落客点和杭州国际博览中心一期',
    checkDropoff: '我已到达 2F 入口',
    step2Kicker: 'CHECK IN / 签到安检',
    step2Title: '2F 完成签到、安检并前往 3F',
    step2Body: '到达 2F 后左转，沿通道前往一期签到处；出示门票扫码完成安检，进门后按 Logo 墙和蓝色地贴指引，找到上行扶梯前往 3F。',
    photoCheckin: '2F 签到与上楼路径',
    mapCheckinTitle: '一期签到处',
    mapCheckinNext: '签到',
    mapCheckinAria: '一期签到处路线示意图，签到点已标记',
    mapSecondFloorTitle: '2F 路线与上楼点',
    mapSecondFloorNext: '上行扶梯 → 3F',
    mapSecondFloorAria: '2F 平面图，前往签到处和上行扶梯的路线已标记',
    mapSecondFloorImageAlt: '2F 平面图，前往签到处和上行扶梯的路线已标记',
    checkCheckin: '我已完成签到并找到上行扶梯',
    step3Kicker: 'FOLLOW THE BLUE ROUTE / 沿蓝色路线',
    step3Title: '3F 沿蓝色地贴前往大宴会厅 C',
    step3Body: '出扶梯后直行，找到“大宴会厅 A-D”蓝色地贴，依照 3F 地标转向，沿蓝色路线前往大宴会厅 C。',
    photoFloor: '3F 前往宴会厅 C 路径',
    mapFloorTitle: '3F 路线至大宴会厅 C',
    mapFloorNext: '沿绿色路线前进',
    mapFloorAria: '3F 平面图，前往大宴会厅 C 的路线和到达点已标记',
    mapFloorImageAlt: '3F 平面图，绿色路线通往大宴会厅 C',
    checkFloor: '我已找到大宴会厅 C 方向',
    step4Kicker: 'ARRIVAL / 到达',
    step4Title: '到达大宴会厅 C',
    step4Body: '看到大宴会厅 C 入口后，沿蓝色地贴进入厅内。官网日程中的标准地点写法是：<strong>国博一期-3F-大宴会厅C</strong>。',
    photoHall: '大宴会厅 C 到达现场',
    mapHallTitle: '大宴会厅 C',
    mapHallNext: '到达点',
    mapHallAria: '3F 平面图，大宴会厅 C 到达点已标记',
    mapHallImageAlt: '3F 平面图，大宴会厅 C 到达点已标记',
    checkHall: '我已到达大宴会厅 C',
    dropoffPhoto01: '下车点：面向一期场馆入口',
    dropoffPhoto02: '沿落客区路缘向入口方向前行',
    dropoffPhoto03: '找到观光电梯 AB 区入口',
    dropoffPhoto04: '进入大厅后，找到前方扶梯',
    dropoffPhoto05: '到达 2F 后左转',
    dropoffPhoto06: '直行至路口，再左转',
    dropoffPhoto07: '左转后直行，看到一期签到处入口',
    dropoffPhoto08: '出示门票扫码，进入签到处安检',
    dropoffPhoto09: '进门后左转',
    dropoffPhoto10: '看到 Logo 墙后右转',
    dropoffPhoto11: '找到上行扶梯，前往 3F',
    route3fPhoto01: '到达 3F 后出扶梯直行',
    route3fPhoto02: '沿蓝色路线前往大宴会厅 A-D',
    route3fPhoto03: '跟随 3F 地标直行后右转',
    route3fPhoto04: '直行，宴会厅区域在左侧',
    route3fPhoto05: '左转进入大宴会厅区域',
    route3fPhoto06: '看到大宴会厅 C 入口',
    route3fPhoto07: '进入大宴会厅 C',
    rememberEyebrow: '记住这一件事',
    mapTitle: '先到一期，再上三楼',
    mapBody: '官方示意图同时标注了一期网约车落客点、一期签到处和杭州国际博览中心一期。到达后只要先认准一期入口，再按楼层导视走即可。',
    copyGaode: '复制高德搜索名称',
    officialGuide: '查看官方参会指南 ↗',
    mapAlt: '云栖大会官方一期与二期交通、签到点示意图',
    mapLargeCaption: '官方参会指南示意图 · 现场导视可能根据活动当日调整',
    noticeAria: '现场提示',
    noticeTitle: '现场提示',
    noticeBody: '大会入场需携带注册时使用的身份证件原件；最终路线请以当天导视牌和工作人员指引为准。',
    footerPath: '一期网约车落客点 → 一期签到处 → 3F → 大宴会厅 C',
    officialAgenda: '官方日程 ↗',
    officialSite: '云栖大会官网 ↗',
    copied: '已复制，可在高德地图中搜索',
    copyFallback: '请手动搜索：',
  },
  en: {
    pageTitle: 'International AI Agent Tech Forum | Route Guide',
    pageDescription: 'Route guide for the International AI Agent Tech Forum: from the ride-hailing drop-off point to HIEC Phase I, 1st Floor, 102C.',
    brandAlt: 'APSARA Conference',
    brandAria: 'Back to top',
    pageNav: 'Page navigation',
    languageSwitch: 'Language switcher',
    navRoute: 'Route',
    navOverview: 'Overview',
    navOfficial: 'Official guide',
    onsite: 'ON-SITE GUIDE',
    heroEyebrow: '2026 APSARA · INTERNATIONAL AI AGENT TECH FORUM',
    heroTitle: 'International AI Agent Tech Forum<br><span>Route guide</span>',
    heroGuideLabel: 'WAYFINDING GUIDE',
    heroLead: 'From the ride-hailing drop-off point to HIEC Phase I, 1st Floor, 102C.',
    heroVenueLabel: 'VENUE',
    heroVenue: 'HIEC Phase I, 1st Floor, 102C',
    heroStartLabel: 'START TIME',
    heroStart: 'Sep 23, 2026 | 14:00–16:25',
    heroDropoffLabel: 'RIDE-HAILING DESTINATION',
    heroDropoff: 'Hangzhou International Expo Centre Phase 1 ride-hailing drop-off',
    heroDetailsAria: 'Forum information',
    startGuide: 'Start guide',
    copyDropoff: 'Copy drop-off name',
    sourceNote: 'Route details checked against the official APSARA Conference attendee guide',
    visualAria: 'Official overview of the Phase 1 drop-off point and check-in entrance',
    officialOverview: 'OFFICIAL OVERVIEW',
    overviewAlt: 'Official overview showing the Phase 1 ride-hailing drop-off point, check-in entrance and Hangzhou International Expo Centre Phase 1',
    mapCaption: 'Official drop-off / check-in overview',
    viewSource: 'View source ↗',
    destinationPin: '1F · 102C',
    quickFactsAria: 'Destination information',
    factDestinationLabel: 'DESTINATION',
    phase1Floor: 'PHASE 1 · 3F',
    hallC: 'GRAND BANQUET HALL C',
    factFirstLabel: 'FIRST CHECKPOINT',
    phase1Checkin: 'PHASE 1 CHECK-IN',
    secondFloor: 'Official entrance is on Level 2',
    factImportantLabel: 'IMPORTANT',
    identifyPhase1: 'Look for “Phase 1”',
    onsiteDirection: 'Follow on-site signs and staff',
    routeEyebrow: 'FOLLOW THE SIGNS',
    routeTitle: 'Four checkpoints to Hall C',
    confirmed: 'confirmed',
    step1Kicker: 'START / GET OUT',
    step1Title: 'From the drop-off point to the Level 2 entrance',
    step1Body: 'Confirm that you are at the Phase 1 ride-hailing drop-off point. Follow the venue entrance signs, find the sightseeing elevator AB entrance and continue to Level 2.',
    photoDropoff: 'Drop-off photo',
    photoGalleryHint: 'Follow the sequence from top to bottom',
    photoPending: 'Client photo coming soon',
    mapPlanLabel: 'ROUTE SCHEMATIC',
    mapFloorPlanLabel: 'LEVEL 2 FLOOR PLAN',
    mapHallPlanLabel: '3F FLOOR PLAN',
    mapPlaceholder: 'SCHEMATIC · REPLACE LATER',
    mapPoint: 'POINT',
    mapNext: 'NEXT',
    mapDropoffTitle: 'Phase 1 drop-off',
    mapDropoffNext: 'Phase 1 entrance',
    mapDropoffAria: 'Schematic floor map of the Phase 1 ride-hailing drop-off point',
    mapDropoffVersion: 'PHASE 1 DROP-OFF · V2',
    mapDropoffImageAlt: 'Simplified Phase 1 drop-off location map highlighting the ride-hailing drop-off point and Hangzhou International Expo Centre Phase 1',
    checkDropoff: 'I reached the Level 2 entrance',
    step2Kicker: 'CHECK IN / SECURITY',
    step2Title: 'Check in on Level 2, then go to Level 3',
    step2Body: 'At Level 2, turn left and follow the corridor to Phase 1 check-in. Scan your ticket to pass security, then follow the logo wall and blue floor route to the up escalator for Level 3.',
    photoCheckin: 'Level 2 check-in and ascent route',
    mapCheckinTitle: 'Phase 1 check-in',
    mapCheckinNext: 'CHECK IN',
    mapCheckinAria: 'Route schematic to Phase 1 check-in with the check-in point marked',
    mapSecondFloorTitle: 'Level 2 route and escalator',
    mapSecondFloorNext: 'Escalator → Level 3',
    mapSecondFloorAria: 'Level 2 floor plan with the route to check-in and the up escalator marked',
    mapSecondFloorImageAlt: 'Level 2 floor plan highlighting the route to check-in and the up escalator',
    checkCheckin: 'I completed check-in and found the up escalator',
    step3Kicker: 'FOLLOW THE BLUE ROUTE',
    step3Title: 'Follow the blue route on Level 3 to Grand Banquet Hall C',
    step3Body: 'Walk straight after leaving the escalator, find the blue “Grand Banquet Hall A-D” floor route, then follow the Level 3 markers toward Grand Banquet Hall C.',
    photoFloor: 'Level 3 route to Hall C',
    mapFloorTitle: 'Level 3 route to Grand Banquet Hall C',
    mapFloorNext: 'Follow the green route',
    mapFloorAria: 'Level 3 floor plan with the route to and arrival point for Grand Banquet Hall C marked',
    mapFloorImageAlt: 'Level 3 floor plan highlighting the green route to Grand Banquet Hall C',
    checkFloor: 'I found the Grand Banquet Hall C route',
    step4Kicker: 'ARRIVAL / YOU ARE HERE',
    step4Title: 'Arrive at Grand Banquet Hall C',
    step4Body: 'When you see the Grand Banquet Hall C entrance, follow the blue floor route into the hall. The official agenda location is: <strong>Phase 1-3F-Grand Banquet Hall C</strong>.',
    photoHall: 'Grand Banquet Hall C arrival',
    mapHallTitle: 'Grand Banquet Hall C',
    mapHallNext: 'ARRIVAL POINT',
    mapHallAria: '3F floor plan with the route to and arrival point for Grand Banquet Hall C marked',
    mapHallImageAlt: '3F floor plan highlighting the route to and arrival point for Grand Banquet Hall C',
    checkHall: 'I arrived at Grand Banquet Hall C',
    dropoffPhoto01: 'Drop-off point: face the Phase 1 venue entrance',
    dropoffPhoto02: 'Follow the curb toward the venue entrance',
    dropoffPhoto03: 'Find the sightseeing elevator AB entrance',
    dropoffPhoto04: 'Enter the lobby and find the escalator ahead',
    dropoffPhoto05: 'Turn left after reaching Level 2',
    dropoffPhoto06: 'Walk straight to the junction, then turn left',
    dropoffPhoto07: 'Walk straight to the Phase 1 check-in entrance',
    dropoffPhoto08: 'Scan your ticket and pass security',
    dropoffPhoto09: 'Turn left after entering',
    dropoffPhoto10: 'Turn right at the APSARA logo wall',
    dropoffPhoto11: 'Find the up escalator to Level 3',
    route3fPhoto01: 'Walk straight after reaching Level 3',
    route3fPhoto02: 'Follow the blue route to Grand Banquet Hall A-D',
    route3fPhoto03: 'Follow the Level 3 marker, then turn right',
    route3fPhoto04: 'Walk straight; the banquet halls are on the left',
    route3fPhoto05: 'Turn left into the banquet hall area',
    route3fPhoto06: 'Grand Banquet Hall C entrance',
    route3fPhoto07: 'You have arrived at Grand Banquet Hall C',
    rememberEyebrow: 'ONE THING TO REMEMBER',
    mapTitle: 'Phase 1 first. Then go up to 3F.',
    mapBody: 'The official overview marks the Phase 1 ride-hailing drop-off, Phase 1 check-in and the Phase 1 venue. Once you arrive, identify the Phase 1 entrance first, then follow the floor signs.',
    copyGaode: 'Copy Amap search name',
    officialGuide: 'Open official attendee guide ↗',
    mapAlt: 'Official APSARA Conference traffic and check-in overview for Phase 1 and Phase 2',
    mapLargeCaption: 'Official attendee-guide overview · On-site signage may change on the event day',
    noticeAria: 'On-site note',
    noticeTitle: 'ON-SITE NOTE',
    noticeBody: 'Bring the original ID document used for registration. On the event day, follow the latest signs and staff instructions.',
    footerPath: 'Phase 1 drop-off → Phase 1 check-in → 3F → Grand Banquet Hall C',
    officialAgenda: 'Official agenda ↗',
    officialSite: 'APSARA Conference website ↗',
    copied: 'Copied — search this name in Amap',
    copyFallback: 'Search manually: ',
  },
};

const languageKey = 'yunqi-phase1-guide-language';
const progressKey = 'yunqi-phase1-guide-progress';
const toast = document.querySelector('.toast');
const copyButtons = document.querySelectorAll('[data-copy]');
const languageButtons = document.querySelectorAll('[data-language]');
const checkpoints = [...document.querySelectorAll('[data-checkpoint]')];
const progressFill = document.querySelector('.progress-fill');
const progressCount = document.querySelector('[data-progress-count]');

function getStoredValue(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function setStoredValue(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Private browsing or blocked storage should not disable the guide.
  }
}

const systemLanguage = (navigator.language || '').toLowerCase().startsWith('zh') ? 'zh' : 'en';
let currentLanguage = ['zh', 'en'].includes(getStoredValue(languageKey))
  ? getStoredValue(languageKey)
  : systemLanguage;

function currentCopy(key) {
  return translations[currentLanguage][key] || translations.zh[key] || key;
}

function applyLanguage(language) {
  currentLanguage = language;
  const copy = translations[language];
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.title = copy.pageTitle;
  document.querySelector('meta[name="description"]').setAttribute('content', copy.pageDescription);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const value = copy[element.dataset.i18nHtml];
    if (value !== undefined) element.innerHTML = value;
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    const value = copy[element.dataset.i18nAlt];
    if (value !== undefined) element.setAttribute('alt', value);
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const value = copy[element.dataset.i18nAriaLabel];
    if (value !== undefined) element.setAttribute('aria-label', value);
  });

  languageButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');
  toast.setAttribute('aria-hidden', 'false');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove('is-visible');
    toast.setAttribute('aria-hidden', 'true');
  }, 2400);
}

async function copyText(value) {
  try {
    await navigator.clipboard.writeText(value);
    showToast(currentCopy('copied'));
  } catch {
    showToast(`${currentCopy('copyFallback')}${value}`);
  }
}

copyButtons.forEach((button) => {
  button.addEventListener('click', () => copyText(button.dataset.copy));
});

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const language = button.dataset.language;
    setStoredValue(languageKey, language);
    applyLanguage(language);
  });
});

function readProgress() {
  try {
    return JSON.parse(getStoredValue(progressKey) || '{}');
  } catch {
    return {};
  }
}

function writeProgress(progress) {
  setStoredValue(progressKey, JSON.stringify(progress));
}

function updateProgress() {
  const completed = checkpoints.filter((input) => input.checked).length;
  const percentage = (completed / checkpoints.length) * 100;
  progressFill.style.width = `${percentage}%`;
  progressCount.textContent = `${completed} / ${checkpoints.length}`;

  checkpoints.forEach((input) => {
    const step = input.closest('.route-step');
    step.classList.toggle('is-complete', input.checked);
  });
}

const savedProgress = readProgress();
checkpoints.forEach((input) => {
  input.checked = Boolean(savedProgress[input.dataset.checkpoint]);
  input.addEventListener('change', () => {
    const nextProgress = readProgress();
    nextProgress[input.dataset.checkpoint] = input.checked;
    writeProgress(nextProgress);
    updateProgress();
  });
});

applyLanguage(currentLanguage);
updateProgress();
