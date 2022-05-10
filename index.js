const keyboardStructureEN = [
  [
    { code: 'Backquote', value: { standart: '`', withShift: '~' } },
    { code: 'Digit1', value: { standart: '1', withShift: '!' } },
    { code: 'Digit2', value: { standart: '2', withShift: '@' } },
    { code: 'Digit3', value: { standart: '3', withShift: '#' } },
    { code: 'Digit4', value: { standart: '4', withShift: '$' } },
    { code: 'Digit5', value: { standart: '5', withShift: '%' } },
    { code: 'Digit6', value: { standart: '6', withShift: '^' } },
    { code: 'Digit7', value: { standart: '7', withShift: '&' } },
    { code: 'Digit8', value: { standart: '8', withShift: '*' } },
    { code: 'Digit9', value: { standart: '9', withShift: '(' } },
    { code: 'Digit0', value: { standart: '0', withShift: ')' } },
    { code: 'Minus', value: { standart: '-', withShift: '_' } },
    { code: 'Equal', value: { standart: '=', withShift: '+' } },
    { code: 'Backspace', value: { standart: 'Backspace' } },
  ],
  [
    { code: 'Tab', value: { standart: 'Tab' } },
    { code: 'KeyQ', value: { standart: 'q', withShift: 'Q' } },
    { code: 'KeyW', value: { standart: 'w', withShift: 'W' } },
    { code: 'KeyE', value: { standart: 'e', withShift: 'E' } },
    { code: 'KeyR', value: { standart: 'r', withShift: 'R' } },
    { code: 'KeyT', value: { standart: 't', withShift: 'T' } },
    { code: 'KeyY', value: { standart: 'y', withShift: 'Y' } },
    { code: 'KeyU', value: { standart: 'u', withShift: 'U' } },
    { code: 'KeyI', value: { standart: 'i', withShift: 'I' } },
    { code: 'KeyO', value: { standart: 'o', withShift: 'O' } },
    { code: 'KeyP', value: { standart: 'p', withShift: 'P' } },
    { code: 'BracketLeft', value: { standart: '[', withShift: '{' } },
    { code: 'BracketRight', value: { standart: ']', withShift: '}' } },
    { code: 'Backslash', value: { standart: '\\', withShift: '|' } },
    { code: 'Delete', value: { standart: 'Delete' } },
  ],
  [
    { code: 'CapsLock', value: { standart: 'CapsLock' } },
    { code: 'KeyA', value: { standart: 'a', withShift: 'A' } },
    { code: 'KeyS', value: { standart: 's', withShift: 'S' } },
    { code: 'KeyD', value: { standart: 'd', withShift: 'D' } },
    { code: 'KeyF', value: { standart: 'f', withShift: 'F' } },
    { code: 'KeyG', value: { standart: 'g', withShift: 'G' } },
    { code: 'KeyH', value: { standart: 'h', withShift: 'H' } },
    { code: 'KeyJ', value: { standart: 'j', withShift: 'J' } },
    { code: 'KeyK', value: { standart: 'k', withShift: 'K' } },
    { code: 'KeyL', value: { standart: 'l', withShift: 'L' } },
    { code: 'Semicolon', value: { standart: ';', withShift: ':' } },
    { code: 'Quote', value: { standart: "'", withShift: '"' } },
    { code: 'Enter', value: { standart: 'Enter' } },
  ],
  [
    { code: 'ShiftLeft', value: { standart: 'Shift' } },
    { code: 'KeyZ', value: { standart: 'z', withShift: 'Z' } },
    { code: 'KeyX', value: { standart: 'x', withShift: 'X' } },
    { code: 'KeyC', value: { standart: 'c', withShift: 'C' } },
    { code: 'KeyV', value: { standart: 'v', withShift: 'V' } },
    { code: 'KeyB', value: { standart: 'b', withShift: 'B' } },
    { code: 'KeyN', value: { standart: 'n', withShift: 'N' } },
    { code: 'KeyM', value: { standart: 'm', withShift: 'M' } },
    { code: 'Comma', value: { standart: ',', withShift: '<' } },
    { code: 'Period', value: { standart: '.', withShift: '>' } },
    { code: 'Slash', value: { standart: '/', withShift: '?' } },
    { code: 'ArrowUp', value: { standart: '↑' } },
    { code: 'ShiftRight', value: { standart: 'Shift' } },
  ],
  [
    { code: 'ControlLeft', value: { standart: 'Control' } },
    { code: 'MetaLeft', value: { standart: 'Win' } },
    { code: 'AltLeft', value: { standart: 'Alt' } },
    { code: 'Space', value: { standart: 'Space' } },
    { code: 'AltRight', value: { standart: 'Alt' } },
    { code: 'ControlRight', value: { standart: 'Control' } },
    { code: 'ArrowLeft', value: { standart: '←' } },
    { code: 'ArrowDown', value: { standart: '↓' } },
    { code: 'ArrowRight', value: { standart: '→' } },
  ],
];

const keyboardStructureRU = [
  [
    { code: 'Backquote', value: { standart: 'ё', withShift: 'Ё' } },
    { code: 'Digit1', value: { standart: '1', withShift: '!' } },
    { code: 'Digit2', value: { standart: '2', withShift: '"' } },
    { code: 'Digit3', value: { standart: '3', withShift: '№' } },
    { code: 'Digit4', value: { standart: '4', withShift: '%' } },
    { code: 'Digit5', value: { standart: '5', withShift: ':' } },
    { code: 'Digit6', value: { standart: '6', withShift: ',' } },
    { code: 'Digit7', value: { standart: '7', withShift: '.' } },
    { code: 'Digit8', value: { standart: '8', withShift: ';' } },
    { code: 'Digit9', value: { standart: '9', withShift: '(' } },
    { code: 'Digit0', value: { standart: '0', withShift: ')' } },
    { code: 'Minus', value: { standart: '-', withShift: '_' } },
    { code: 'Equal', value: { standart: '=', withShift: '+' } },
    { code: 'Backspace', value: { standart: 'Backspace' } },
  ],
  [
    { code: 'Tab', value: { standart: 'Tab' } },
    { code: 'KeyQ', value: { standart: 'й', withShift: 'Й' } },
    { code: 'KeyW', value: { standart: 'ц', withShift: 'Ц' } },
    { code: 'KeyE', value: { standart: 'у', withShift: 'У' } },
    { code: 'KeyR', value: { standart: 'к', withShift: 'К' } },
    { code: 'KeyT', value: { standart: 'е', withShift: 'Е' } },
    { code: 'KeyY', value: { standart: 'н', withShift: 'Н' } },
    { code: 'KeyU', value: { standart: 'г', withShift: 'Г' } },
    { code: 'KeyI', value: { standart: 'ш', withShift: 'Ш' } },
    { code: 'KeyO', value: { standart: 'щ', withShift: 'Щ' } },
    { code: 'KeyP', value: { standart: 'з', withShift: 'З' } },
    { code: 'BracketLeft', value: { standart: 'х', withShift: 'Х' } },
    { code: 'BracketRight', value: { standart: 'ъ', withShift: 'Ъ' } },
    { code: 'Backslash', value: { standart: '\\', withShift: '/' } },
    { code: 'Delete', value: { standart: 'Delete' } },
  ],
  [
    { code: 'CapsLock', value: { standart: 'CapsLock' } },
    { code: 'KeyA', value: { standart: 'ф', withShift: 'Ф' } },
    { code: 'KeyS', value: { standart: 'ы', withShift: 'Ы' } },
    { code: 'KeyD', value: { standart: 'в', withShift: 'В' } },
    { code: 'KeyF', value: { standart: 'а', withShift: 'А' } },
    { code: 'KeyG', value: { standart: 'п', withShift: 'П' } },
    { code: 'KeyH', value: { standart: 'р', withShift: 'Р' } },
    { code: 'KeyJ', value: { standart: 'о', withShift: 'О' } },
    { code: 'KeyK', value: { standart: 'л', withShift: 'Л' } },
    { code: 'KeyL', value: { standart: 'д', withShift: 'Д' } },
    { code: 'Semicolon', value: { standart: 'ж', withShift: 'Ж' } },
    { code: 'Quote', value: { standart: 'э', withShift: 'Э' } },
    { code: 'Enter', value: { standart: 'Enter' } },
  ],
  [
    { code: 'ShiftLeft', value: { standart: 'Shift' } },
    { code: 'KeyZ', value: { standart: 'я', withShift: 'Я' } },
    { code: 'KeyX', value: { standart: 'ч', withShift: 'Ч' } },
    { code: 'KeyC', value: { standart: 'с', withShift: 'С' } },
    { code: 'KeyV', value: { standart: 'м', withShift: 'М' } },
    { code: 'KeyB', value: { standart: 'и', withShift: 'И' } },
    { code: 'KeyN', value: { standart: 'т', withShift: 'Т' } },
    { code: 'KeyM', value: { standart: 'ь', withShift: 'Ь' } },
    { code: 'Comma', value: { standart: 'б', withShift: 'Б' } },
    { code: 'Period', value: { standart: 'ю', withShift: 'Ю' } },
    { code: 'Slash', value: { standart: '.', withShift: ',' } },
    { code: 'ArrowUp', value: { standart: '↑' } },
    { code: 'ShiftRight', value: { standart: 'Shift' } },
  ],
  [
    { code: 'ControlLeft', value: { standart: 'Control' } },
    { code: 'MetaLeft', value: { standart: 'Win' } },
    { code: 'AltLeft', value: { standart: 'Alt' } },
    { code: 'Space', value: { standart: 'Space' } },
    { code: 'AltRight', value: { standart: 'Alt' } },
    { code: 'ControlRight', value: { standart: 'control' } },
    { code: 'ArrowLeft', value: { standart: '←' } },
    { code: 'ArrowDown', value: { standart: '↓' } },
    { code: 'ArrowRight', value: { standart: '→' } },
  ],
];

const LANG_EN = 'en';
const LANG_RU = 'ru';

const textarea = document.createElement('textarea');
textarea.className = 'input';

class Key {
  static Create(value, data) {
    const htmlRoot = document.createElement('button');
    htmlRoot.className = 'key';
    htmlRoot.innerText = value;
    htmlRoot.id = data.code;

    Object.entries(data).forEach(([datasetKey, datasetValue]) => {
      htmlRoot.dataset[`${datasetKey}`] = datasetValue;
    });
    return htmlRoot;
  }
}

class Keyboard {
  constructor() {
    this.htmlRoot = document.createElement('div');
    this.htmlRoot.className = 'keyboard';

    const locaStorageCurrentLanguage = window.localStorage.getItem('currentLanguage');

    this.state = {
      curentLanguage: locaStorageCurrentLanguage || LANG_EN,
      keyStructure: locaStorageCurrentLanguage && locaStorageCurrentLanguage === LANG_RU
        ? keyboardStructureRU : keyboardStructureEN,
      isShiftClicked: false,
      isCapslockClicked: false,
      isAltClicked: false,
    };

    document.body.append(document.createElement('p').value = 'Для переключения языка воспользуйтесь виртуальной клавиатурой Alt -> Shift');

    document.body.append(textarea);
    document.body.append(this.htmlRoot);

    this.commands = {
      Delete: () => {
        textarea.value = textarea.value.slice(0, textarea.value.length - 1);
      },
      Backspace: () => {
        textarea.value = textarea.value.slice(0, textarea.value.length - 1);
      },
      Space: () => {
        textarea.value += ' ';
      },
      Enter: () => {
        textarea.value += '\n';
      },
      CapsLock: () => {
        this.state.isCapslockClicked = !this.state.isCapslockClicked;
      },
      Tab: () => {
        textarea.value += '   ';
      },
      AltRight: () => {
        this.state.isAltClicked = true;
      },
      AltLeft: () => {
        this.state.isAltClicked = true;
      },
      ShiftRight: () => {
        if (this.state.isAltClicked) {
          this.switchLanguage();
        }
      },
      ShiftLeft: () => {
        if (this.state.isAltClicked) {
          this.switchLanguage();
        }
      },
      MetaLeft: () => {},
      ControlLeft: () => {},
      ControlRight: () => {},
    };
    window.localStorage.setItem('currentLanguage', this.state.curentLanguage);
  }

  switchLanguage() {
    this.state.curentLanguage = this.state.curentLanguage === LANG_EN ? LANG_RU : LANG_EN;
    this.state.keyStructure = this.state.curentLanguage === LANG_EN
      ? keyboardStructureEN
      : keyboardStructureRU;

    window.localStorage.setItem('currentLanguage', this.state.curentLanguage);

    if (this.htmlRoot.hasChildNodes()) {
      document.querySelectorAll('.row').forEach((child) => {
        child.remove();
      });
    }

    this.renderKeys();
  }

  write({ target }) {
    const { code } = target.dataset;
    if (this.commands[code]) {
      this.commands[code]();
      return;
    }

    if (this.state.isAltClicked) {
      this.state.isAltClicked = false;
      return;
    }

    textarea.value += this.state.isCapslockClicked
      || (this.state.isShiftClicked && target.dataset.withShift)
      ? target.dataset.withShift
      : target.dataset.standart || '';
  }

  static handleButton(e) {
    const code = e.code || e.target.dataset.code;

    const activeButton = document.getElementById(code);
    if (activeButton) {
      if (activeButton.classList.contains('active')) {
        activeButton.classList.remove('active');
      } else {
        activeButton.className += ' active';
      }
    }
  }

  render() {
    this.renderKeys();
    this.htmlRoot.addEventListener('click', this.write.bind(this), false);
    this.htmlRoot.addEventListener('mousedown', Keyboard.handleButton, false);
    this.htmlRoot.addEventListener('mouseup', Keyboard.handleButton, false);
    textarea.addEventListener('keydown', Keyboard.handleButton, false);
    textarea.addEventListener('keyup', Keyboard.handleButton, false);
  }

  renderKeys() {
    this.state.keyStructure.forEach((row) => {
      const rowContainer = document.createElement('div');
      rowContainer.className = 'row';
      row.forEach(({ code, value: { standart, withShift } }) => {
        const usageKey = code.startsWith('Key') ? withShift : standart;
        const htmlKey = Key.Create(usageKey, {
          code,
          standart,
          withShift,
        });
        rowContainer.append(htmlKey);
      });
      this.htmlRoot.append(rowContainer);
    });
  }
}

const keyboard = new Keyboard();
keyboard.render();
