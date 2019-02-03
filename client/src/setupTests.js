const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
  };
  global.localStorage = localStorageMock
  window.URL.createObjectURL = function() {};

const utils = require("jsdom/lib/jsdom/utils");
const canvasMock = require("canvas-mock");

function Canvas () {
    canvasMock(this);
    this.toDataURL = function() { return ""; }
}
utils.Canvas = Canvas;
HTMLCanvasElement.prototype.getContext = () => {
    // return whatever getContext has to return
  };



