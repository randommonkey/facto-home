const key = 'https://docs.google.com/spreadsheets/d/1Oc3bxvZFv5Xcaftq0BgZhKiVwZdb1TX0gRdY_W1aHno/edit?usp=sharing';

Tabletop.init({
  key: key,
  callback: function (data, tabletop) {
    const tools = tabletop.sheets('Sheet1')
      .all()
      .map(row => ({ tutorial: row.tutorial, description: row.description, org: row.org, lang: row.lang, link: row.link, type: row.tutorial_type }))
    ;

    const vm = new Vue({
      el: '#renderer',
      data: {
        tools: tools
      }
    })
  }
})
