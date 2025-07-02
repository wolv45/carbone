This is a fork of the carbone module (version 3.5.6).  Added support for images, improved work with tables, formulas, graphs.

<details>
  <summary>
     <span style="font-size: 2rem;">Original README.md</span>
     <hr>
  </summary>

<p align="center">
  <a href="https://carbone.io/" target="_blank">
    <img alt="CarboneJS" width="100" src="https://carbone.io/img/carbone_icon_v3_github.png">
  </a>
</p>

<p align="center">
<a href="https://www.npmjs.com/package/carbone">
    <img src="https://badgen.net/npm/dt/carbone" alt="npm badge">
  </a>
  <a href="https://www.npmjs.com/package/carbone">
    <img src="https://badgen.net/npm/dm/carbone" alt="npm badge">
  </a>
  <a href="https://www.npmjs.com/package/carbone">
    <img src="https://badgen.net/npm/v/carbone" alt="carbone version badge">
  </a><br/>
  <a href="https://carbone.io/documentation.html">
    <img src="https://readthedocs.org/projects/ansicolortags/badge/?version=latest" alt="documentation badge">
  </a>
  <a href="https://bundlephobia.com/result?p=carbone">
    <img src="https://badgen.net/bundlephobia/minzip/carbone" alt="minizip badge">
  </a>
  <a href="https://hub.docker.com/r/carbone/carbone-ee">
    <img src="https://badgen.net/docker/pulls/carbone/carbone-ee?icon=docker" alt="docker badge">
  </a>
  <a href="https://github.com/carboneio/carbone">
    <img src="https://badgen.net/github/forks/carboneio/carbone?icon=github" alt="github fork badge">
  </a>
</p>


<p><b>⚡️ Fast, Simple and Powerful report generator</b> in any format PDF, DOCX, XLSX, ODT, PPTX, ODS, XML, CSV using templates and your JSON data as input !</p>

### News 2024/11

Use the latest version (v4+) for free with our [Docker Edition](https://hub.docker.com/r/carbone/carbone-ee):

```sh
  docker pull carbone/carbone-ee
```

No license is required to start the [On-Premise Docker Edition](https://hub.docker.com/r/carbone/carbone-ee) with the REST API (same API as the [Cloud Edition](https://carbone.io/pricing.html)).
You will only need a license if you want to use some advanced features. By default, only community features are enabled.

Why? We try to optimize our time as much as possible. We are working on many things for the [long-awaited Carbone v5](https://carbone.io/carbone-v5.html) (new studio, new website, IA, ...).
Activating community features in the Docker Edition was much easier. This edition is updated as often as the Enterprise Edition with our automatic CI.

The Open Source Edition will be updated in v4 when the final v5 will be released. The open source edition is always one major version behind (v3+)

Feel free to contact us [on the chat](https://carbone.io) if you need further information or  **professional support**. 


## Table of content

README language: 🇨🇳 [简体中文](./doc/README.zh-cn.md), 🇺🇸 [English](README.md)

<!-- MarkdownTOC -->

- [Features](#features)
- [How it works?](#how-it-works)
- [Minimum Requirements](#minimum-requirements)
- [Getting started](#getting-started)
  - [Basic sample](#basic-sample)
  - [PDF generation, document conversion](#pdf-generation-document-conversion)
- [More examples](#more-examples)
- [API Reference](#api-reference)
- [Command line tools](#command-line-tools)
- [Issues](#issues)
- [Roadmap](#roadmap)
- [Performance](#performance)
- [Licenses and editions](#licenses-and-editions)
- [Philosophy](#philosophy)
- [Contributors](#contributors)

<!-- /MarkdownTOC -->

## Features

  - 🍏  **Extremely simple** : Create templates with LibreOffice™, Google Docs, Microsoft Office™, TinyMCE, CKEditor, ...
  - 🎨 **Unlimited design** : The limit is your document editor: pagination, headers, footers, tables...
  - 📝 **Convert documents** : thanks to the integrated document converter
  - 📐 **Unique template engine** : Insert JSON-like markers `{d.companyName}` directly in your document
  - ⭐️ **Flexible** : Use any XML documents as a template: docx, odt, ods, xlsx, html, pptx, odp, custom xml files...
  - 🚀 **Future-proof** : A powerful XML-agnostic algorithm understands what to do without knowing XML document specifications
  - 🌈 **Multilingual** : One template, multiple languages. Update translation files automatically
  - 💎 **Format data** : Use built-in date and number formatters or create your own in Javascript
  - 🏎 **Fast** : Manage multiple LibreOffice threads for document conversion, optimized code generation for each report

## How it works?

Carbone is a mustache-like template engine `{d.companyName}`.

Template language documentation : https://carbone.io/documentation.html

- The template can be any XML-document coming from LibreOffice™ or Microsoft Office™  (ods, docx, odt, xslx...)
- The injected data must be a JSON object or array, coming directly from your existing APIs for example

Carbone analyzes your template and inject data in the document. The generated document can be exported as is, or converted to another format (PDF, ...) using LibreOffice if it is installed on the system.
Carbone is working only on the server-side.


## Minimum Requirements

- NodeJS 12.x+
- Runs on OSX, Linux (servers and desktop), and Windows

#### Optional

- LibreOffice server if you want to use the document converter and generate PDF. Without LibreOffice, you can still generate docx, xlsx, pptx, odt, ods, odp, html as long as your template is in the same format.


## Getting started

### Basic sample

1 - Install it

```bash
  npm install carbone
```

2 - Copy-paste this code in a new JS file, and execute it with node

```javascript
  const fs = require('fs');
  const carbone = require('carbone');

  // Data to inject
  var data = {
    firstname : 'John',
    lastname : 'Doe'
  };

  // Generate a report using the sample template provided by carbone module
  // This LibreOffice template contains "Hello {d.firstname} {d.lastname} !"
  // Of course, you can create your own templates!
  carbone.render('./node_modules/carbone/examples/simple.odt', data, function(err, result){
    if (err) {
      return console.log(err);
    }
    // write the result
    fs.writeFileSync('result.odt', result);
  });
```

### PDF generation, document conversion

Carbone uses efficiently LibreOffice to convert documents. Among all tested solutions, it is the most reliable and stable one in production for now.

Carbone does a lot of thing for you behind the scene:

- starts LibreOffice in "server-mode": headless, no User Interface loaded
- manages multiple LibreOffice workers to maximize performance (configurable number of workers)
- automatically restarts LibreOffice worker if it crashes or does not respond
- job queue, re-try conversion three times if something bad happen


##### 1 - install LibreOffice

###### on OSX

- Install LibreOffice normally using the stable version from https://www.libreoffice.org/

###### on Ubuntu Server & Ubuntu desktop

> Be careful, LibreOffice which is provided by the PPA libreoffice/ppa does not bundled python (mandatory for Carbone). The best solution is to download the LibreOffice Package from the official website and install it manually:

```bash
  # remove all old version of LibreOffice
  sudo apt remove --purge libreoffice*
  sudo apt autoremove --purge

  # Download LibreOffice debian package. Select the right one (64-bit or 32-bit) for your OS.
  # Get the latest from http://download.documentfoundation.org/libreoffice/stable
  # or download the version currently "carbone-tested":
  wget https://downloadarchive.documentfoundation.org/libreoffice/old/7.5.1.1/deb/x86_64/LibreOffice_7.5.1.1_Linux_x86-64_deb.tar.gz

  # Install required dependencies on ubuntu server for LibreOffice 7.0+
  sudo apt install libxinerama1 libfontconfig1 libdbus-glib-1-2 libcairo2 libcups2 libglu1-mesa libsm6

  # Uncompress package
  tar -zxvf LibreOffice_7.5.1.1_Linux_x86-64_deb.tar.gz
  cd LibreOffice_7.5.1.1_Linux_x86-64_deb/DEBS

  # Install LibreOffice
  sudo dpkg -i *.deb

  # If you want to use Microsoft fonts in reports, you must install the fonts
  # Andale Mono, Arial Black, Arial, Comic Sans MS, Courier New, Georgia, Impact,
  # Times New Roman, Trebuchet, Verdana,Webdings)
  sudo apt install ttf-mscorefonts-installer

  # If you want to use special characters, such as chinese ideograms, you must install a font that support them
  # For example:
  sudo apt install fonts-wqy-zenhei
```

##### 2 - generate PDF

And now, you can use the converter, by passing options to render method.

> Don't panic, only the first conversion is slow because LibreOffice must starts
> Once started, LibreOffice stays on to make new conversions faster

```javascript
  var data = {
    firstname : 'John',
    lastname : 'Doe'
  };

  var options = {
    convertTo : 'pdf' //can be docx, txt, ...
  };

  carbone.render('./node_modules/carbone/examples/simple.odt', data, options, function(err, result){
    if (err) return console.log(err);
    fs.writeFileSync('result.pdf', result);
    process.exit(); // to kill automatically LibreOffice workers
  });
```


## More examples

##### Nested repetition in a docx document and spreadsheet

```javascript

  var data = [
    {
      movieName : 'Matrix',
      actors    : [{
        firstname : 'Keanu',
        lastname  : 'Reeves'
      },{
        firstname : 'Laurence',
        lastname  : 'Fishburne'
      },{
        firstname : 'Carrie-Anne',
        lastname  : 'Moss'
      }]
    },
    {
      movieName : 'Back To The Future',
      actors    : [{
        firstname : 'Michael',
        lastname  : 'J. Fox'
      },{
        firstname : 'Christopher',
        lastname  : 'Lloyd'
      }]
    }
  ];

  carbone.render('./node_modules/carbone/examples/movies.docx', data, function(err, result){
    if (err) return console.log(err);
    fs.writeFileSync('movies_result.docx', result);
  });

  carbone.render('./node_modules/carbone/examples/flat_table.ods', data, function(err, result){
    if (err) return console.log(err);
    fs.writeFileSync('flat_table_result.ods', result);
  });
```


## API Reference

To check out the **[api reference](https://carbone.io/api-reference.html#carbone-js-api)** and the **[documentation](https://carbone.io/documentation)**, visit [carbone.io](http://carbone.io).


## Command line tools

To checkout out the Carbone CLI documentation, visit [carbone.io](https://carbone.io/api-reference.html#cli)

## Issues

If you're facing any issues with this Community Edition, search a similar issue to ensure it doesn't already exist on [Github](https://github.com/carboneio/carbone/issues). Otherwhise, [create an issue to help us](https://github.com/carboneio/carbone/issues/new/choose).

## Roadmap

The roadmap is pinned on the github issues list.

## Performance

⚡️ Secret news of 14th Februrary 2023: we are building our own PDF converter, x200 faster than LibreOffice! Stay tuned.

Report generation speed (without network latency), using a basic one-page DOCX template:

  - ~ `10 ms / report` without document conversion (analyzing, injection, rendering)
  - ~ `50 ms / report` with a PDF conversion (100 loops, 3 LibreOffice workers, without cold-start)

On a MacBook Pro Mid-2015, 2,2 Ghz i7, 16Go.

## Licenses and editions

There are two editions of Carbone:

- Carbone Community Edition is freely available under the [CCL Agreement](LICENSE.md). Roughly speaking, as long as you are not offering Carbone Community Edition Software as a hosted
  Document-Generator-as-a-Service like [Carbone Cloud](https://carbone.io/pricing.html), you can use and modify all Community features for free.
- Carbone Enterprise Edition (hosted and on-premise) includes additional features. [See comparison table](https://carbone.io/pricing.html#product-comparison)

The Community Edition is one major version behind the Enterprise Edition. This rule may change in the future.

## Philosophy

> Our ultimate goal

[2% percent](https://help.carbone.io/en-us/article/2-for-charitable-purposes-59iyg3) of our hosted solution revenues goes to charity


## Contributors

Thanks to all Carbone contributors (random order)

  - Florian Bezagu
  - Matthieu Robin
  - Arnaud Lelièvre
  - Maxime Vincent
  - Enzo Ghemard
  - Jordan Nourry
  - Etienne Rouillard
  - Guillaume Chevaux
  - Fabien Bigant
  - Maxime Magne
  - Vincent Bertin
  - Léo Labruyère
  - Aurélien Kermabon
  - [Steeve Payraudeau](https://github.com/steevepay)


</details>

## API:

Usage (callback style):

    carbone.renderCallback('template.docx', data, (err, result, templateName) => {
      if(err) {
        console.error(err);
      } else {
        fs.writeFileSync('result.docx', result);
      }
    });

or:

    carbone.render('template.docx', data, (err, result, templateName) => {
      if(err) {
        console.error(err);
      } else {
        fs.writeFileSync('result.docx', result);
      }
    });

Usage (promise style):

    carbone.renderPromise('template.docx', data))
    .then(({ result }) => {
       fs.writeFileSync('result.docx', result);
    })
    .catch((err) => console.error(err));

or 

    carbone.render('template.docx', data))
    .then(({ result }) => {
       fs.writeFileSync('result.docx', result);
    })
    .catch((err) => console.error(err));

Usage (promise style, executes in worker):

    carbone.renderParallel('template.docx', data))
    .then(({ result }) => {
       fs.writeFileSync('result.docx', result);
    })
    .catch((err) => console.error(err));


## DOCX:

### HTML (minimal)
<hr>

Added formatter :html()

Example: {d.html:html()}

<table>
  <tr>
    <th>Original</th>
    <th>Current</th>
  </tr>
  <tr>
    <td style="width:50%"><img src="https://user-images.githubusercontent.com/16050840/154114394-212758c9-af24-4834-acb1-654786571947.png"></td>
    <td style="width:50%"><img src="https://user-images.githubusercontent.com/16050840/154114490-4150f32e-b6e7-43a5-8a61-5a51c19ccb5b.png"></td>
  </tr>
</table>
  
  
### IMAGES
<hr>

Added formatter :imageSize(width[,height])

Example: {d.image:imageSize(100,200)}

<table>
  <tr>
    <th>Original</th>
    <th>Current</th>
  </tr>
  <tr>
    <td style="width:50%"><img src="https://user-images.githubusercontent.com/16050840/154114685-cfea4d15-811a-41eb-980e-ea1bae2c4598.png"></td>
    <td style="width:50%"><img src="https://user-images.githubusercontent.com/16050840/154114732-6cb601a1-969d-4c4e-963b-b3dc77a17823.png"></td>
  </tr>
</table>

## XLSX:

### IMAGES
<hr>

Added formatter :imageSize(width[,height])

Example: {d.image:imageSize(100,200)}

<table>
  <tr>
    <th>Original</th>
    <th>Current</th>
  </tr>
  <tr>
    <td style="width:50%"><img src="https://user-images.githubusercontent.com/16050840/154115387-bc8713dc-f1cf-4a8e-a8fe-abb433158958.png"></td>
    <td style="width:50%"><img src="https://user-images.githubusercontent.com/16050840/154115432-679da2e6-6f4c-482f-b61c-8659dfb5a7cc.png"></td>
  </tr>
</table>

### CHARTS
<hr>

<table>
  <tr>
    <th>Original</th>
    <th>Current</th>
  </tr>
  <tr>
    <td style="width:50%"><img src="https://user-images.githubusercontent.com/16050840/154115955-4a90ace7-80d1-470a-9b43-ed5a44a5b7ca.png"></td>
    <td style="width:50%"><img src="https://user-images.githubusercontent.com/16050840/154115994-602b6235-73ae-45c1-b8f7-faf621aa12f6.png"></td>
  </tr>
</table>

### FORMULAS (needs recalculation)
<hr>

<table>
  <tr>
    <th>Original</th>
    <th>Current</th>
  </tr>
  <tr>
    <td style="width:50%"><img src="https://user-images.githubusercontent.com/16050840/154116179-874fe3e8-e7b6-4cc7-bfdb-dc1c5d41f009.png"></td>
    <td style="width:50%"><img src="https://user-images.githubusercontent.com/16050840/154116221-f001013d-b7e8-4674-916f-c0945cab19aa.png"></td>
  </tr>
</table>

### MERGED CELLS
<hr>

<table>
  <tr>
    <th>Original</th>
    <th>Current</th>
  </tr>
  <tr>
    <td style="width:50%"><img src="https://user-images.githubusercontent.com/16050840/154116465-386ad39a-1462-44e6-bcf1-5b5c61b949ce.png"></td>
    <td style="width:50%"><img src="https://user-images.githubusercontent.com/16050840/154116518-8cc1e022-64e7-4096-b4a2-b1c20580fb00.png"></td>
  </tr>
</table>

### PRINTING AREA
<hr>

<table>
  <tr>
    <th>Original</th>
    <th>Current</th>
  </tr>
  <tr>
    <td style="width:50%"><img src="https://user-images.githubusercontent.com/16050840/154116649-acd4ad20-70f4-415b-b2ab-3d98cf3b149f.png"></td>
    <td style="width:50%"><img src="https://user-images.githubusercontent.com/16050840/154116685-9cad116b-6358-458e-890f-96f943e5a02c.png"></td>
  </tr>
</table>
