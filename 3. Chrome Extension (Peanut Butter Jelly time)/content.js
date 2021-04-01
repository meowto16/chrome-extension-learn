function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

class Banana {
  constructor({ x = 0, y = 0, width = 128, height = 128, type = 'classic' }) {
    this.id = uuidv4()
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.bananaBackground = this.setBananaBackground(type)
  }

  render () {
    const banana = document.createElement('div')
    banana.style.left = `${this.x}%`
    banana.style.top = `${this.y}%`
    banana.style.width = `${this.width}px`
    banana.style.height = `${this.height}px`
    banana.style.zIndex = '10000'
    banana.style.position = 'fixed'
    banana.style.backgroundImage = `url('${this.bananaBackground}')`
    banana.style.backgroundSize = 'contain'
    banana.style.backgroundRepeat = 'no-repeat'
    banana.style.backgroundPosition = 'center'
    banana.id = this.id
    document.body.appendChild(banana)
    return this
  }

  remove () {
    const node = document.getElementById(this.id)
    try {
      document.body.removeChild(node)
    } catch (e) {
      console.error('No such Banana......')
    }
  }

  setBananaBackground(type) {
    switch (type) {
      case 'smoothy': return `https://media0.giphy.com/media/YPVO2dLOjLYAZCTFEz/giphy.gif`
      case 'crazy': return 'https://media1.giphy.com/media/z2izXbyodw3Wo/giphy.gif?cid=ecf05e47bxfv4gi7ti4zcwx35gg1g4duuu3fhodnergnp7p5&rid=giphy.gif'
      case 'classic':
      default:
        return `https://media2.giphy.com/media/RJzThMh1cHHO5zxiYe/giphy.gif?cid=ecf05e47ipnl85wxgzk2j4ur4lwsx7tzwkew1ifx0rui1zrq&rid=giphy.gif`
    }
  }
}

function bananaPartyFrame() {
  const maxBananas = 7
  const bananaAmount = Math.ceil(Math.random() * maxBananas)

  return [...Array(bananaAmount)].map(() => {
    const bananaTypeIndex = Math.round(Math.random() * 2)

    const banana = new Banana({
      x: Math.random() * 100,
      y: Math.random() * 100,
      type: ['classic', 'smoothy', 'crazy'][bananaTypeIndex]
    })
    banana.render()
    return banana
  })
}

(async function() {
  try {
    const bananaAudio = new Audio('https://www.soundboard.com/mediafiles/nt/NTIzODMwNDY1MjM4NzA_8pl_2bioP2Vxw.mp3')
    await bananaAudio.play()
  } catch (e) {
    console.error(e, 'Cant play audio :(')
  }

  const interval = 2000

  function bananaParty() {
    const bananaCollection = bananaPartyFrame()
    setTimeout(() => {
      bananaCollection.map(banana => banana.remove())
    }, interval - 100)
  }

  setInterval(bananaParty, interval)
})()
