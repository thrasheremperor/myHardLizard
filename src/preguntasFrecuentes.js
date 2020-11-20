const customFunctions = require('../customFunctions');

let movieContent=customFunctions.getFaqs();
let faqsContent='PREGUNTAS FRECUENTES\n';
faqsContent+='---------------------\n\n'
faqsContent+=`Total preguntas: ${movieContent.total_faqs}\n`;
faqsContent+='--------------------\n\n'
for (let faq of movieContent.faqs) {
	faqsContent+=`${faq.faq_title}\n\n${faq.faq_answer}\n\n\n`;
};
module.exports=faqsContent;
