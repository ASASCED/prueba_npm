module.exports = {
  /**
   * Style your text with two properties
   * @param {*} color - Color letters
   * @param {*} backgroundColor - Background color
   * @example
   * stTxt("WHITE", "ORANGE");
   */
  st
}

const st = (() => {
  const Constructor = (color, bgColor) => {
    this.color = color
    this.bgColor = bgColor
  }

  const init = (color, bgColor) => {
    return new Constructor(color, bgColor)
  }

  Constructor.prototype.stColor = () => {
    // Es obligatorio poner algun elemento con el id element de momento en lo que se agregan mas funciones
    const element = document.getElementById('element')
    element.style.backgroundColor = this.bgColor
  }
})()

st('WHITE', 'ORANGE').stColor()
