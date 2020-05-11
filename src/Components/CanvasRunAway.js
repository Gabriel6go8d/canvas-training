import React, {useEffect, useState}  from 'react'

function CanvasRunAway(prop) {

    var mouse = {
        x: undefined,
        y: undefined
    }  

    var ColorAllowed = [
        '#F2C38C',
        '#24160D',
        '#F35217',
        '#8B0104',
        '#570200'
    ]


    var fillC = true

    const [MyHeight, setMyHeight] = useState(window.innerHeight*0.6)
    const [MyWidth, setMyWidth] = useState(window.innerWidth*0.7)
    

    useEffect(() => {

        var canvas = document.getElementById('myCanvas4')        
        canvas.height = MyHeight
        canvas.width = MyWidth
        var c = canvas.getContext('2d')        

        const LogPositionMouse = (e) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
        }

        const ResizeCanvas = () => {
            canvas.height = window.innerHeight*0.8
            canvas.width = window.innerWidth*0.8
            init()
        }

        window.addEventListener('mousemove', LogPositionMouse)
        window.addEventListener('resize', ResizeCanvas)

        function Circle(x,y,dx,dy, radious, minRadious, color){
            this.x = x
            this.y = y
            this.dx = dx
            this.dy = dy
            this.radious = radious
            this.minRadious = minRadious
            this.color = color

            this.drawCircle = function (){
                c.beginPath()            
                c.arc(this.x, this.y, this.radious, 0, Math.PI*2, false)
                c.strokeStyle = color
                c.fillStyle = color
                if(fillC){c.fill()}
                c.stroke()
            }

            this.Update = function() {
                if (this.x + this.radious > Math.floor(MyWidth) || this.x - this.radious < 0){
                    this.dx = -this.dx
                }
                if (this.y + this.radious > Math.floor(MyHeight) || this.y - this.radious < 0){
                    this.dy = -this.dy
                }
                this.x += this.dx
                this.y += this.dy 

                let dimAll = canvas.getBoundingClientRect()
                if(mouse.x-dimAll.x - this.x < 100 && mouse.x-dimAll.x - this.x > -100 && mouse.y-dimAll.y - this.y < 100 && mouse.y-dimAll.y - this.y > -100) {
                    if(this.x - (mouse.x - dimAll.x) < 0){
                        this.x -= 2
                    }else{
                        this.x += 2
                    }
                    if(this.y - (mouse.y - dimAll.y) < 0){
                        this.y -= 2
                    }else{
                        this.y += 2
                    }
                }
                this.drawCircle()
            }
        }          
        
        
        var arrayCircle = []
        const init = () => {
            arrayCircle = []
            for (var i = 0; i < 500; i++){
                let Radious = Math.floor(Math.random() * 7 + 1)
                var PX = Math.random()*(MyWidth-Radious*2) + Radious
                var PY = Math.random()*(MyHeight-Radious*2) + Radious
                var DX = (Math.random() - 0.5) * 2
                var DY = (Math.random() - 0.5) * 2      
                //var Color = Math.floor(Math.random()*16777215).toString(16)            
                var Color = ColorAllowed[Math.floor(Math.random()*ColorAllowed.length)]
                //var Color = '#ff0000'          
                arrayCircle.push(new Circle(PX, PY, DX, DY, Radious, Radious, Color))
            }
        }   

        init()        
        var interval = setInterval(()=>{            
            c.clearRect(0,0,MyWidth,MyHeight)
            for (var i = 0; i < arrayCircle.length-1; i++){
                arrayCircle[i].Update()
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [MyWidth, MyHeight])
    

    return (
        <div className='mt-3'>
            <div className='row m-0 p-0 justify-content-center'>
                <button className='btn btn-success' onClick={()=>fillC=!fillC} >Fill or Not</button>
            </div>
            <canvas id="myCanvas4" className='mt-1 canvasStyle'></canvas>
            
        </div>
    )
}

export default CanvasRunAway
