
  

  var JournalPreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var cmsTitle = entry.getIn(['data', 'title'])
    var cmsJournalNum = entry.getIn(['data', 'journal-num'])
    var cmsCoverImage = entry.getIn(['data', 'cover', 'path']);

    var htmlString =`





<section class="heroimage container-fluid grid">
  <div class="heroimage__text">
    <h4>#${cmsJournalNum}</h4>
    <h1>${cmsTitle}</h1>
  </div>

  <div class="heroimage__arrow">
    <svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 48 48"
     class="svg-icon-arrow_down "
     alt="Skip to content">
  <path fill="#FFF" fill-rule="evenodd" d="M35.10525 33.0075 25.086 43.35525h-2.2995L12.76725 33.0075 15.45 30.489l6.51525 6.6795V4.48275h3.942V37.1685l6.51525-6.6795z"/>
</svg>

  </div>

  <div class="img-fullsize">
    
    <img src="${cmsCoverImage}" alt="">
  </div>
</section>
`;

    return h('div', {"dangerouslySetInnerHTML": {"__html": htmlString}} );
  }
});

CMS.registerPreviewTemplate("journals", JournalPreview);


  

  

CMS.registerEditorComponent({
  // Internal id of the component
  id: "quote-tag",
  // Visible label
  label: "Quote Tag",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      name: 'quote',
      label: 'Quote',
      widget: 'string'
    },
    {
      name: 'author',
      label: 'Author',
      widget: 'string'
    }
  ],
  // Regex pattern used to search for instances of this block in the markdown document.
  // Patterns are run in a multline environment (against the entire markdown document),
  // and so generally should make use of the multiline flag (`m`). If you need to capture
  // newlines in your capturing groups, you can either use something like
  // `([\S\s]*)`, or you can additionally enable the "dot all" flag (`s`),
  // which will cause `(.*)` to match newlines as well.
  //
  // Additionally, it's recommended that you use non-greedy capturing groups (e.g.
  // `(.*?)` vs `(.*)`), especially if matching against newline characters.
  pattern: /{% quote { "author": "(.*)" } %}(.*){% endquote %}/,
  // Given a RegExp Match object
  // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match#return_value),
  // return an object with one property for each field defined in `fields`.
  //
  // This is used to populate the custom widget in the markdown editor in the CMS.
  fromBlock: function(match) {
    return {
      author: match[1],
      quote: match[2]
    };
  },
  // Given an object with one property for each field defined in `fields`,
  // return the string you wish to be inserted into your markdown.
  //
  // This is used to serialize the data from the custom widget to the
  // markdown document
  toBlock: function(data) {
    return `{% quote { "author": "${data.author}" } %}${data.quote}{% endquote %}`;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(data) {
    // var htmlString =`{% include journal/hero_image.liquid %}`;

    // return h('div', {"dangerouslySetInnerHTML": {"__html": htmlString}} );
    return  `
      <figure class="pj-quote">
        <blockquote>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" class="svg-icon-quote " alt="A quote icon">
            <path fill="#FF5023" fill-rule="evenodd" d="M38.1424149 35.8266254v-13.250774l-5.0773994-1.9814242L40 7.59133127 33.8080495 4 23.4055728 22.0804954v13.74613h14.7368421Zm-23.4055728 0v-13.250774l-5.07739938-1.9814242L16.5944272 7.59133127 10.4024768 4 0 22.0804954v13.74613h14.7368421Z"></path>
          </svg>
          ${data.quote}
          <figcaption class="pj-quote--author">
            by ${data.author}
          </figcaption>
        <blockquote>
      </figure>
     `
  }
});




  

  CMS.registerEditorComponent({
  // Internal id of the component
  id: "collapsible-note",
  // Visible label
  label: "Collapsible Note",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      name: 'summary',
      label: 'Summary',
      widget: 'string'
    },
    {
      name: 'details',
      label: 'Details',
      widget: 'markdown'
    }
  ],
  // Regex pattern used to search for instances of this block in the markdown document.
  // Patterns are run in a multline environment (against the entire markdown document),
  // and so generally should make use of the multiline flag (`m`). If you need to capture
  // newlines in your capturing groups, you can either use something like
  // `([\S\s]*)`, or you can additionally enable the "dot all" flag (`s`),
  // which will cause `(.*)` to match newlines as well.
  //
  // Additionally, it's recommended that you use non-greedy capturing groups (e.g.
  // `(.*?)` vs `(.*)`), especially if matching against newline characters.
  pattern: /^<details>$\s*?<summary>(.*?)<\/summary>\n\n(.*?)\n^<\/details>$/ms,
  // Given a RegExp Match object
  // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match#return_value),
  // return an object with one property for each field defined in `fields`.
  //
  // This is used to populate the custom widget in the markdown editor in the CMS.
  fromBlock: function(match) {
    return {
      summary: match[1],
      detail: match[2]
    };
  },
  // Given an object with one property for each field defined in `fields`,
  // return the string you wish to be inserted into your markdown.
  //
  // This is used to serialize the data from the custom widget to the
  // markdown document
  toBlock: function(data) {
    return `
<details>
  <summary>${data.summary}</summary>

  ${data.detail}

</details>
`;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(data) {
    return `
<details>
  <summary>${data.summary}</summary>

  ${data.detail}

</details>
`;
  }
});


  

  

CMS.registerEditorComponent({
  id:"videos",
  label: "Videos",
  fields:[{
      name: "link",
      label: "link",
      widget: "string"
  }],
  pattern: /{{< videos link="(.*)" >}}/,
  fromBlock: function(match){
      return{
        link: match[1]
      };
  },
  toBlock: ({link}) =>
      `{{< videos link="${link}" >}}`,

  toPreview: ({link}) => {
    return `
      <div class="flex flex-wrap w-full justify-center px-4">
        <div class="videos-wrapper mx-auto">
            <div class="pt-5">
              <iframe width="560" height="315" src=${link}
                  frameborder="0";
                  allow="accelerometer; autoplay;
                        clipboard-write; encrypted-media;
                        gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
            </div>
        </div>
      </div>
    `
  }
})





