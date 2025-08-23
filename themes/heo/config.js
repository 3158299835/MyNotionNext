const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2021-09-21', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR:[
  { title: '欢迎来到我的博客', url: 'https://blog.mcoi.top' },
  { title: '个人介绍', url: 'https://blog.mcoi.top/about' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '分享编程',
  HEO_HERO_TITLE_2: '与思维认知',
  HEO_HERO_TITLE_3: 'TANGLY1024.COM',
  HEO_HERO_TITLE_4: '新版上线',
  HEO_HERO_TITLE_5: 'NotionNext4.0 轻松定制主题',
  HEO_HERO_TITLE_LINK: 'https://tangly1024.com',
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: '随便逛逛',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '心情随笔', url: '/tag/心情随笔' },
  HEO_HERO_CATEGORY_2: { title: '学习笔记', url: '/tag/学习笔记' },
  HEO_HERO_CATEGORY_3: { title: '技术分享', url: '/tag/技术分享' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是',
    '🔍 步履不停,初心不改',
    '🤝 人生如棋,落子无悔',
    '🏃 从平凡,走向不平凡',
    '🏠 智能家居小能手',
    '🤖️ 数码科技爱好者',
    '🧱 团队小组发动机',
    '🖥️ 嵌入式学习大王'
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: '/about',
  HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL2: 'https://qm.qq.com/q/WCvIPoFdMm',
  HEO_INFO_CARD_ICON2: 'fas fa-comment',
  HEO_INFO_CARD_URL3: '/coffee',
  HEO_INFO_CARD_TEXT3: '赞助博主',

  // 用户技能图标
  HEO_GROUP_ICONS: [
  {
    title_1: 'keil',
    img_1: '/images/heo/keil.webp',
    color_1: '#989bf8',
    title_2: 'ccs',
    img_2: '/images/heo/ccs.webp',
    color_2: '#ffffff'
  },
  {
    title_1: 'CubeMX',
    img_1: '/images/heo/CubeMX.webp',
    color_1: '#039be5',
    title_2: 'MounRiver',
    img_2: '/images/heo/MounRiver.webp',
    color_2: '#3498db'
  },
  {
    title_1: 'RTThread',
    img_1: '/images/heo/RTThread.webp',
    color_1: '#e74c3c',
    title_2: 'canMV',
    img_2: '/images/heo/canMV.webp',
    color_2: '#2ecc71'
  },
  {
    title_1: 'lceda',
    img_1: '/images/heo/lceda.webp',
    color_1: '#6495ed',
    title_2: 'MCGS',
    img_2: '/images/heo/MCGS.webp',
    color_2: '#f39c12'
  },
  {
    title_1: 'Qt',
    img_1: '/images/heo/Qt.webp',
    color_1: '#41cd52',
    title_2: 'Fusion360',
    img_2: '/images/heo/Fusion360.webp',
    color_2: '#ff7800'
  },
  {
    title_1: 'vmware',
    img_1: '/images/heo/vmware.webp',
    color_1: '#607078',
    title_2: 'vscode',
    img_2: '/images/heo/vscode.webp',
    color_2: '#007acc'
  },
  {
    title_1: 'AfterEffect',
    img_1: '/images/heo/20239df3f66615b532ce571eac6d14ff21cf072602.webp',  
    color_1: '#989bf8',
    title_2: 'Git',
    img_2: '/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp',
    color_2: '#df5b40'
  },
  {
    title_1: 'clion', // 新增 clion 作为 title_1
    img_1: '/images/heo/clion.webp',
    color_1: '#8e44ad', 
    title_2: 'Photoshop',
    img_2: '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp',
    color_2: '#4082c3'
  },
  {
    title_1: 'GUIGuider', // 新增 GUIGuider 作为 title_1
    img_1: '/images/heo/GUIGuider.webp',
    color_1: '#27ae60', 
    title_2: 'Python',
    img_2: '/images/heo/20235c0731cd4c0c95fc136a8db961fdf963071502.webp',
    color_2: '#ffffff'
  },
  {
    title_1: 'Typora', // 新增 Typora 作为 title_1
    img_1: '/images/heo/Typora.webp',
    color_1: '#f39c12', 
    title_2: 'HTML',
    img_2: '/images/heo/202372b4d760fd8a497d442140c295655426070302.webp',
    color_2: '#e9572b'
  },
  {
    title_1: 'MobaXterm',
    img_1: '/images/heo/MobaXterm.webp',
    color_1: '#34495e', 
    title_2: 'jianying',
    img_2: '/images/heo/jianying.webp',
    color_2: '#1f1f1f'
  }
],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '与我联系',
  HEO_SOCIAL_CARD_TITLE_2: '发送邮件',
  HEO_SOCIAL_CARD_TITLE_3: '点击向我发送邮件',
  HEO_SOCIAL_CARD_URL: 'mailto:liu_zhen_jie@qq.com',

  // 底部统计面板文案
  HEO_POST_COUNT_TITLE: '文章数:',
  HEO_SITE_TIME_TITLE: '建站天数:',
  HEO_SITE_VISIT_TITLE: '访问量:',
  HEO_SITE_VISITOR_TITLE: '访客数:',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_NOT_BY_AI: false, // 显示非AI写作
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
