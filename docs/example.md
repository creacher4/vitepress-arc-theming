---
title: UI Kitchen Sink
outline: deep
aside: true
---

# UI Kitchen Sink <Badge text="reference" type="info" />

[[toc]]

> Use this page to visually verify theme changes. Tweak tokens, spacing, and components, then compare.

## Headings & Typography

# H1 — Hero Heading
## H2 — Section Heading
### H3 — Subsection
#### H4 — Minor
##### H5 — Tiny
###### H6 — Micro

Paragraph with **bold**, _italic_, **_bold italic_**, `inline code`, and ~~strikethrough~~.  
Hard break above; below is a horizontal rule.

---

> Blockquote: one level of quoting.
>
> > Nested blockquote: second level.

## Lists

Unordered list
- Item A
  - Nested A.1
  - Nested A.2
- Item B

Ordered list
1. First
2. Second
   1. Second-A
   2. Second-B
3. Third

Task list
- [x] Completed item
- [ ] Pending item
- [ ] Another item

## Links & Images

Inline link: [VitePress](https://vitepress.dev)

Reference link: [the docs][vpdocs].

Inline image:

HTML figure (caption demo):

<figure>
  <img src="" alt="Local hero.png example" />
  <figcaption>Figure: Local image with caption</figcaption>
</figure>

[vpdocs]: https://vitepress.dev

## Tables

| Column A | Column B | Column C |
|:---------|:--------:|---------:|
| left     |  center  |     right |
| alpha    |   beta   |    gamma  |

## Code

Inline `code` in a sentence.

Fenced code (language highlight):

```ts
export interface User {
  id: string
  name: string
  roles: string[]
}
````

Line highlighting:

```js {1,4-6}
function greet(name) {
  const msg = `Hello, ${name}!`
  return msg
}
// Highlighted block
console.log(greet('world'))
```

### Code Groups (tabs)

::: code-group

```bash [bash]
curl -s https://example.com/api | jq
```

```powershell [powershell]
Invoke-RestMethod https://example.com/api | ConvertTo-Json
```

```python [python]
import requests; print(requests.get("https://example.com/api").json())
```

:::

## Admonitions (Containers)

::: info
**Info** container — general notes.
:::

::: tip
**Tip** container — helpful suggestion.
:::

::: warning
**Warning** container — something to watch out for.
:::

::: danger
**Danger** container — critical issues.
:::

::: details Click to reveal details
This is a collapsible “details” container.
:::

## Custom Blocks: Callouts via Markdown

You can also style `.custom-block` elements in your theme overrides.

> **Note:** The four above map to `.info`, `.tip`, `.warning`, `.danger`, and `.details`.

## Badges

Inline badge after a heading (see H1).
Inline usage in text: <Badge text="beta" type="warning" /> and <Badge text="deprecated" type="danger" />

## Forms (Vanilla HTML)

<form>
  <label>
    Text input
    <input type="text" placeholder="Type here" />
  </label>
  <br />
  <label>
    Select
    <select>
      <option>Option A</option>
      <option>Option B</option>
    </select>
  </label>
  <br />
  <label>
    Checkbox <input type="checkbox" />
  </label>
  <br />
  <button type="button">Button</button>
</form>

## Inline HTML Utilities

<details>
  <summary>Native <code>&lt;details&gt;</code> element</summary>
  Works independently of the Markdown container.
</details>

<hr />

Small print, <sub>subscript</sub>, <sup>superscript</sup>.