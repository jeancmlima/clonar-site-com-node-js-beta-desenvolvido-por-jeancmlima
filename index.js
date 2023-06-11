/*Desenvolvido por Jean L. ~Jan, estado em desenvolvimento. Não é totalmente eficaz, pode ser que precise de ajustes
manuais para ficar fiel ao código-fonte original.*/

const path = require('path');

const options = {
  urls: ['siteexemplo.com.br'], // Substitua pela URL do seu site
  directory: path.join(__dirname, 'pasta-exemplo'), // Diretório onde os arquivos serão salvos
  subdirectories: [
    { directory: 'img', extensions: ['.jpg', '.png', '.svg', '.gif'] }, // Subdiretório para imagens
    { directory: 'css', extensions: ['.css'] }, // Subdiretório para arquivos CSS
    { directory: 'js', extensions: ['.js'] }, // Subdiretório para arquivos JS
    { directory: 'scss', extensions: ['.scss'] }, // Subdiretório para arquivos SCSS
    { directory: 'sass', extensions: ['.sass'] }, // Subdiretório para arquivos Sass
    { directory: 'fonts/bootstrap', extensions: ['.eot', '.svg', '.ttf', '.woff', '.woff2'] } // Subdiretório para fontes do Bootstrap
    // Adicione mais subdiretórios conforme necessário para outros tipos de recursos
  ],
  sources: [
    { selector: 'img', attr: 'src' }, // Copiar imagens
    { selector: 'link[rel="stylesheet"]', attr: 'href' }, // Copiar arquivos CSS
    { selector: 'script', attr: 'src' }, // Copiar arquivos JS
    { selector: 'link[rel="stylesheet/less"]', attr: 'href' }, // Copiar arquivos LESS
    { selector: 'style', attr: 'innerHTML' } // Copiar estilos embutidos no HTML
    // Adicione mais seletores conforme necessário para outros tipos de recursos
  ],
  recursive: true,
  maxRecursiveDepth: 10, // Defina a profundidade máxima de recursão
  ignoreErrors: true // Ignorar erros ao fazer o download dos recursos
};

const scrape = async () => {
  const { default: websiteScraper } = await import('website-scraper');
  await websiteScraper(options);
};

scrape()
  .then(() => {
    console.log('Cópia do site concluída com sucesso!');
  })
  .catch(err => {
    console.error('Ocorreu um erro ao copiar o site:', err);
  });
