window.addEventListener('load', ()=>{
    // this function returns the stroke size of a line 
    let penSize = ()=>{
        let size = document.getElementById("pensize").value
        return size;
    }

    // this function returns the stroke color 
    let penColor = ()=>{
        let strokeColor = document.getElementById("pencolor").value
        return strokeColor;
    }
    // reference the canvas 
	let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    
    // get the window - client dimension 
    let CANVAS_HEIGHT = window.innerHeight;
    let CANVAS_WIDTH = window.innerWidth;
    
    // function that dynamically resize the canvas 
    function resizeWin(){
    	canvas.height = CANVAS_HEIGHT
    	canvas.width = CANVAS_WIDTH
        console.log("resizeWin")
    }
    resizeWin() // resize function called 
    
    // initialize the drawing status 
    var drawing = false;
    
    function startPoint(){
    	drawing = true
        console.log("startPoint")
    }
    
    function endPoint(){
    	drawing = false
        ctx.beginPath()
        console.log("endPoint")
    }
    
    function draw(e){
    	if(!drawing) return;
        ctx.lineWidth = penSize()
        ctx.strokeStyle = penColor()
        ctx.lineCap = "round";
        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(e.clientX, e.clientY)
    }

    canvas.addEventListener('mousedown', startPoint)
    canvas.addEventListener('mouseup', endPoint)
    canvas.addEventListener('mousemove', draw)

    window.addEventListener("resize", resizeWin)
})