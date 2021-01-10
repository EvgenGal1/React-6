const minimist = require("minimist");
// для чтения файлов. функц-ия
const fs = require("fs");
// модуль для динамических путей. функц-ия
const path = require("path");

const args = minimist(process.argv.slice(2), {
  // второй парам объект алиас (псевдоним||сокращение)
  alias: {
    // компонент state less - сообщ "s" или state full без "s"
    stateless: "s",
    // параметр name (название файла) сообщаем после "n"
    name: "n",
  },
  // напишем в консоли
  // $$ node utils/superComponentCreator/ --n TestComponent
  // выдаст full(создаст папки и файлы с кодом) - `Будет создан компонент с отслеживанием состояния + папки + .css + импорт`
  // Stateful component will be created + folders + .css + imports
  // ещё less
  // $$ node utils/superComponentCreator/ -s --n TestLess
});

const componentName = args.name;

fs.mkdirSync(
  path.resolve(__dirname, "..", "..", "src", "components", componentName)
);

fs.writeFileSync(
  path.resolve(
    __dirname,
    "..",
    "..",
    "src",
    "components",
    componentName,
    "style.css"
  ),
  `.${componentName} {}`
);

if (args.stateless) {
  require("./stateless")(componentName);
} else {
  require("./statefull")(componentName);
}
