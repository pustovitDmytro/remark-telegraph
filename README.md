# remark-telegraph
[remark](https://github.com/remarkjs/remark) plugin to translate markdown into [Telegra.ph Nodes](https://telegra.ph/api#Node).

[![Version][badge-vers]][npm]
[![Bundle size][npm-size-badge]][npm-size-url]
[![Downloads][npm-downloads-badge]][npm]

[![CodeFactor][codefactor-badge]][codefactor-url]
[![SonarCloud][sonarcloud-badge]][sonarcloud-url]
[![Codacy][codacy-badge]][codacy-url]
[![Total alerts][lgtm-alerts-badge]][lgtm-alerts-url]
[![Language grade][lgtm-lg-badge]][lgtm-lg-url]
[![Scrutinizer][scrutinizer-badge]][scrutinizer-url]

[![Dependencies][badge-deps]][npm]
[![Security][snyk-badge]][snyk-url]
[![Build Status][tests-badge]][tests-url]
[![Coverage Status][badge-coverage]][url-coverage]

[![Commit activity][commit-activity-badge]][github]
[![FOSSA][fossa-badge]][fossa-url]
[![License][badge-lic]][github]

## Table of Contents
  - [Motivation](#motivation)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Examples](#examples)
  - [Contribute](#contribute)

## Motivation

[Telegraph Api](https://telegra.ph/api) demands a page content to be represented as array of [Node](https://telegra.ph/api#Node).
In case [markdown](https://www.markdownguide.org/getting-started/) works better for you, **remark-telegraph** plugin could be a cure. It is an [remark](https://github.com/remarkjs/remark) plugin, so can be used in combination with the whole [ecosystem](https://github.com/remarkjs/remark/blob/main/doc/plugins.md)

## Requirements
[![Platform Status][node-ver-test-badge]][node-ver-test-url]

To use library you need to have [node](https://nodejs.org) and [npm](https://www.npmjs.com) installed in your machine:

* node `>=10`
* npm `>=6`

Package is [continuously tested][node-ver-test-url] on darwin, linux and win32 platforms. All active and maintenance [LTS](https://nodejs.org/en/about/releases/) node releases are supported.

## Installation

To install the library run the following command

```bash
  npm i --save remark-telegraph
```

## Usage

```javascript
import remarkParse from 'remark-parse';
import remarkTelegraph from 'remark-telegraph';
import unified from 'unified';

async function createPage(markdown) {
    const vFile = await unified()
        .use(remarkParse)
        .use(remarkTelegraph)
        .process(markdown);

    const nodes = JSON.parse(vFile.contents);

    console.log('Create Page :', nodes);
}

```

**Note:** for `unified>=10` and `remark-parse>=10` *remark* had been moved to [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules). So for the latest versions, usage samples may vary a bit.

## Examples

See the example of [markdown-it](tests/examples/markdown-it.md) sample transformation on [telegra.ph](https://telegra.ph/markdown-it-01-04). Check raw nodes in [examples folder](tests/examples/markdown-it.json).

## Contribute

Make the changes to the code and tests. Then commit to your branch. Be sure to follow the commit message conventions. Read [Contributing Guidelines](.github/CONTRIBUTING.md) for details.

[npm]: https://www.npmjs.com/package/remark-telegraph
[github]: https://github.com/pustovitDmytro/remark-telegraph
[coveralls]: https://coveralls.io/github/pustovitDmytro/remark-telegraph?branch=master
[badge-deps]: https://img.shields.io/librariesio/release/npm/remark-telegraph.svg
[badge-vers]: https://img.shields.io/npm/v/remark-telegraph.svg
[badge-lic]: https://img.shields.io/github/license/pustovitDmytro/remark-telegraph.svg
[badge-coverage]: https://coveralls.io/repos/github/pustovitDmytro/remark-telegraph/badge.svg?branch=master
[url-coverage]: https://coveralls.io/github/pustovitDmytro/remark-telegraph?branch=master

[snyk-badge]: https://snyk-widget.herokuapp.com/badge/npm/remark-telegraph/badge.svg
[snyk-url]: https://snyk.io/advisor/npm-package/remark-telegraph

[tests-badge]: https://img.shields.io/circleci/build/github/pustovitDmytro/remark-telegraph
[tests-url]: https://app.circleci.com/pipelines/github/pustovitDmytro/remark-telegraph

[codefactor-badge]: https://www.codefactor.io/repository/github/pustovitdmytro/remark-telegraph/badge
[codefactor-url]: https://www.codefactor.io/repository/github/pustovitdmytro/remark-telegraph

[commit-activity-badge]: https://img.shields.io/github/commit-activity/m/pustovitDmytro/remark-telegraph

[scrutinizer-badge]: https://scrutinizer-ci.com/g/pustovitDmytro/remark-telegraph/badges/quality-score.png?b=master
[scrutinizer-url]: https://scrutinizer-ci.com/g/pustovitDmytro/remark-telegraph/?branch=master

[lgtm-lg-badge]: https://img.shields.io/lgtm/grade/javascript/g/pustovitDmytro/remark-telegraph.svg?logo=lgtm&logoWidth=18
[lgtm-lg-url]: https://lgtm.com/projects/g/pustovitDmytro/remark-telegraph/context:javascript

[lgtm-alerts-badge]: https://img.shields.io/lgtm/alerts/g/pustovitDmytro/remark-telegraph.svg?logo=lgtm&logoWidth=18
[lgtm-alerts-url]: https://lgtm.com/projects/g/pustovitDmytro/remark-telegraph/alerts/

[codacy-badge]: https://app.codacy.com/project/badge/Grade/121e3d1247b64010a5be0d4e3b587a3c
[codacy-url]: https://www.codacy.com/gh/pustovitDmytro/remark-telegraph/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=pustovitDmytro/remark-telegraph&amp;utm_campaign=Badge_Grade

[sonarcloud-badge]: https://sonarcloud.io/api/project_badges/measure?project=pustovitDmytro_remark-telegraph&metric=alert_status
[sonarcloud-url]: https://sonarcloud.io/dashboard?id=pustovitDmytro_remark-telegraph

[npm-downloads-badge]: https://img.shields.io/npm/dw/remark-telegraph
[npm-size-badge]: https://img.shields.io/bundlephobia/min/remark-telegraph
[npm-size-url]: https://bundlephobia.com/result?p=remark-telegraph

[node-ver-test-badge]: https://github.com/pustovitDmytro/remark-telegraph/actions/workflows/npt.yml/badge.svg?branch=master
[node-ver-test-url]: https://github.com/pustovitDmytro/remark-telegraph/actions?query=workflow%3A%22Node.js+versions%22

[fossa-badge]: https://app.fossa.com/api/projects/custom%2B24828%2Fremark-telegraph.svg?type=shield
[fossa-url]: https://app.fossa.com/projects/custom%2B24828%2Fremark-telegraph?ref=badge_shield
