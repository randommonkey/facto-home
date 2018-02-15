const key = 'https://docs.google.com/spreadsheets/d/1i9CAbsQDsp3OxiWZ-1iBY21DahR4PA4a7gX7bK4N8yA/edit?usp=sharing';

requestSheet(key, (data, tabletop) => {
  const tools = tabletop.sheets('Sheet1')
    .all()
    .map(row => ({ name: row.name, description: row.description_es, org: row.org, pricing: row.pricing, link: row.link }))
  ;

  const vm = new Vue({
    el: '#renderer',
    data: {
      tools: tools
    }
  })
})