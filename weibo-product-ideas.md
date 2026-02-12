# Weibo Product Ideas Skill

Generate product innovation analysis from Weibo trending topics.

## Input Format

Comma or newline separated trending topics, optionally with brief context:
```
# 热搜话题1, # 热搜话题2, # 热搜话题3
```

## Output

Single HTML file: `weibo-product-analysis-{YYMMDD}.html`

## Workflow

1. **Batch Search** - Single WebSearch for all topics:
   ```
   微博热搜新闻摘要：1){topic1} 2){topic2} 3){topic3} ...
   ```
   Get ~3 sentence summaries per topic.

2. **Product Analysis** - For each topic, identify:
   - User pain points
   - Product opportunities
   - Concrete feature ideas

3. **Generate HTML** - Minimal self-contained file:
```html
<!DOCTYPE html>
<html><head><meta charset="utf-8">
<title>微博产品分析 {YYMMDD}</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font:16px system-ui,sans-serif;line-height:1.6;padding:20px;max-width:800px;margin:0 auto;background:#f5f5f5}
h1{text-align:center;padding:20px 0;color:#333;border-bottom:2px solid #e64539}
h2{color:#e64539;margin:20px 0 10px;padding-bottom:5px;border-bottom:1px solid #ddd}
.card{background:#fff;border-radius:8px;padding:20px;margin:15px 0;box-shadow:0 2px 4px rgba(0,0,0,0.1)}
.tag{display:inline-block;background:#e64539;color:#fff;padding:2px 8px;border-radius:4px;font-size:12px;margin-right:5px}
.summary{background:#fff9e6;padding:15px;border-radius:4px;margin:10px 0;font-size:14px;color:#666}
.opportunity{background:#e6f7ff;padding:15px;border-radius:4px;margin:10px 0}
.opportunity h4{color:#1890ff;margin-bottom:8px}
.opportunity li{margin-left:20px;margin:5px 0}
.footer{text-align:center;color:#999;padding:20px;font-size:12px}
</style>
</head>
<body>
<h1>微博产品分析 {YYMMDD}</h1>
<div class="cards">
<div class="card"><h2><span class="tag">话题</span>{topic}</h2>
<p class="summary">{summary}</p>
<div class="opportunity"><h4>产品机会</h4><ul><li>{ideas}</li></ul></div></div>
</div>
<div class="footer">Generated {YYYY-MM-DD}</div></body></html>
```

## Rules

- Use ~3 sentence summaries per topic
- Limit to top 5 topics for depth
- Focus on actionable product insights
- Self-contained HTML, no external dependencies
