# How to Add News Items

## Quick Start

Edit `_data/news.yml` to add or remove news items.

## Adding a News Item

Add a new entry at the TOP of the file (most recent first):

```yaml
- title: "Your News Title Here"
  date: 2026-01-25
  summary: "Brief description of the news. You can use <em>HTML</em> for formatting."
  link: "/link-to-more-info.html"
  featured: true
```

## Fields Explained

- **title**: The headline (required)
- **date**: Date in YYYY-MM-DD format (required for sorting)
- **summary**: Brief description, HTML allowed (required)
- **link**: URL to more information (optional)
- **featured**: Set to `true` to show on homepage (optional, default: true)
- **type**: 'custom' or 'publication' for styling (optional)

## Examples

### Simple News Item
```yaml
- title: "New Lab Equipment Arrived"
  date: 2026-01-20
  summary: "Our new spectrophotometer is now operational."
  featured: true
```

### News with Link
```yaml
- title: "Featured in Physics Today"
  date: 2026-01-15
  summary: "Recent work on quantum optics highlighted in this month's issue."
  link: "https://physicstoday.org/..."
  featured: true
```

### Publication Announcement
```yaml
- title: "New Paper in Physical Review Letters"
  date: 2025-12-10
  summary: "Our latest findings on slow light published in <em>Phys. Rev. Lett.</em>"
  link: "/papers.html"
  type: "publication"
  featured: true
```

## Removing News

Simply delete the entire entry or set `featured: false` to hide it from the homepage.

## Tips

- Keep summaries brief (1-2 sentences)
- Dates should be YYYY-MM-DD for proper sorting
- Most recent items appear first
- Homepage shows up to 2 featured items
- You can create a full news page later to show all items

## File Location

`_data/news.yml`
