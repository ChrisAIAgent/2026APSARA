import './styles.css';

const translations = {
  zh: {
    pageTitle: '国际主论坛 International Agentic AI Forum｜路线指引图',
    pageDescription: '参加国际主论坛 International Agentic AI Forum 的路线指引图：从网约车落客点前往国博一期 3F 大宴会厅 C。',
    brandAlt: 'APSARA 云栖大会',
    brandAria: '返回页面顶部',
    pageNav: '页面导航',
    languageSwitch: '语言切换',
    navRoute: '路线',
    navOverview: '总览',
    navOfficial: '官方指南',
    onsite: '现场引导',
    heroEyebrow: '2026 云栖大会 · 国际主论坛',
    heroTitle: '参加国际主论坛<br><span>International Agentic AI Forum</span><br>的路线指引图',
    heroGuideLabel: '路线引导',
    heroLead: '从网约车落客点出发，前往国博一期 3F 大宴会厅 C。',
    heroVenueLabel: '地点',
    heroVenue: '杭州国博一期 · 3层 · Ballroom C',
    heroStartLabel: '开始时间',
    heroStart: '9月23日上午 9:30',
    heroArrivalNote: '请于 9:00–9:15 之前抵达',
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
    destinationPin: '3F · 大宴会厅 C',
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
    step1Title: '一期网约车落客点',
    step1Body: '下车时确认司机停靠在“云栖大会网约车落客点·一期”。不要跟着二期落客点或大巴落客点走。',
    photoDropoff: '下车点实景',
    photoGalleryHint: '照片按顺序向下排列',
    photoPending: '待补充客户现场照片',
    mapPlanLabel: '路线示意',
    mapFloorPlanLabel: '1F 平面图',
    mapHallPlanLabel: '3F 平面图',
    mapPlaceholder: '落点示意 · 待替换',
    mapPoint: '落点',
    mapNext: '下一步',
    mapDropoffTitle: '一期网约车落客点',
    mapDropoffNext: '一期入口方向',
    mapDropoffAria: '一期网约车落客点示意平面图，落点已标记',
    mapDropoffVersion: '一期落客点图 · V2',
    mapDropoffImageAlt: '简化的一期网约车落客点位置图，突出网约车落客点和杭州国际博览中心一期',
    checkDropoff: '我已确认在一期落客点下车',
    step2Kicker: 'WALK TO CHECK-IN / 前往签到处',
    step2Title: '下车前往一期签到处',
    step2Body: '从网约车落客点下车后，沿着“杭州国际博览中心一期 / 一期签到处”标识前行，先到一期签到处。',
    photoCheckin: '一期签到处实景',
    mapCheckinTitle: '一期签到处',
    mapCheckinNext: '签到',
    mapCheckinAria: '一期签到处路线示意图，签到点已标记',
    checkCheckin: '我已找到一期签到处',
    step3Kicker: 'GO UP / 上楼',
    step3Title: '签到处前往 1F 扶梯，上三楼',
    step3Body: '完成签到后，从签到处沿导视前往 1F 扶梯或电梯，再上到 3F。',
    photoFloor: '3F 导视实景',
    mapFloorTitle: '1F 平面图',
    mapFloorNext: '扶梯上 3F',
    mapFloorAria: '1F 平面图，前往扶梯上三楼的路线已标记',
    mapFloorImageAlt: '1F 平面图，前往扶梯和三楼的路线已标记',
    checkFloor: '我已到达 3F',
    step4Kicker: 'ARRIVAL / 到达',
    step4Title: '大宴会厅 C',
    step4Body: '到达 3F 后，沿绿色路线前往“大宴会厅 C”，找到门头或现场指引牌。官网日程中的标准地点写法是：<strong>国博一期-3F-大宴会厅C</strong>。',
    photoHall: '宴会厅 C 门头实景',
    mapHallTitle: '大宴会厅 C',
    mapHallNext: '到达点',
    mapHallAria: '3F 平面图，前往大宴会厅 C 的路线和到达点已标记',
    mapHallImageAlt: '3F 平面图，前往大宴会厅 C 的路线和到达点已标记',
    checkHall: '我已到达大宴会厅 C',
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
    pageTitle: 'International Agentic AI Forum | Route Guide',
    pageDescription: 'Route guide for the International Agentic AI Forum: from the ride-hailing drop-off point to Ballroom C, Phase 1, 3F.',
    brandAlt: 'APSARA Conference',
    brandAria: 'Back to top',
    pageNav: 'Page navigation',
    languageSwitch: 'Language switcher',
    navRoute: 'Route',
    navOverview: 'Overview',
    navOfficial: 'Official guide',
    onsite: 'ON-SITE GUIDE',
    heroEyebrow: '2026 APSARA · INTERNATIONAL AGENTIC AI FORUM',
    heroTitle: 'International Agentic AI Forum<br><span>Route guide</span>',
    heroGuideLabel: 'WAYFINDING GUIDE',
    heroLead: 'From the ride-hailing drop-off point to Ballroom C, Phase 1, 3F.',
    heroVenueLabel: 'VENUE',
    heroVenue: 'Hangzhou International Expo Centre · Phase 1 · 3F · Ballroom C',
    heroStartLabel: 'START TIME',
    heroStart: 'September 23 · 9:30 AM',
    heroArrivalNote: 'Please arrive by 9:00–9:15 AM',
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
    destinationPin: '3F · GRAND BANQUET HALL C',
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
    step1Title: 'Phase 1 ride-hailing drop-off',
    step1Body: 'Make sure the driver stops at “APSARA Conference ride-hailing drop-off · Phase 1”. Do not follow the Phase 2 or coach drop-off signs.',
    photoDropoff: 'Drop-off photo',
    photoGalleryHint: 'Photos are stacked vertically',
    photoPending: 'Client photo coming soon',
    mapPlanLabel: 'ROUTE SCHEMATIC',
    mapFloorPlanLabel: '1F FLOOR PLAN',
    mapHallPlanLabel: '3F FLOOR PLAN',
    mapPlaceholder: 'SCHEMATIC · REPLACE LATER',
    mapPoint: 'POINT',
    mapNext: 'NEXT',
    mapDropoffTitle: 'Phase 1 drop-off',
    mapDropoffNext: 'Phase 1 entrance',
    mapDropoffAria: 'Schematic floor map of the Phase 1 ride-hailing drop-off point',
    mapDropoffVersion: 'PHASE 1 DROP-OFF · V2',
    mapDropoffImageAlt: 'Simplified Phase 1 drop-off location map highlighting the ride-hailing drop-off point and Hangzhou International Expo Centre Phase 1',
    checkDropoff: 'I am at the Phase 1 drop-off point',
    step2Kicker: 'WALK TO CHECK-IN',
    step2Title: 'Walk from the drop-off point to Phase 1 check-in',
    step2Body: 'After getting out at the ride-hailing drop-off point, follow the “Hangzhou International Expo Centre Phase 1 / Phase 1 check-in” signs to the check-in point.',
    photoCheckin: 'Phase 1 check-in photo',
    mapCheckinTitle: 'Phase 1 check-in',
    mapCheckinNext: 'CHECK IN',
    mapCheckinAria: 'Route schematic to Phase 1 check-in with the check-in point marked',
    checkCheckin: 'I found Phase 1 check-in',
    step3Kicker: 'GO UP / LEVEL 3',
    step3Title: 'From check-in to the 1F escalator, then go to 3F',
    step3Body: 'After check-in, follow the signs to the 1F escalator or lift, then go up to 3F.',
    photoFloor: '3F wayfinding photo',
    mapFloorTitle: '1F floor plan',
    mapFloorNext: 'Go up to 3F',
    mapFloorAria: '1F floor plan with the route to the escalator and 3F marked',
    mapFloorImageAlt: '1F floor plan highlighting the route to the escalator and the way up to 3F',
    checkFloor: 'I am on 3F',
    step4Kicker: 'ARRIVAL / YOU ARE HERE',
    step4Title: 'Grand Banquet Hall C',
    step4Body: 'On 3F, follow the green route to Grand Banquet Hall C and look for the entrance or on-site direction board. The official agenda location is: <strong>Phase 1-3F-Grand Banquet Hall C</strong>.',
    photoHall: 'Hall C entrance photo',
    mapHallTitle: 'Grand Banquet Hall C',
    mapHallNext: 'ARRIVAL POINT',
    mapHallAria: '3F floor plan with the route to and arrival point for Grand Banquet Hall C marked',
    mapHallImageAlt: '3F floor plan highlighting the route to and arrival point for Grand Banquet Hall C',
    checkHall: 'I arrived at Grand Banquet Hall C',
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
