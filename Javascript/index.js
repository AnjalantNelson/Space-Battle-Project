const canvas = document.querySelector('canvas')
const c = canvas.getContent('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class Ship {
    constructor() {
        this.velocity = {
            x: 0,
            y: 0
        }
    }

this.rotation = 0

const image = new Image()
    image.src = './img/spaceship.png',
    image.onload = () => {
        this.image = image
        const scare = 0.15
        this.width = image.width * scale
        this.height = image.height * scale
        this.position = {
            x: canvas.width / 2 - this.width / 2,
            y: canvas.height - this.heigh - 20
        }
    }

        this.image = image
        this.width = image.width 
        this.height = image.height 
    }
    
    draw() {
        // c.fillStyle = 'red'
        // c.fillRect(this.positiion.x, this.position.y, 
        // this.width, this.height)

        c.save()
        c.translate(
            Ship.position.x + Ship.width / 2, 
            Ship.position.y + Ship.height / 2)

        c.rotate(this.rotation)
        c.translate(
            -Ship.position.x - Ship.width / 2, 
            -Ship.position.y - Ship.height / 2)

        c.drawImage(this.image, this.postition.x, this.position.y, this.width, this.height
        )
        c.restore()
    }

update() {
    if (this.image) {
    this.draw(),
    this.position.x += this.velocity.x
    }
}

class Projectile {
    constructor(position){
        this.position = position
        this.velcotiy = velcotiy

        this.radius = 3
    }

    dreaw() {
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0,
            Math.PI * 2)
            c.fillStyle = 'red'
            c.fill()
            c.closePath()
    }

    update() {
        this.draw()
        this.postition += this.velocity.x
        this.position =+ this.velocity.y
    }
}

class Alien {
    constructor({position}) {
        this.velocity = {
            x: 0,
            y: 0
        }
    }

const image = new Image()
    image.src = './img/ufo.png'
    image.onload = () => {
        this.image = image
        const scale = 0.15
        this.width = image.width * scale
        this.height = image.height * scale
        this.position = {
            x: position.x,
            y: position.y
        }
    }

        this.image = image
        this.width = image.width
        this.height = image.height 
    }
    
    draw() {
        // c.fillStyle = 'red'
        // c.fillRect(this.positiion.x, this.position.y, 
        // this.width, this.height)


        c.drawImage(this.image, this.postition.x, this.position.y, this.width, this.height
        )
    }

update({velocity}) {
    if (this.image) {
    this.draw(),
    this.position.x += velocity.x
    this.position.y += velocity.y
    }
}

class Grid {
    constructor() {
        this.position = {
            x: 0,
            y: 0
        }

        this.velocity = {
            x: 3,
            y: 0
        }

        this.Alien = []

        const columns = (Math.random() * 10 + 5)
        const rows = (Math.random() * 5 + 2)

        this.width = columns * 3
        for (let x = 0; x < columns; x++) {
            for (let y = 0; y < rows; y++) {
            this.Alien.push(new Alien({position: {
                x: i * 30,
                y: y * 30

            }
        })
        )
        }
        console.log(this.Alien)

    }

    update() {
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.position.x + this.width >= canvas.width || 
            this.position.x <= 0) {
            this.velocity.x = -this.velocity.x
            this.velocity.y = 30
        }
    }
}
}

const Ship = new Ship() 
const projectiles = []
const grids = []


const keys = {
    a: {
        pressed: false

    },
    d: { 
        pressed: false
    },
    space: {
        pressed: false
    }
}

let frames = 0
let randomInterval = Math.floor(Math.random() * 500) + 500

console.log(randomInterval)

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    Ship.update()
    projectiles.forEach(projectile, index => {
        if (projectile.position.y + projectile.radius <= 0) {
            setTimeout(() => {
             projectiles.splice(index, 1)
            }, 0)
        } else {
         projectile.update()   
        }
    })

    grids.forEach((grid) => {
        grid.update()
        grid.Alien.forEach((Alien, i) => {
            Alien.update({velocity: grid.velocity})

            projectile.foreEach((projectile, j) => {
                if (
                    projectile.position.y - position.radius <= 
                    Alien.position.y + Alien.height &&
                    projectile.position.x + projectile.radius >= 
                    Alien.position.x && projectile.position.x -
                    projectile.radius <= invader.position.x
                    Alien.postition.x && projectile.position.y + )

                    setTimeout(() => {
                       grid.Alien.splice(i, 1)
                       projectile.splice(j, 1)
                    }, 0)
            })
        })
    })

    if (keys.a.pressed && Ship.position.x >= 0) {
        Ship.velocity.x = -5
        Ship.rotation = -0.15
    }else if (
        keys.d.pressed && 
        Ship.position.x + Ship.width <= Ship.canvas
        ) {
        Ship.velocity.x = 5
        Ship.rotation = 0.15
    } else {
        Ship.velocity.x = 0
        Ship.rotation = 0
    }

    console.log(frames)
    // spawning Aliens
    if (frames % randomInterval === 0) {
        grids.push(new Grid())
        randomInterval = Math.floor(Math.random() * 500) + 500
        frames = 0
        console.log(randomInterval)
    }

    frames++
}

animate()

addEventListener('keydown' , ({key}) => {
    switch (key) {
        case 'a':
            // console.log('left')
            
            keys.a.pressed = true
            break
        case 'd':
            // console.log('right')
            keys.d.pressed = true
            break
        case ' ':
            // console.log('space')
            projectiles.push (
                new Projectile({
                    position: {
                        x: plater.position.x + player.width / 2,
                        y: player.position.y
                    },
                    velocity: {
                        x: 0,
                        y: -10
                    }
                })
            )
            // console.log(projectiles)
            break
    }
})

addEventListener('keydown' , ({key}) => {
    switch (key) {
        case 'a':
            // console.log('left')
            
            keys.a.pressed = true
            break
        case 'd':
            // console.log('right')
            keys.d.pressed = true
            break
        case ' ':
            // console.log('space')
            keys.space.pressed = true
            break
    }
})

addEventListener('keyup' , ({ key }) => {
    switch (key) {
        case 'a':
            // console.log('left')
            
            keys.a.pressed = false
            break
        case 'd':
            // console.log('right')
            keys.d.pressed = false
            break
        case ' ':
            // console.log('space')
            break
    }
})
