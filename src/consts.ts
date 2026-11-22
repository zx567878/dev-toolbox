/* ==================== 站点信息 ==================== */

/** 站点名称：页面标题、页脚、RSS、meta 全站共用 */
export const SITE_TITLE = '恒温箱';

/** 首页简介短句。改这一句，全站所有「不定时更新」同步变化 */
export const SITE_DESCRIPTION = '欢迎来到恒温箱';

/** 搜索摘要 / RSS 用。搜索引擎看到的就是这段文字，直接改这一句即可（首页简介不影响它） */
export const SITE_DESCRIPTION_LONG = '恒温箱是气温U 的个人博客，记录一些感兴趣的内容，不定期更新。';

/* ==================== 导航与页面标题 ==================== */

export const NAV_HOME = '首页';
/** 导航「文章」与文章列表页标题共用 */
export const NAV_POSTS = '文章';
/** 导航「关于」与关于页标题共用 */
export const NAV_ABOUT = '关于';

/* ==================== 页面文字 ==================== */

/** 首页底部链接 */
export const ALL_POSTS = '全部文章 →';

/** 文章列表为空时的提示 */
export const POSTS_EMPTY = '还没有发布文章。';

/** 文章列表页搜索摘要，参数 = 文章篇数 */
export const POSTS_DESCRIPTION = (count: number) =>
	`${SITE_TITLE}的全部文章，按年份归档，共 ${count} 篇。`;

/** 关于页搜索摘要 */
export const ABOUT_DESCRIPTION = `关于${SITE_TITLE}：气温U 的个人博客，记录我感兴趣的内容，随手分享。`;

/** 关于页正文（每段一条，改这里即可） */
export const ABOUT_BODY = [
	'气温U 的个人博客。',
];

/** 404 页标题（浏览器标题会自动追加「 - 站点名」） */
export const NOT_FOUND_TITLE = '页面不存在';

/** 404 页描述 */
export const NOT_FOUND_DESCRIPTION = '这个页面不存在或已被移动。';

/** 404 页返回首页链接 */
export const BACK_HOME = '回首页';

/** 文章页「最后更新」前缀 */
export const LAST_UPDATED = '最后更新';

/** 页脚 RSS 链接文字 */
export const RSS_LABEL = 'RSS';
