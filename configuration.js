'use strict';

module.exports = {
  webScraperOptions: {
        bioinfo : {
            url: 'https://academic.oup.com/bioinformatics',
            description: 'Latest articles from Bioinformatics',
            // selector: `$('.widget-dynamic-journal-title').find('a').first().text();`
            selector: `var out = ''; $('.widget-dynamic-journal-title').find('a').each(function(i, element){ out = out + '【' + (i+1) + '】' + $(this).text().trim() + '; ';}); out;` 
        },
        ajhg : {
            url: 'https://www.journals.elsevier.com/the-american-journal-of-human-genetics/recent-articles',
            description: 'Recent articles from AJHG',
            // selector: `$('.pod-listing-header','#Content1').find('a').first().attr('title');`
            selector: `var out = ''; $('.pod-listing-header','#Content1').find('a').each(function(i, element){ out = out + '【' + (i+1) + '】' + $(this).attr('title').trim() + '; ';}); out;` 
        },
        nature : {
            url: 'https://www.nature.com/ng/',
            description: 'Latest research from Nature Genetics',
            selector: `var out = ''; $('#latest-research').find('a').each(function(i, element){ out = out + '【' + (i+1) + '】' + $(this).text().trim() + '; ';}); out;`
            // selector: `$('#latest-research').find('a').text();` 
        }
  
  }
};
  