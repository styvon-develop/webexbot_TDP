const fetch = require('node-fetch');
const cheerio = require('cheerio');

// Load in configuration
var myconfig = require(__dirname + '/../configuration.js');

class WebScraper {
  constructor(options) {
    this.options = options;
  }

  async getText(siteId) {
    if (siteId == 'list') return this.getList();

    const opts = this.options[siteId];

    if (!opts) return `Available sites: ${Object.keys(this.options)}`;

    const result = await fetch(opts.url);
    const html = await result.text();
    const $ = cheerio.load(html); // eslint-disable-line
    return eval(opts.selector);
  }

  getList() {
    let text = '';
    for (const prop in this.options) {
      text += `${prop}: ${this.options[prop].description}\n`;
    }
    return text;
  }
}

var webscraper = new WebScraper(myconfig.webScraperOptions);
var getScraperText = async (params) => await webscraper.getText(params);


module.exports = function(controller) {
  
  controller.hears(['^journal (.*)','^journal'], 'direct_mention,direct_message', async function(bot, message){
    if (message.match[1]) {
      
      var response = await getScraperText(message.match[1]);
      bot.reply(message, response);
      
    } else {
      
      bot.reply(message,'Please add a list of journal websites');
      
    }
  
  });
  
}


