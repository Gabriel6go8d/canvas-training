import React, {useEffect, useState}  from 'react'

function Canvas() {

    const canvasStyle = {
        backgroundColor: '#f3f6f4',
        border: '2px solid black'
    }

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
    var MaxRadious = 50
    

    useEffect(() => {
        let MyHeight = window.innerHeight*0.8
        let MyWidth = window.innerWidth*0.8

        var canvas = document.getElementById('myCanvas')        
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
                if(mouse.x-dimAll.x - this.x < 50 && mouse.x-dimAll.x - this.x > -50 && mouse.y-dimAll.y - this.y < 50 && mouse.y-dimAll.y - this.y > -50 && this.radious < MaxRadious) {
                    this.radious += 1
                }else if (this.radious > this.minRadious){
                    this.radious -= 1                }


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
        setInterval(()=>{            
            c.clearRect(0,0,MyWidth,MyHeight)
            for (var i = 0; i < arrayCircle.length-1; i++){
                arrayCircle[i].Update()
            }            
        },16)
    }, [])
    

    return (
        <div className='col mt-2'>
            <div className='row justify-content-center'>
                <button className='btn btn-success mt-1' onClick={()=>fillC=!fillC} >Fill or Not</button>
            </div>
            <canvas id="myCanvas" className='mt-1' style={canvasStyle}>sdsd</canvas>
            
        </div>
    )
}

export default Canvas
