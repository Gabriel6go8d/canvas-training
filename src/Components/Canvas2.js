import React, {useEffect, useRef} from 'react'


function Canvas2() {
    const canvasStyle = {
        backgroundColor: '#f3f6f4',
        border: '2px solid black'
    }

    const sliderRef = useRef(null)
    const sliderBut = useRef(null)
    const sliderIn = useRef(null)

    useEffect(() => {
        sliderRef.current.addEventListener('change', function(e){
            Rain = e.target.value * 400
            init()
        })
        sliderBut.current.addEventListener('click', function(e){
            Rain = sliderIn.current.value
            init()
        })

        let MyHeight = window.innerHeight*0.8
        let MyWidth = window.innerWidth*0.8

        var Rain = 100

        var canvas = document.getElementById('myCanvas2')        
        canvas.height = MyHeight
        canvas.width = MyWidth
        var c = canvas.getContext('2d') 

        function getValues(){
            let Radious = Math.floor(Math.random()*10 + 1)
            let PX = Math.random()*MyWidth - MyWidth*0.3
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
                    this.dx = 2
                    this.lastPX = this.x
                    this.angle = 0
                    this.radious -= this.radious*0.3
                }

                var moveRadious = this.radious * 5

                if(this.dx === 1){
                    this.x += 3
                    this.y += 8
                }else if(this.dx === 2){
                    let velocity = 2
                    this.angle += Math.acos(1-Math.pow(velocity/moveRadious,2)/2)
                    this.x = this.lastPX + moveRadious + moveRadious * Math.cos(this.angle+Math.PI) 
                    this.y = MyHeight + (moveRadious + 30 )* Math.sin(this.angle+Math.PI)
                }      
                
                if (moveRadious < 5) {
                    let getV = getValues()                    
                    this.x = getV[0]
                    this.y = getV[1]
                    this.radious = getV[2]
                    this.dx = 1
                    
                }
                this.draw()
            }            
        }

        var arrayStars = []
        const init = () => {
            arrayStars = []
            for (var i=0; i < Rain; i++){
                let getV = getValues()
                arrayStars.push(new Star(getV[0], getV[1], 1, 0, getV[2], 0))
            }
        }

        init()

        setInterval(()=>{            
            c.clearRect(0,0,MyWidth,MyHeight)
            for (var i = 0; i < arrayStars.length; i++){
                arrayStars[i].update()
            }            
        },16)
    }, [])

     

    return (
        <div>
            <div className='row justify-content-center mt-2'>                
                <h3 className='col-2 text-white'>Change Rain</h3>
                <input ref={sliderRef} type="range" class="custom-range col-2 mt-2 mr-5" min="0" max="5" step="0.1"></input>   
                <button ref={sliderBut} className='btn btn-danger mr-2 ml-5'>Go Crazy</button>
                <input ref={sliderIn} type='number' placeholder='Pick Number'></input>
            </div>
            <canvas id="myCanvas2" className='mt-4' style={canvasStyle}>sdsd</canvas>       
              
        </div>
    )
}

export default Canvas2
