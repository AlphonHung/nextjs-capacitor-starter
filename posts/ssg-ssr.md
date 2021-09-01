---
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
---

# Hi, Here is my test
Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

## How to do that?
- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.


### Third title
Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

| 欄位1 | 欄位2 | 欄位3 |
| :-- | --: |:--:|
| 置左  | 置右 | 置中 |

Age           | Time  | Food | Gold | Requirement
--------------|:-----:|-----:| ----:|------------------------
Feudal Age    | 02:10 |  500 |    0 | Dark Age building x 2
Castle Age    | 02:40 |  800 |  200 | Feudal Age building x 2
Imperial Age  | 03:30 | 1000 |  800 | Castle Age building x 2    