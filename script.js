const fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'dictionary.json');

fs.readFile('./dictionary.json', { encoding: 'utf-8' }, function (err, data) {
    if (!err) {
        console.log(
            JSON.parse(data).reduce((prev, next) => {
                if (next.itemType === 'PHRASE') {
                    return prev;
                }

                return `${prev}\n"${next.word.text}"${next.wordTranslationsArr.reduce(
                    (prev1, next1) => `${prev1};"${next1}"`,
                    ''
                )}`;
            }, '')
        );
    } else {
        console.log(err);
    }
});
