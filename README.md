# 2026 云栖大会一期引导页

面向现场参会者的 H5 引导页：从“云栖大会网约车落客点·一期”到“国博一期·3F·大宴会厅 C”。

页面默认跟随浏览器系统语言（中文或英文），右上角可手动切换；手动选择会保存在当前设备。视觉方向参考 2026 云栖大会官网首页的 APSARA 渐变背景、轻量导航和黑白按钮体系。

## 本地开发

```bash
npm install
npm run dev
```

构建产物在 `dist/`：

```bash
npm run build
```

Cloudflare Pages 建议配置：

- Build command：`npm run build`
- Build output directory：`dist`

## 替换客户实景图

官方首页渐变背景、官方 Logo 和参会指南总览图已放在 `public/assets/`。页面目前为以下四个位置保留了实景照片位：

- `dropoff`：一期网约车落客点
- `checkin`：一期签到处
- `floor`：3F 楼层导视
- `hall`：大宴会厅 C 门头

拿到照片后，可以直接替换对应卡片内容或将照片放入 `public/assets/guide/` 后接入 `index.html`。页面文案中的官方路线依据云栖大会参会指南，现场请以当天导视牌和工作人员指引为准。
