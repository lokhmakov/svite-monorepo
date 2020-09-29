const sharp = require(`sharp`)

async function main() {
  const first = await sharp(`./1.png`).resize(600, 1108).png().toBuffer()
  const second = await sharp(`./2.png`).resize(600, 1108).png().toBuffer()
  const third = await sharp(`./3.png`).resize(600, 1108).png().toBuffer()

  sharp(`./plate.jpg`)
    .resize(2475, 1638)
    .composite([
      {
        input: first,
        left: 357 + 50,
        top: 297,
      },
      {
        input: third,
        left: 1583 - 70,
        top: 297,
      },
      {
        input: second,
        left: 970,
        top: 297,
      },
    ])
    .toFile('output.jpg')
}

main()
