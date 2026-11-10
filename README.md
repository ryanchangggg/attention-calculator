# 注意力计算器

参考量化调酒师的两篇文章，独立实现正积分构造：
- https://zhuanlan.zhihu.com/p/669285539
- https://zhuanlan.zhihu.com/p/20960679909

支持 π、e、e^q、ln(q)、arctan(q) 与有理数比较。提供精确分数证书、正性验证、函数图、TeX 复制与下载、最近十次成功查询。没有使用原站 API；不依赖第三方 JS 包。

## 本地运行
在此目录运行：

```sh
python3 -m http.server 8765
```

浏览器打开 http://localhost:8765。请使用 HTTP 服务，不要直接双击 index.html（浏览器不允许 file 协议加载模块 Worker）。

## 验证

```sh
node test.mjs
```

核心使用 BigInt 有理数和高斯消元，按照总次数、两端平衡顺序搜索 m,n≤24；对解出的恒等式精确回代，检查一次/二次多项式在 [0,1] 的最小值非负且不恒为零。测试另用 Simpson 积分独立核对十组算例。

参数绝对值不超过 20；ln 的参数为正且不等于 1，指数/反正切参数不能为零。搜索未找到时不判定命题真假。图形采用浮点数，仅作说明。输入最长 80 字符；Worker 搜索在 20 秒后终止。

本版为五类核心复刻，不包含原站全部 29 类、组合题拆解、公式图片导出和语言切换。

## GitHub Pages

网页：https://ryanchangggg.github.io/attention-calculator/

部署目录为 main 分支根目录。更新根目录中的 HTML、CSS 和 JavaScript 后，GitHub Pages 自动重新发布。
