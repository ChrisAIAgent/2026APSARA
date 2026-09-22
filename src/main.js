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
    phase1Floor: '国博一期 · 1层',
    hallC: '102C',
    factFirstLabel: '第一确认点',
    phase1Checkin: '一期签到处',
    secondFloor: '官方引导入口在二层',
    factImportantLabel: '重要提示',
    identifyPhase1: '认准“国博一期”',
    onsiteDirection: '现场以导视和工作人员为准',
    routeEyebrow: '跟着现场导视',
    routeTitle: '四个确认点，走到 102C',
    confirmed: '已确认',
    step1Kicker: 'START / 下车',
    step1Title: '从落客点到 2F 入口',
    step1Body: '确认在一期网约车落客点下车，沿场馆入口方向前行，找到观光电梯 AB 区入口，进入一期并前往 2F。',
    photoDropoff: '下车点实景',
    photoGalleryHint: '按照片顺序向下查看',
    photoPending: '待补充客户现场照片',
    mapPlanLabel: '路线示意',
    mapFloorPlanLabel: '2F 平面图',
    mapPlaceholder: '落点示意 · 待替换',
    mapPoint: '落点',
    mapNext: '下一步',
    mapDropoffTitle: '一期网约车落客点',
    mapDropoffNext: '一期入口方向',
    mapDropoffAria: '一期网约车落客点示意平面图，落点已标记',
    mapDropoffVersion: '一期落客点图 · V2',
    mapDropoffImageAlt: '简化的一期网约车落客点位置图，突出网约车落客点和杭州国际博览中心一期',
    checkDropoff: '我已到达 2F 入口',
    step2Kicker: 'CHECK IN & GO DOWN / 签到后下楼',
    step2Title: '2F 完成签到、安检后前往 1F',
    step2Body: '到达 2F 后左转，沿通道前往一期签到处；出示门票扫码完成安检，进门后在 Logo 墙右转，搭乘下行扶梯前往 1F。',
    photoCheckin: '2F 签到与下楼路径',
    mapCheckinTitle: '一期签到处',
    mapCheckinNext: '签到',
    mapCheckinAria: '一期签到处路线示意图，签到点已标记',
    checkCheckin: '我已完成签到并找到下行扶梯',
    step3Kicker: 'FOLLOW THE BLUE ROUTE / 沿蓝色路线',
    step3Title: '1F 沿蓝色地贴前往 102C',
    step3Body: '搭乘下行扶梯到达 1F 后直行；到箭头处左转进门，沿蓝色地贴继续前行。',
    photoFloor: '1F 前往 102C 路径',
    checkFloor: '我已找到 102C 方向',
    step4Kicker: 'ARRIVAL / 到达',
    step4Title: '到达 102C',
    step4Body: '沿蓝色地贴直行，<strong>102C 就在右手边</strong>。',
    photoHall: '102C 到达现场',
    checkHall: '我已到达 102C',
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
    descendPhoto01: '搭乘下行扶梯前往 1F',
    route1fPhoto01: '到达 1F 后直行',
    route1fPhoto02: '沿通道直行，到箭头处左转进门',
    route1fPhoto03: '左转进门后，沿蓝色地贴直行',
    route1fPhoto04: '102C 就在右手边',
    rememberEyebrow: '记住这一件事',
    mapTitle: '先到一期，再前往一层',
    mapBody: '官方示意图同时标注了一期网约车落客点、一期签到处和杭州国际博览中心一期。到达后先认准一期入口，完成签到后按现场导视前往 1F 即可。',
    copyGaode: '复制高德搜索名称',
    officialGuide: '查看官方参会指南 ↗',
    mapAlt: '云栖大会官方一期与二期交通、签到点示意图',
    mapLargeCaption: '官方参会指南示意图 · 现场导视可能根据活动当日调整',
    noticeAria: '现场提示',
    noticeTitle: '现场提示',
    noticeBody: '大会入场需携带注册时使用的身份证件原件；最终路线请以当天导视牌和工作人员指引为准。',
    footerPath: '一期网约车落客点 → 一期签到处 → 1F → 102C',
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
    phase1Floor: 'PHASE I · 1ST FLOOR',
    hallC: '102C',
    factFirstLabel: 'FIRST CHECKPOINT',
    phase1Checkin: 'PHASE 1 CHECK-IN',
    secondFloor: 'Official entrance is on Level 2',
    factImportantLabel: 'IMPORTANT',
    identifyPhase1: 'Look for “Phase 1”',
    onsiteDirection: 'Follow on-site signs and staff',
    routeEyebrow: 'FOLLOW THE SIGNS',
    routeTitle: 'Four checkpoints to 102C',
    confirmed: 'confirmed',
    step1Kicker: 'START / GET OUT',
    step1Title: 'From the drop-off point to the Level 2 entrance',
    step1Body: 'Confirm that you are at the Phase 1 ride-hailing drop-off point. Follow the venue entrance signs, find the sightseeing elevator AB entrance and continue to Level 2.',
    photoDropoff: 'Drop-off photo',
    photoGalleryHint: 'Follow the sequence from top to bottom',
    photoPending: 'Client photo coming soon',
    mapPlanLabel: 'ROUTE SCHEMATIC',
    mapFloorPlanLabel: 'LEVEL 2 FLOOR PLAN',
    mapPlaceholder: 'SCHEMATIC · REPLACE LATER',
    mapPoint: 'POINT',
    mapNext: 'NEXT',
    mapDropoffTitle: 'Phase 1 drop-off',
    mapDropoffNext: 'Phase 1 entrance',
    mapDropoffAria: 'Schematic floor map of the Phase 1 ride-hailing drop-off point',
    mapDropoffVersion: 'PHASE 1 DROP-OFF · V2',
    mapDropoffImageAlt: 'Simplified Phase 1 drop-off location map highlighting the ride-hailing drop-off point and Hangzhou International Expo Centre Phase 1',
    checkDropoff: 'I reached the Level 2 entrance',
    step2Kicker: 'CHECK IN & GO DOWN',
    step2Title: 'Check in on Level 2, then go down to Level 1',
    step2Body: 'At Level 2, turn left and follow the corridor to Phase 1 check-in. Scan your ticket to pass security, turn right at the logo wall, then take the down escalator to Level 1.',
    photoCheckin: 'Level 2 check-in and descent route',
    mapCheckinTitle: 'Phase 1 check-in',
    mapCheckinNext: 'CHECK IN',
    mapCheckinAria: 'Route schematic to Phase 1 check-in with the check-in point marked',
    checkCheckin: 'I completed check-in and found the down escalator',
    step3Kicker: 'FOLLOW THE BLUE ROUTE',
    step3Title: 'Follow the blue route on Level 1 to 102C',
    step3Body: 'After arriving on Level 1, walk straight. Turn left into the entrance at the arrow, then continue along the blue floor route.',
    photoFloor: 'Level 1 route to 102C',
    checkFloor: 'I found the route to 102C',
    step4Kicker: 'ARRIVAL / YOU ARE HERE',
    step4Title: 'Arrive at 102C',
    step4Body: 'Continue along the blue floor route. <strong>102C is on your right.</strong>',
    photoHall: '102C arrival',
    checkHall: 'I arrived at 102C',
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
    descendPhoto01: 'Take the down escalator to Level 1',
    route1fPhoto01: 'Walk straight after reaching Level 1',
    route1fPhoto02: 'Walk straight, then turn left into the entrance at the arrow',
    route1fPhoto03: 'After turning left, follow the blue floor route straight ahead',
    route1fPhoto04: '102C is on your right',
    rememberEyebrow: 'ONE THING TO REMEMBER',
    mapTitle: 'Phase 1 first. Then head to Level 1.',
    mapBody: 'The official overview marks the Phase 1 ride-hailing drop-off, Phase 1 check-in and the Phase 1 venue. Once you arrive, identify the Phase 1 entrance first; after check-in, follow the signs to Level 1.',
    copyGaode: 'Copy Amap search name',
    officialGuide: 'Open official attendee guide ↗',
    mapAlt: 'Official APSARA Conference traffic and check-in overview for Phase 1 and Phase 2',
    mapLargeCaption: 'Official attendee-guide overview · On-site signage may change on the event day',
    noticeAria: 'On-site note',
    noticeTitle: 'ON-SITE NOTE',
    noticeBody: 'Bring the original ID document used for registration. On the event day, follow the latest signs and staff instructions.',
    footerPath: 'Phase 1 drop-off → Phase 1 check-in → Level 1 → 102C',
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
