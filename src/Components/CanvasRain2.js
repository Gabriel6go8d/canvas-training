import React, {useEffect, useRef, useState} from 'react'

function CanvasRain2() {

    const sliderRef = useRef(null)
    const sliderBut = useRef(null)
    const sliderIn = useRef(null)

    const [MyHeight, setMyHeight] = useState(window.innerHeight*0.6)
    const [MyWidth, setMyWidth] = useState(window.innerWidth*0.7)

    useEffect(() => {

        var Rain = 100

        sliderRef.current.addEventListener('change', function(e){
            Rain = e.target.value * 50
            init()
        })
        sliderBut.current.addEventListener('click', function(e){
            Rain = sliderIn.current.value
            init()
        })

        var canvas = document.getElementById('myCanvas3')        
        canvas.height = MyHeight
        canvas.width = MyWidth
        var c = canvas.getContext('2d') 

        function getValues(){
            let Radious = Math.floor(Math.random()*10 + 1)
            let PX = Math.random()*MyWidth  
            let PY = Math.random()*(-2000)
            return [PX, PY, Radious]
        }

        function Star (x, y, dx, lastPX, radious, angle){
            this.x = x
            this.y = y
            this.radious = radious
            this.dx = dx
            this.lastPX = lastPX
            this.angle = angle

            this.draw = function() {
                c.beginPath()            
                c.arc(this.x, this.y, this.radious, 0, Math.PI*2, false)
                c.strokeStyle = '#000000'
                c.fillStyle = '#000000'
                c.fill()
                c.stroke()
            }

            this.update = function() {
                if(this.y > MyHeight) {
                    if (this.dx === 1){
                        splash(this.x, this.y)
                        this.dx = 2
                    }                    
                    this.lastPX = this.x
                    this.angle = 0
                    this.radious -= this.radious*0.3
                }

                let moveRadious = this.radious * 5
                let velocity = 1
                let radX = moveRadious*3
                let radY = moveRadious*3

                if(this.dx === 1){
                    this.y += 8

                }else if(this.dx === 2){
                    let getV = getValues()                    
                    this.x = getV[0]
                    this.y = getV[1]
                    this.radious = getV[2]
                    this.dx = 1

                }else if(this.dx === 3){
                    this.angle += Math.acos(1-Math.pow(velocity/moveRadious,2)/2)
                    this.x = this.lastPX + radX + radX * Math.cos(this.angle+Math.PI)
                    this.y = MyHeight + radY * Math.sin(this.angle+Math.PI)
                }
                else if(this.dx === 4){                    
                    this.angle += Math.acos(1-Math.pow(velocity/moveRadious,2)/2)
                    this.x = this.lastPX - radX - radX * Math.cos(this.angle+Math.PI)
                    this.y = MyHeight + radY * Math.sin(this.angle+Math.PI)
                }
                
                // if (moveRadious < 5) {
                //     let getV = getValues()                    
                //     this.x = getV[0]
                //     this.y = getV[1]
                //     this.radious = getV[2]
                //     this.dx = 1
                    
                // }
                this.draw()
            }            
        }

        var arrayStars = []
        const init = () => {
            arrayStars = []
            for (var i=0; i< Rain; i++){
                let getV = getValues()
                arrayStars.push(new Star(getV[0], getV[1], 1, 0, getV[2], 0))
            }
        }
        init()

        const splash = (x, y) => {
            for (var i = 0; i < 5; i++){
                let Radious = Math.random()*5 + 1
                let direction = Math.round(Math.random() + 3)
                arrayStars.push(new Star(x, y-30, direction, x, Radious, 0))
            }
        }

        var interval = setInterval(()=>{            
            c.clearRect(0,0,MyWidth,MyHeight)
            for (var i = 0; i < arrayStars.length; i++){
                arrayStars[i].update()
            }            
        },16)

        const changeSize = () => {
            setMyHeight(window.innerHeight*0.6)
            setMyWidth(window.innerWidth*0.7)
            console.log('resize')
        }

        window.addEventListener('resize', changeSize)

        return (() => {
            window.removeEventListener('resize', changeSize)
            clearInterval(interval)
            interval = 0
        })
    }, [MyWidth, MyHeight])

    return (
        <div className='mt-3'>
            <div className='row m-0 p-0 justify-content-center'>                
                <h3 className='col-4 col-md-4 col-lg-2 text-white'>Change Rain</h3>
                <input ref={sliderRef} type="range" className="custom-range col-4 col-md-4 col-lg-2 mt-2 mr-5" min="0" max="5" step="0.1"></input>   
                <button ref={sliderBut} className='btn btn-danger col-md-4 col-4 col-lg-1 mr-2 ml-5'>Go Crazy</button>
                <input ref={sliderIn} type='number' placeholder='Pick Number' className='col-4 col-md-4 col-lg-2'></input>
            </div>
            <p className='warning_text'>Depending on your PC more than 300 can crash your Page</p>
            <canvas id="myCanvas3" className='mt-4 canvasStyle'>sdsd</canvas>            
        </div>
    )
}

export default CanvasRain2
